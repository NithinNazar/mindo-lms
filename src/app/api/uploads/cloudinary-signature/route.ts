import { NextResponse } from "next/server";
import crypto from "crypto";

function requiredEnv(name: string) {
	const v = process.env[name];
	if (!v) throw new Error(`Missing env: ${name}`);
	return v;
}

export async function GET() {
	try {
		const cloudName = requiredEnv("CLOUDINARY_CLOUD_NAME");
		const apiKey = requiredEnv("CLOUDINARY_API_KEY");
		const apiSecret = requiredEnv("CLOUDINARY_API_SECRET");

		const timestamp = Math.floor(Date.now() / 1000);
		const folder = "avatars";

		// Build signature from signed params (alphabetical): folder, timestamp
		const toSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
		const signature = crypto
			.createHash("sha1")
			.update(toSign)
			.digest("hex");

		return NextResponse.json({
			cloudName,
			apiKey,
			timestamp,
			signature,
			folder,
		});
	} catch (e) {
		console.error("[cloudinary-signature] error", e);
		return NextResponse.json(
			{ error: "Server misconfigured" },
			{ status: 500 }
		);
	}
}
