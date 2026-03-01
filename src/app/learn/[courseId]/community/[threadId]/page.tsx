export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import NewPostForm from "./reply/NewPostForm";
import PostsClient from "./PostsClient";

type Params = { courseId: string; threadId: string };

export default async function ThreadPage({ params }: { params: Promise<Params> }) {
  const user = await requireUser();
  const { courseId: courseIdParam, threadId: threadIdParam } = await params;
  const courseId = Number(courseIdParam);
  const threadId = Number(threadIdParam);
  if (!Number.isFinite(courseId) || !Number.isFinite(threadId)) notFound();

  const course = await prisma.course.findUnique({ where: { id: courseId }, select: { id: true, title: true, instructorId: true } });
  if (!course) notFound();

  const enrollment = await prisma.enrollment.findUnique({ where: { courseId_studentId: { courseId, studentId: user.id } }, select: { id: true } });
  const isInstructor = course.instructorId === user.id || user.role === "ADMIN";
  if (!enrollment && !isInstructor) notFound();

  const thread = await prisma.discussionThread.findUnique({
    where: { id: threadId },
    select: {
      id: true,
      title: true,
      createdAt: true,
      acceptedPostId: true,
      authorId: true,
      author: { select: { name: true, email: true } },
    },
  });
  if (!thread) notFound();

  const posts = await prisma.discussionPost.findMany({
    where: { threadId },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      content: true,
      createdAt: true,
      author: { select: { name: true, email: true } },
      _count: { select: { upvotes: true } },
    },
  });

  // Which posts has the current user upvoted?
  const userUpvotes = await prisma.discussionPostUpvote.findMany({
    where: { userId: user.id, post: { threadId } },
    select: { postId: true },
  });
  const upvotedSet = new Set(userUpvotes.map((u) => u.postId));

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div className="text-muted small">Community – {course.title}</div>
          <h1 className="h4 mb-0">{thread.title}</h1>
        </div>
        <Link href={`/learn/${courseId}/community`} className="btn btn-link p-0">Back</Link>
      </div>

      <PostsClient
        threadId={thread.id}
        acceptedPostId={thread.acceptedPostId ?? null}
        canAccept={thread.authorId === user.id || user.role === "ADMIN"}
        posts={posts.map((p) => ({
          id: p.id,
          authorName: p.author.name || p.author.email,
          createdAt: p.createdAt.toISOString(),
          content: p.content,
          votes: p._count.upvotes,
          isUpvoted: upvotedSet.has(p.id),
        }))}
      />

      <div className="card shadow-sm">
        <div className="card-header bg-light fw-semibold">Reply</div>
        <div className="card-body">
          <NewPostForm threadId={thread.id} courseId={courseId} />
        </div>
      </div>
    </div>
  );
}
