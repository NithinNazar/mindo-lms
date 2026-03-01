import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AnnouncementCreateForm from "./AnnouncementCreateForm";
import AnnouncementEditCard from "./AnnouncementEditCard";
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminAnnouncementPage() {
  const items = await prisma.announcement.findMany({
    orderBy: { updatedAt: "desc" },
  });
  const publishedCount = items.filter((item) => item.isPublished).length;

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 mb-1">Top Banner Announcement</h1>
          <div className="text-muted small">
            Manage the promotional banner rendered in the site top header.
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
              <div className="h4 mb-0">{items.length}</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small">Published</div>
              <div className="h4 mb-0">
                <span className="badge bg-success">{publishedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Create Announcement</h5>
              <AnnouncementCreateForm action={createAnnouncement} />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex flex-column gap-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h5 className="card-title mb-0">Existing Announcements</h5>
                <span className="badge bg-secondary">{items.length}</span>
              </div>
              {items.length === 0 ? (
                <p className="text-muted mb-0">
                  No announcements yet. Create one using the form on the left.
                </p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {items.map((item) => (
                    <AnnouncementEditCard
                      key={item.id}
                      announcement={{
                        id: item.id,
                        label: item.label,
                        highlight: item.highlight,
                        linkUrl: item.linkUrl,
                        isPublished: item.isPublished,
                        createdAt: item.createdAt.toISOString(),
                        updatedAt: item.updatedAt.toISOString(),
                      }}
                      updateAction={updateAnnouncement}
                      deleteAction={deleteAnnouncement}
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
