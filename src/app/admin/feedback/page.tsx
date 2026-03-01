import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FeedbackCreateForm from "./FeedbackCreateForm";
import FeedbackEditCard from "./FeedbackEditCard";
import { createFeedback, deleteFeedback, updateFeedback } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminFeedbackPage() {
  const items = await prisma.feedback.findMany({
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
  });

  const total = items.length;
  const published = items.filter((item) => item.isPublished).length;

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 mb-1">Manage Testimonials</h1>
          <div className="text-muted small">
            Create, edit, or hide student feedback displayed across the site.
          </div>
        </div>
        <Link href="/admin" className="btn btn-outline-secondary btn-sm">
          Back to Admin
        </Link>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small">Total Entries</div>
              <div className="h4 mb-0">{total}</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small">Published</div>
              <div className="h4 mb-0">
                <span className="badge bg-success">{published}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Create Feedback</h5>
              <FeedbackCreateForm action={createFeedback} />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex flex-column gap-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h5 className="card-title mb-0">Existing Feedback</h5>
                <span className="badge bg-secondary">{total}</span>
              </div>
              {items.length === 0 ? (
                <p className="text-muted mb-0">
                  No testimonials yet. Use the form on the left to add one.
                </p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {items.map((item) => (
                    <FeedbackEditCard
                      key={item.id}
                      feedback={{
                        id: item.id,
                        name: item.name,
                        role: item.role,
                        message: item.message,
                        rating: item.rating,
                        imageUrl: item.imageUrl,
                        isPublished: item.isPublished,
                        displayOrder: item.displayOrder,
                        createdAt: item.createdAt.toISOString(),
                        updatedAt: item.updatedAt.toISOString(),
                      }}
                      updateAction={updateFeedback}
                      deleteAction={deleteFeedback}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
