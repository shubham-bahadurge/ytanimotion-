import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChartNoAxesCombined, Clapperboard, Lightbulb, ShieldCheck, Star, Video } from "lucide-react";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "YouTube Learning Courses for Beginners",
  description: `Explore beginner-friendly courses on YouTube strategy, original content planning, creator workflows and video production at ${siteConfig.businessName}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteConfig.businessName} | Creator Learning Studio`,
    description: "Beginner-friendly courses for YouTube strategy, original content and creator workflows.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.businessName} Creator Learning Studio` }]
  }
};

export default function Home() {
  const instructor = siteConfig.instructor;

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="hero-pill"><Star size={14} aria-hidden="true" /> CREATOR LEARNING STUDIO</div>
            <h1 className="hero-title">Build your channel.<br /><span>Own your growth.</span></h1>
            <p className="hero-copy">Learn YouTube strategy, original content workflows and creator skills with clear, practical lessons made for beginners.</p>
            <div className="hero-actions">
              <Link className="btn hero-primary" href="/courses">Explore courses <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="btn hero-secondary" href="/#why">Why {siteConfig.businessName}?</Link>
            </div>
            <p className="trust-line">{siteConfig.trustLine}</p>
            <p className="hero-note">Practical learning. Original ideas. Sustainable creator habits.</p>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of a creator learning playbook">
            <div className="playbook-card">
              <div className="playbook-top"><span>THE CREATOR PLAYBOOK</span><Video aria-hidden="true" /></div>
              <div className="playbook-symbol" aria-hidden="true">▶</div>
              <h2>From first idea<br />to your next upload.</h2>
              <div className="playbook-progress"><span /></div>
              <div className="playbook-meta"><span>LEARN AT YOUR PACE</span><span>01 / 06</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="container section-space">
        <div className="section-intro">
          <p className="eyebrow">WHY LEARN WITH US</p>
          <h2>A clearer path to creating</h2>
          <p className="muted">No shortcuts or overnight-success promises. Just the skills, structure and confidence to make better work.</p>
        </div>
        <div className="feature-grid">
          {[
            { icon: <Lightbulb aria-hidden="true" />, title: "Beginner friendly", description: "Clear explanations and practical steps, even if you are starting from zero." },
            { icon: <Clapperboard aria-hidden="true" />, title: "Real creator workflows", description: "Learn research, scripting, production and publishing as a connected process." },
            { icon: <ChartNoAxesCombined aria-hidden="true" />, title: "Learn from data", description: "Understand analytics and use evidence to improve your next video." },
            { icon: <ShieldCheck aria-hidden="true" />, title: "Create responsibly", description: "Focus on original work, licensed assets and sustainable channel practices." }
          ].map((item) => (
            <article className="card feature-card" key={item.title}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="soft-section section-space">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">START LEARNING</p><h2>Featured courses</h2></div>
            <Link className="text-link" href="/courses">View all courses →</Link>
          </div>
          <div className="course-grid">
            {courses.slice(0, 3).map((course) => (
              <article className="card course-card" key={course.slug}>
                <div className="course-art" role="img" aria-label={`${course.title} course artwork placeholder`}>{course.icon}</div>
                <p className="course-eyebrow">{course.badge.toUpperCase()} · {course.level.toUpperCase()}</p>
                <h3>{course.title}</h3>
                <p className="muted course-description">{course.description}</p>
                <div className="course-card-bottom">
                  <strong>₹{course.price.toLocaleString("en-IN")}</strong>
                  <Link className="btn btn-light" href={`/course/${course.slug}`} aria-label={`View details for ${course.title}`}>View details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container instructor-section">
        <div className="instructor-photo-wrap">
          {instructor.photoPath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="instructor-photo" src={instructor.photoPath} alt={instructor.photoAlt} />
          ) : (
            <div className="instructor-photo-placeholder" role="img" aria-label="Instructor photo placeholder">
              <span aria-hidden="true">S</span><small>TODO: ADD INSTRUCTOR PHOTO</small>
            </div>
          )}
          <p className="instructor-name">{instructor.name}</p>
          <p className="muted instructor-role">Instructor · {siteConfig.businessName}</p>
        </div>
        <div className="instructor-copy">
          <p className="eyebrow">ABOUT THE STUDIO</p>
          <h2>Learn by understanding the process.</h2>
          <p className="muted">{instructor.bio}</p>
          <h3 className="credential-heading">Instructor background</h3>
          <ul className="credential-list">
            {instructor.credentials.map((credential) => <li key={credential}>{credential}</li>)}
          </ul>
          <p className="edit-note">Editable instructor details: update <code>config/site.ts</code>.</p>
          <Link href="/courses" className="btn instructor-cta">Find your course <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      {siteConfig.showTestimonials ? (
      <section className="soft-section section-space">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">STUDENT EXPERIENCES</p>
            <h2>What students say</h2>
            <p className="muted">A place for honest feedback from learners in the {siteConfig.businessName} community.</p>
          </div>
          <p className="sample-review-notice">SAMPLE TESTIMONIALS — replace these examples with genuine student reviews and get permission before publishing.</p>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="card testimonial-card" key={testimonial.name}>
                {testimonial.rating ? <p className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>{"★".repeat(Math.max(0, Math.min(5, testimonial.rating)))}</p> : null}
                <blockquote>“{testimonial.quote}”</blockquote>
                <div><strong>{testimonial.name}</strong><p className="muted">{testimonial.role}</p></div>
              </article>
            ))}
          </div>
          <p className="edit-note">Editable sample reviews: update <code>data/testimonials.ts</code>.</p>
        </div>
      </section>

      ) : null}

      <section className="container philosophy-section">
        <p className="eyebrow">A NOTE FROM US</p>
        <h2>“Your first video does not need to be perfect. It needs to teach you something.”</h2>
        <p className="muted">{siteConfig.businessName} learning philosophy</p>
      </section>
    </main>
  );
}
