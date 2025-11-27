import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: SITE_CONFIG.title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
      "desenvolvedor freelancer",
      "criação de sites",
      "desenvolvimento de aplicativos",
      "programador web",
      "consultoria de software",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "React Native",
    ],
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author.name,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_CONFIG.url,
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: "/og-image.png", // Crie uma imagem OG 1200x630px
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: ["/og-image.png"],
      creator: "@brunocarmo", // Atualize com seu Twitter
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.author.email,
    jobTitle: "Desenvolvedor Full-Stack",
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin],
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "React Native",
    ],
  };
}
