import Link from "next/link";
import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "YouTube Strategy and Creator Courses",
  description: `Browse ${siteConfig.businessName} courses for beginner creators covering YouTube strategy, content planning, editing and original video workflows.`,
  alternates: { canonical: "/courses" },
  openGraph: { title: `Courses | ${siteConfig.businessName}`, description: "Browse practical courses for beginner YouTube creators.", url: "/courses", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.businessName} courses` }] }
};

export default function CoursesPage() {
  return (
    <main className="container" style={{ padding: "64px 0" }}>
      <p className="eyebrow">THE COURSE LIBRARY</p>
      <h1 style={{ fontSize: "clamp(34px,5vw,44px)", letterSpacing: -1.5, margin: "10px 0" }}>Choose what you want to master.</h1>
      <p className="muted" style={{ maxWidth: 620, lineHeight: 1.7, marginBottom: 34 }}>
        Practical courses to help you plan, create and improve original YouTube content.
      </p>
      {courses.length === 0 ? (
        <div className="card" style={{ padding: 28, textAlign: "center" }}>
          <h2>No courses are available right now.</h2>
          <p className="muted">Please check back soon or contact us if you need help finding a course.</p>
          <Link className="btn" href="/contact">Contact {siteConfig.businessName}</Link>
        </div>
      ) : (
      <div className="course-grid">
        {courses.map((course) => (
          <article className="card course-card" key={course.slug}>
            <div className="course-art" role="img" aria-label={`${course.title} course artwork placeholder`}>
              {course.icon}
            </div>
            <p className="course-eyebrow">{course.badge.toUpperCase()} · {course.level.toUpperCase()}</p>
            <h2>{course.title}</h2>
            <p className="muted course-description">{course.description}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13, color: "#66758c", margin: "18px 0" }}>
              <span aria-label={`Duration: ${course.duration}`}>◷ {course.duration}</span>
              <span>{course.modules.reduce((count, module) => count + module.lessons.length, 0)} lessons</span>
            </div>
            <div className="course-card-bottom" style={{ borderTop: "1px solid #edf0f5", paddingTop: 18 }}>
              <strong style={{ fontSize: 20 }}>₹{course.price.toLocaleString("en-IN")}</strong>
              <Link className="btn" href={`/course/${course.slug}`} aria-label={`View details for ${course.title}`}>
                View details →
              </Link>
            </div>
          </article>
        ))}
      </div>
      )}
    </main>
  );
}
