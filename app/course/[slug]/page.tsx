import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Clock3, PlayCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return { title: "Course not found", robots: { index: false, follow: false } };
  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/course/${course.slug}` },
    openGraph: {
      type: "website",
      title: `${course.title} | SHUBHIII`,
      description: course.description,
      url: `/course/${course.slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${course.title} course` }]
    }
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  const lessonCount = course.modules.reduce((count, module) => count + module.lessons.length, 0);

  return (
    <main>
      <section style={{ background: "#102b55", color: "#fff", padding: "65px 0" }}>
        <div className="container">
          <Link href="/courses" style={{ color: "#bcd2f2", fontSize: 13 }}>← All courses</Link>
          <p style={{ color: "#9fc5ff", fontSize: 12, fontWeight: 800, letterSpacing: 2, marginTop: 30 }}>
            {course.eyebrow.toUpperCase()} · {course.level.toUpperCase()}
          </p>
          <h1 style={{ fontSize: "clamp(36px,5vw,54px)", maxWidth: 780, lineHeight: 1.08, letterSpacing: -1.7 }}>
            {course.title}
          </h1>
          <p style={{ color: "#d2deef", fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>{course.longDescription}</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", color: "#d2deef", fontSize: 14, marginTop: 20 }}>
            <span><Clock3 size={15} aria-hidden="true" style={{ display: "inline", verticalAlign: "middle" }} /> {course.duration}</span>
            <span><PlayCircle size={15} aria-hidden="true" style={{ display: "inline", verticalAlign: "middle" }} /> {lessonCount} lessons</span>
          </div>
        </div>
      </section>

      <div className="container course-detail-layout">
        <div>
          <h2 style={{ fontSize: 27 }}>What you will learn</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 14, marginTop: 22 }}>
            {course.outcomes.map((outcome) => (
              <li key={outcome} style={{ display: "flex", gap: 10, alignItems: "start", lineHeight: 1.6 }}>
                <CheckCircle2 color="#3974c8" size={19} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                {outcome}
              </li>
            ))}
          </ul>
          <h2 style={{ fontSize: 27, marginTop: 48 }}>Course curriculum</h2>
          {course.modules.map((module, moduleIndex) => (
            <section className="card" key={module.title} style={{ padding: 20, marginTop: 14 }}>
              <h3 style={{ margin: "0 0 12px" }}>Module {moduleIndex + 1}: {module.title}</h3>
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lesson.id} style={{ padding: "12px 0", borderTop: "1px solid #edf0f5", display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                  <span>{lessonIndex + 1}. {lesson.title}</span>
                  <span className="muted">Video lesson</span>
                </div>
              ))}
            </section>
          ))}
        </div>

        <aside>
          <div className="card course-purchase-card">
            <div className="course-art" role="img" aria-label={`${course.title} course artwork placeholder`}>{course.icon}</div>
            <p className="muted" style={{ fontSize: 13 }}>One-time course access</p>
            <div style={{ fontSize: 34, fontWeight: 850 }}>₹{course.price.toLocaleString("en-IN")}</div>
            <p className="muted" style={{ fontSize: 13 }}>Secure checkout · Learn at your pace</p>
            <Link className="btn" style={{ width: "100%", marginTop: 12 }} href={`/checkout?course=${course.slug}`} aria-label={`Buy ${course.title}`}>
              Buy now
            </Link>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.6, marginTop: 16 }}>{siteConfig.trustLine}</p>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.6, marginTop: 10 }}>
              Course content is educational. We do not promise views, subscribers or earnings.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
