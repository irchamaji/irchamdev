"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  link: string;
}

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // mountain lake
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", // forest sunbeam
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", // aerial mountains
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80", // forest path
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80", // waterfall
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", // rocky peaks
];

function getFallbackImage(title: string): string {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) & 0xffffffff;
  }
  return FALLBACK_IMAGES[Math.abs(hash) % FALLBACK_IMAGES.length];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
}) => {
  const displayLink = link ? link.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
  const displayImages = images.length > 0 ? images : [getFallbackImage(title)];

  return (
    <Flex direction="column" fillWidth gap="m">
      <Carousel
        aspectRatio="16 / 9"
        sizes="(max-width: 960px) 100vw, 480px"
        items={displayImages.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Flex
        direction="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="16"
      >
        {title && (
          <SmartLink href={href} style={{ textDecoration: "none" }}>
            <Heading as="h3" wrap="balance" variant="heading-strong-l">
              {title}
            </Heading>
          </SmartLink>
        )}
        {(description?.trim() || content?.trim() || link) && (
          <Flex direction="column" gap="12">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="16" wrap paddingTop="8" horizontal="between">
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read more</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  prefixIcon="link"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">{displayLink}</Text>
                </SmartLink>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
