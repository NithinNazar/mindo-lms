"use client";

import { useState } from "react";

type Props = {
  targetId: string;
  filename?: string;
};

export default function DownloadButtons({ targetId, filename }: Props) {
  const [downloading, setDownloading] = useState<"image" | "pdf" | null>(null);

  async function getCanvas() {
    const element = document.getElementById(targetId);
    if (!element) throw new Error("Certificate element not found");

    const html2canvas = (await import("html2canvas")).default;
    return html2canvas(element, {
      useCORS: true,
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
    });
  }

  async function handleDownloadImage() {
    try {
      setDownloading("image");
      const canvas = await getCanvas();
      const dataUrl = canvas.toDataURL("image/png", 1);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${filename ?? "certificate"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to export certificate image", err);
      alert("Unable to download image. Please try again.");
    } finally {
      setDownloading(null);
    }
  }

  async function handleDownloadPdf() {
    try {
      setDownloading("pdf");
      const canvas = await getCanvas();
      const dataUrl = canvas.toDataURL("image/png", 1);
      const { jsPDF } = await import("jspdf");

      const orientation = canvas.width >= canvas.height ? "landscape" : "portrait";
      const pdf = new jsPDF({
        orientation,
        unit: "pt",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${filename ?? "certificate"}.pdf`);
    } catch (err) {
      console.error("Failed to export certificate PDF", err);
      alert("Unable to download PDF. Please try again.");
    } finally {
      setDownloading(null);
    }
  }

  const isPdfBusy = downloading === "pdf";
  const isImageBusy = downloading === "image";

  return (
    <div className="d-flex gap-2">
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        onClick={handleDownloadPdf}
        disabled={!!downloading}
      >
        {isPdfBusy ? "Preparing PDF..." : "Download as PDF"}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={handleDownloadImage}
        disabled={!!downloading}
      >
        {isImageBusy ? "Preparing Image..." : "Download as Image"}
      </button>
    </div>
  );
}
