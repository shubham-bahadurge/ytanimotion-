// Edit this file to add or update the courses shown on the website.
export type Lesson = { id: string; title: string; videoId: string };
export type Module = { title: string; lessons: Lesson[] };
export type Course = {
  slug: string; title: string; eyebrow: string; description: string;
  longDescription: string; price: number; duration: string; level: string;
  badge: string; icon: string; outcomes: string[]; modules: Module[];
};
export const courses: Course[] = [
  {
    slug: "youtube-automation-blueprint",
    title: "YouTube Automation Blueprint",
    eyebrow: "Start here",
    description: "Build a repeatable, original-content YouTube workflow from idea to upload.",
    longDescription: "A beginner-friendly, practical course covering channel strategy, audience research, scripting, production workflows, publishing, analytics and responsible monetization. You will learn to build a sustainable channel using original or properly licensed content—not copied videos or misleading growth tactics.",
    price: 1999, duration: "6 weeks", level: "Beginner", badge: "Bestseller", icon: "▶",
    outcomes: ["Choose a focused channel niche and define its audience", "Research topics and plan a realistic content calendar", "Write engaging, original scripts and titles", "Understand editing, thumbnails and accessible production workflows", "Read YouTube Analytics and improve content responsibly"],
    modules: [
      { title: "Foundations & channel strategy", lessons: [
        { id: "ya-1", title: "How YouTube channels work", videoId: "M7lc1UVf-VE" },
        { id: "ya-2", title: "Choose a niche and audience", videoId: "ysz5S6PUM-U" }
      ]},
      { title: "Research, scripting & production", lessons: [
        { id: "ya-3", title: "Research ideas and validate topics", videoId: "ScMzIvxBSi4" },
        { id: "ya-4", title: "Write an original video script", videoId: "aqz-KE-bpKQ" }
      ]},
      { title: "Publishing & improvement", lessons: [
        { id: "ya-5", title: "Titles, thumbnails and publishing", videoId: "jNQXAC9IVRw" },
        { id: "ya-6", title: "Understand analytics and iterate", videoId: "eRsGyueVLvQ" }
      ]}
    ]
  },
  {
    slug: "youtube-content-strategy",
    title: "YouTube Content Strategy",
    eyebrow: "Plan with purpose",
    description: "Turn audience questions into a clear, consistent publishing plan.",
    longDescription: "Learn to research your audience, organize ideas, create a repeatable calendar and measure what resonates. Designed for creators who want a thoughtful content system.",
    price: 999, duration: "3 weeks", level: "Beginner", badge: "Practical", icon: "✦",
    outcomes: ["Build an audience profile", "Create a 30-day content calendar", "Develop repeatable research habits", "Measure performance beyond views"],
    modules: [
      { title: "Audience & ideas", lessons: [
        { id: "cs-1", title: "Know your audience", videoId: "M7lc1UVf-VE" },
        { id: "cs-2", title: "Build your idea bank", videoId: "ysz5S6PUM-U" }
      ]},
      { title: "Planning & measurement", lessons: [
        { id: "cs-3", title: "Create a publishing calendar", videoId: "ScMzIvxBSi4" },
        { id: "cs-4", title: "Review what is working", videoId: "aqz-KE-bpKQ" }
      ]}
    ]
  },
  {
    slug: "creator-editing-workflow",
    title: "Creator Editing Workflow",
    eyebrow: "Make better videos",
    description: "Understand the essentials of editing, storytelling and efficient production.",
    longDescription: "A structured introduction to planning footage, editing for clarity, sound basics, visual storytelling and quality checks before publishing.",
    price: 1499, duration: "4 weeks", level: "Beginner", badge: "New", icon: "◈",
    outcomes: ["Organize a simple production workflow", "Edit for clarity and pacing", "Improve audio and visual consistency", "Create a repeatable pre-publish checklist"],
    modules: [
      { title: "Editing foundations", lessons: [
        { id: "ew-1", title: "Plan your edit", videoId: "M7lc1UVf-VE" },
        { id: "ew-2", title: "Story, pacing and clarity", videoId: "ysz5S6PUM-U" }
      ]},
      { title: "Finishing & quality", lessons: [
        { id: "ew-3", title: "Audio and visual checks", videoId: "ScMzIvxBSi4" },
        { id: "ew-4", title: "Export and publish", videoId: "aqz-KE-bpKQ" }
      ]}
    ]
  }
];