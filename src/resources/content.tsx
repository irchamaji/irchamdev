import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ircham",
  lastName: "Aji",
  name: `Ircham Aji`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "contact@ircham.dev",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
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
    essential: true,
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
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hi, I'm Ircham, a full stack web developer at my own working room, where I craft applications <br /> and automation tools that solve real-world problems.
</>
  ),
  
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
      name: "Politeknik Siber dan Sandi Negara",
      description: <>Applied Bachelor's Degree in (secure) software engineering.</>,
      },
    ],
    },
    technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
            <>Experienced in building responsive and interactive user interfaces using modern web technologies.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
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
        title: "Backend Development",
        description: (
            <>Experienced in developing scalable backend services and APIs using frameworks like Django and Next.js, with database management in PostgreSQL.</>
        ),
        tags: [
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Infrastructure & DevOps",
        description: (
            <>Experienced in deploying and managing scalable applications using containerization and cloud services.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Supabase",
            icon: "supabase",
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
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

export { person, social, newsletter, home, about, blog, work, gallery };
