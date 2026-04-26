import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, project } from "@/resources";
import { Projects } from "@/components/project/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: project.title,
    description: project.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(project.title)}`,
    path: project.path,
  });
}

export default function ProjectPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={project.path}
        title={project.title}
        description={project.description}
        image={`/api/og/generate?title=${encodeURIComponent(project.title)}`}
      />
      <Heading marginBottom="s" variant="heading-strong-xl" align="center">
        {project.title}
      </Heading>
      <Text align="center" onBackground="neutral-weak" variant="body-default-m" marginBottom="l">
        {project.description}
      </Text>
      <Projects />
    </Column>
  );
}
