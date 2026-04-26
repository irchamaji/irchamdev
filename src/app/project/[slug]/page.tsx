import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, project } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/project/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "project", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${project.path}/${post.slug}`,
  });
}

export default async function ProjectSlug({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "project", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${project.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="8" horizontal="center" align="center">
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
      </Column>

      {post.metadata.images.length > 0 && (
        post.metadata.images.length === 1 ? (
          <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
        ) : (
          <Carousel
            aspectRatio="16 / 9"
            sizes="(max-width: 960px) 100vw, 960px"
            items={post.metadata.images.map((image) => ({
              slide: image,
              alt: post.metadata.title,
            }))}
          />
        )
      )}
      {post.metadata.link && (
        <Flex horizontal="center" paddingY="8">
          <SmartLink href={post.metadata.link} suffixIcon="arrowUpRight">
            <Flex gap="8" vertical="center">
              <Text variant="label-strong-m">Visit the project</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {post.metadata.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </Text>
            </Flex>
          </SmartLink>
        </Flex>
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
