export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import DownloadButtons from "@/components/Certificate/DownloadButtons";
import styles from "./certificate.module.css";

type Params = { id: string };

export default async function CertificatePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const certId = Number(id);
  if (!Number.isFinite(certId)) notFound();

  const cert = await prisma.certificate.findUnique({
    where: { id: certId },
    include: {
      course: { select: { title: true } },
      user: { select: { name: true, email: true } },
    },
  });
  if (!cert || cert.userId !== user.id) notFound();

  const issuedOn = new Date(cert.issuedAt).toLocaleDateString();

  return (
    <div className={`container py-5 ${styles.pageWrapper}`}>
      <div className="d-flex justify-content-between align-items-center print-hidden">
        <h1 className="h4 mb-0">Certificate</h1>
        <DownloadButtons
          targetId="certificate-canvas"
          filename={`certificate-${cert.certificateNo ?? cert.id}`}
        />
      </div>

      <section id="certificate-canvas" className={styles.certificateShell}>
        <div className={styles.certificateContent}>
          <p className={styles.subtitle}>Presented by Lernio Academy</p>
          <h2 className={styles.decorTitle}>Certificate of Completion</h2>
          <p className={styles.subtitle}>This is to proudly acknowledge</p>

          <div className={styles.recipientName}>{cert.user.name}</div>

          <p className={styles.subtitle}>
            for successfully completing the professional learning program
          </p>
          <h3 className={styles.courseTitle}>{cert.course.title}</h3>

          <div className={styles.detailsRow}>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Certificate No.</div>
              <div className={styles.detailValue}>{cert.certificateNo}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Verification Code</div>
              <div className={styles.detailValue}>{cert.verificationCode}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Issued On</div>
              <div className={styles.detailValue}>{issuedOn}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Program Hours</div>
              <div className={styles.detailValue}>{cert.hours ?? 0}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Grade</div>
              <div className={styles.detailValue}>{cert.grade ?? "-"}</div>
            </div>
          </div>

          <div className={styles.signatureRow}>
            <div className={styles.signatureLine} data-label="Program Director">
              Sophia Bennett
            </div>
            <div className={styles.signatureLine} data-label="Head Instructor">
              Marcus Chen
            </div>
            <div className={styles.signatureLine} data-label="Date">
              {issuedOn}
            </div>
          </div>

          <div className={styles.seal} aria-hidden="true">
            <span>Official</span>
            <span>Seal</span>
          </div>
        </div>
      </section>
      <p className={`${styles.printHint} print-hidden`}>
        Download your certificate as a PDF or image to showcase your
        achievement.
      </p>
    </div>
  );
}
