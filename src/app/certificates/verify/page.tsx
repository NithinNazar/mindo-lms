export const dynamic = "force-dynamic";

import VerifyCertificateClient from "@/components/Certificate/VerifyCertificateClient";

export default function VerifyCertificatePage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-4">
            <h1 className="h3">Verify a Certificate</h1>
            <p className="text-muted mb-0">
              Enter a certificate number or verification code to confirm its
              authenticity.
            </p>
          </div>

          <VerifyCertificateClient />
        </div>
      </div>
    </div>
  );
}
