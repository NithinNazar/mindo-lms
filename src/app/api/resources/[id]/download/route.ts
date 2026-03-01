import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function makeCloudinaryAttachmentUrl(rawUrl: string, filename: string) {
	try {
		const u = new URL(rawUrl);
		if (!u.hostname.includes("res.cloudinary.com")) return null;
		// Insert fl_attachment:<filename> immediately after /upload/
		// e.g. /upload/v1700000000/abc -> /upload/fl_attachment:My%20File/v1700000000/abc
		u.pathname = u.pathname.replace(
			/\/upload\//,
			`/upload/fl_attachment:${encodeURIComponent(filename)}/`
		);
		return u.toString();
	} catch {
		return null;
	}
}

export async function GET(
	_req: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id: idParam } = await context.params;
	const id = Number(idParam);
	if (!id || Number.isNaN(id)) {
		return NextResponse.json({ error: "Invalid id" }, { status: 400 });
	}

	const resource = await prisma.resource.findUnique({
		where: { id },
		select: { fileUrl: true, fileName: true, fileType: true },
	});

	if (!resource) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}

	// Try to stream-through with attachment headers first (most reliable)
	try {
		const upstream = await fetch(resource.fileUrl, {
			cache: "no-store",
			redirect: "follow",
		});

		if (upstream.ok && upstream.body) {
			const detectedType =
				upstream.headers.get("content-type") ||
				resource.fileType ||
				"application/octet-stream";
			// Force non-images to download by sending a generic binary content type
			const isImage = /^image\//i.test(detectedType);
			const sendType = isImage
				? detectedType
				: "application/octet-stream";
			const contentLength =
				upstream.headers.get("content-length") || undefined;

			return new Response(upstream.body, {
				status: 200,
				headers: {
					"Content-Type": sendType,
					...(contentLength
						? { "Content-Length": contentLength }
						: {}),
					"Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
						resource.fileName
					)}`,
					// Prevent browser from attempting in-tab preview
					"X-Content-Type-Options": "nosniff",
					"Cache-Control": "private, max-age=0, must-revalidate",
				},
			});
		}

		// If we couldn't stream, try a Cloudinary attachment redirect next
		const cloudinaryAttachment = makeCloudinaryAttachmentUrl(
			resource.fileUrl,
			resource.fileName
		);
		if (cloudinaryAttachment) {
			return NextResponse.redirect(cloudinaryAttachment, { status: 302 });
		}

		// Final fallback: redirect to original URL
		return NextResponse.redirect(resource.fileUrl, { status: 302 });
	} catch {
		const cloudinaryAttachment = makeCloudinaryAttachmentUrl(
			resource.fileUrl,
			resource.fileName
		);
		if (cloudinaryAttachment) {
			return NextResponse.redirect(cloudinaryAttachment, { status: 302 });
		}
		return NextResponse.redirect(resource.fileUrl, { status: 302 });
	}
}
