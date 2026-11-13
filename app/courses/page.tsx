import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="container" style={{ padding: "64px 0" }}>
      <p className="eyebrow">THE COURSE LIBRARY</p>
      <h1 style={{ fontSize: "clamp(34px,5vw,44px)", letterSpacing: -1.5, margin: "10px 0" }}>Choose what you want to master.</h1>
      <p className="muted" style={{ maxWidth: 620, lineHeight: 1.7, marginBottom: 34 }}>
        Practical courses to help you plan, create and improve original YouTube content.
      </p>
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
    </main>
  );
}
