import { getPosts } from "@/utils/utils";
import { Column, Grid, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "project", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const projectsByYear = displayedProjects.reduce((acc, project) => {
    const year = new Date(project.metadata.publishedAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<number, typeof displayedProjects>);

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Column fillWidth gap="48" marginBottom="40" paddingX="l">
      {years.map((year) => (
        <Column fillWidth gap="l" key={year}>
          <Heading as="h2" variant="heading-strong-xl" onBackground="neutral-strong">
            {year}
          </Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
              width: "100%",
            }}
          >
            {projectsByYear[year].map((post, index) => (
              <ProjectCard
                priority={index < 2}
                key={post.slug}
                href={`/project/${post.slug}`}
                images={post.metadata.images}
                title={post.metadata.title}
                description={post.metadata.summary}
                content={post.content}
                link={post.metadata.link || ""}
              />
            ))}
          </div>
        </Column>
      ))}
    </Column>
  );
}
