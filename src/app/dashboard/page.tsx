// src/app/dashboard/page.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";
// If you use NextAuth, expose a helper like this:
import { requireUser } from "@/lib/auth"; // must return { id: string, name?: string, email?: string }

export default async function DashboardPage() {
  const user = await requireUser();

  const [enrolledCount, favoritesCount] = await Promise.all([
    prisma.enrollment.count({ where: { studentId: user.id } }),
    prisma.favorite.count({ where: { userId: user.id } }),
  ]);
  const firstName = user.name?.split(" ")[0] ?? "there";

  return (
    <div className="container">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5">
        <div>
          <h1 className="fw-bold">Welcome, {firstName} 👋</h1>
          <p className="text-muted mt-2">
            Track your learning at a glance, jump back into courses, and manage
            your profile.
          </p>
        </div>
        <div className="mt-3 mt-md-0 d-flex gap-2">
          <Link href="/dashboard/enrollments" className="btn btn-primary">
            My Enrollments
          </Link>
          <Link href="/account/profile" className="btn btn-outline-secondary">
            Update Profile
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-uppercase text-muted">Enrolled</h6>
              <h2 className="fw-bold">{enrolledCount}</h2>
              <p className="text-muted small mb-3">
                Courses you’re enrolled in
              </p>
              <Link href="/dashboard/enrollments" className="btn btn-link p-0">
                View details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-uppercase text-muted">Favorites</h6>
              <h2 className="fw-bold">{favoritesCount}</h2>
              <p className="text-muted small mb-3">Saved to explore later</p>
              <Link href="/favorites" className="btn btn-link p-0">
                View favorites
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-uppercase text-white-50">
                Get back on track
              </h6>
              <h4 className="fw-semibold text-white">Continue learning</h4>
              <p className="small text-white-50">
                Jump straight to your enrolled courses and pick up where you
                left off.
              </p>
              <Link href="/dashboard/enrollments" className="btn btn-light">
                Go to My Enrollments
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary actions */}
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">What’s next</h5>
              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">
                    Browse courses and add to favorites
                  </span>
                  <Link href="/courses" className="btn btn-sm btn-link">
                    Explore
                  </Link>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">
                    Update your profile and learning preferences
                  </span>
                  <Link href="/account/profile" className="btn btn-sm btn-link">
                    Edit profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Need help?</h5>
              <p className="text-muted small">
                Check our FAQs or contact support if you run into any issues
                with enrollments or payments.
              </p>
              <div className="d-flex gap-2">
                <Link
                  href="/contact-us"
                  className="btn btn-outline-secondary btn-sm"
                >
                  Support
                </Link>
                <Link href="/faq" className="btn btn-primary btn-sm">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
