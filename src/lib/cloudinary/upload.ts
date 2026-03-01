export type CloudinaryUploadOptions = {
  folder?: string;
};

export async function uploadUnsignedImage(
  file: File,
  options: CloudinaryUploadOptions = {}
): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary unsigned upload is not configured");
  }

  const folder = options.folder ?? process.env.NEXT_PUBLIC_CLOUDINARY_FEEDBACK_FOLDER ?? "";

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  if (folder) {
    formData.append("folder", folder);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  const data = (await response.json()) as { secure_url?: string; url?: string };
  const secureUrl = data.secure_url ?? data.url;
  if (!secureUrl) {
    throw new Error("Upload completed without a secure URL");
  }

  return secureUrl;
}
