import { About, Blog, Gallery, Home, Newsletter, Person, Project, Social } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ircham",
  lastName: "Aji",
  name: `Ircham Aji`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "contact@ircham.dev",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa", "Ngoko and Kromo Javanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/irchamaji",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ircham-aji/",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ircham_aji/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ircham_aji",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Personal website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer who turns bugs into features</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Ircham Aji</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/rinjani",
  },
  subline: (
    <>
      Hi, I'm Ircham, a full stack web developer at my own working room, where I craft applications <br /> and automation tools that solve real-world problems.
</>
  ),
  tagline: <>AI integration? Sure, I do that too. Who doesn't these days?</>,
  
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey there! I'm Ircham, a full stack web developer based in Jakarta, 
        and I thrive on solving complex problems with clean, efficient code. 
        From building robust backends to crafting seamless frontends, 
        I enjoy creating tech solutions that just work.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Same Cool Organization",
        timeframe: "2022 - Present",
        role: "Different role but still IT Guy",
        achievements: [
            <>
              Basically the same thing as before but with more responsibility and better code quality.
            </>,
            <>
              I also did other things.
            </>,
        ],
        images: [],
      },
      {
        company: "Some Cool Organization",
        timeframe: "2020 - 2022",
        role: "Some IT Guy",
        achievements: [
          <>
            I worked as IT Guy. From a simple automation script to a complex information system. Frontend, backend, security, I built it all.
          </>,
          <>
            I did some other stuff too.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "IT Guy Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
      name: "Some Cool Campuss",
      description: <>Applied Bachelor's Degree in (secure) software engineering.</>,
      },
    ],
    },
    technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Product Engineering",
        description: (
            <>I build full products end to end, on the web and natively on Apple platforms, from the database schema to the last pixel. The stack is a tool, not an identity.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Swift",
            icon: "swift",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "AI & Agentic Systems",
        description: (
            <>I integrate AI into the systems you already have. Instead of digging through dashboards and spreadsheets, you just ask in a chat and get insight from your own data. I also build tool-calling agents and MCP servers, and I ship with coding agents every day: I direct them, review what they write, and own the result.</>
        ),
        tags: [
          {
            name: "Claude",
            icon: "claude",
          },
          {
            name: "OpenAI",
            icon: "openai",
          },
          {
            name: "MCP",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Self-hosting & Infra",
        description: (
            <>I run my own homeserver: containerized apps, push-to-deploy, and private networking. If it can be self-hosted, I've probably tried it.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Tailscale",
            icon: "tailscale",
          },
          {
            name: "Cloudflare",
            icon: "cloudflare",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Security by Design",
        description: (
            <>I work in the cybersecurity world every day, and it shows in what I build. Security isn't a checklist at the end; it's part of the design from day one: least privilege, safe defaults, and every input treated as hostile. When agents write half the code, that awareness is what keeps it safe.</>
        ),
        tags: [
          {
            name: "Secure by design",
            icon: "shield",
          },
          {
            name: "Least privilege",
            icon: "lock",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and cybersecurity",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const project: Project = {
  path: "/project",
  label: "Project",
  title: `Things I've built`,
  description: `A peek into some of the projects I've worked on.`,
  // Create new project pages by adding a new .mdx file to app/project/projects
  // All projects will be listed on the /home and /project routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, project, gallery };
