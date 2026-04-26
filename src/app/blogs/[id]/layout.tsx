import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// ─── Shared blog post data (used for metadata + JSON-LD schema) ──────────────
const BLOG_DATA: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    image: string;
    author: string;
    datePublished: string;
  }
> = {
  "1": {
    title:
      "The Future of CRM Automation: AI Workflows That Save Time & Boost Conversions",
    description:
      "Discover how AI-driven CRM automation is eliminating manual data entry, improving lead management, and increasing conversion rates. Learn the tools and strategies shaping the future of CRM.",
    keywords: [
      "CRM automation",
      "AI-driven CRM",
      "CRM workflow automation",
      "best CRM automation tools",
      "AI in customer relationship management",
      "automated CRM software",
      "CRM automation for sales teams",
      "increase conversion rates with CRM",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    author: "Sagar Singh",
    datePublished: "2026-02-22",
  },
  "2": {
    title:
      "Mastering Client Communication: The SaaS Playbook for Small Business Owners Who Want Clients for Life",
    description:
      "Learn the 7 proven client communication strategies small business owners use to reduce churn, build advocacy, and turn transactional relationships into long-term partnerships — backed by the right SaaS tools.",
    keywords: [
      "client communication strategies",
      "small business client retention",
      "SaaS tools for small business",
      "how to keep clients happy",
      "client relationship management",
      "reduce client churn",
      "client onboarding",
      "client communication framework",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    author: "Nikita Singh",
    datePublished: "2026-02-23",
  },
  "3": {
    title:
      "Scaling Your Agency: The First 100 Days — From Freelance Hustle to Structured Business",
    description:
      "A step-by-step guide for freelancers transitioning to an agency model. Covers positioning, systems, hiring, pricing, and the mindset shift that separates agencies that scale from those that stall.",
    keywords: [
      "scaling your agency",
      "freelance to agency transition",
      "agency first 100 days",
      "how to start an agency",
      "SaaS tools for agencies",
      "agency mindset",
      "agency owner tips",
      "digital agency growth",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    author: "Ropa Roy",
    datePublished: "2026-02-24",
  },
  "4": {
    title:
      "Why Minimalist Design Converts Better: How Reducing Cognitive Load Transforms Landing Page Performance",
    description:
      "The evidence-backed case for minimalist web design. Learn how reducing cognitive load on your landing pages boosts conversions, and the 7 practical design principles that top SaaS brands use to turn visitors into customers.",
    keywords: [
      "minimalist design",
      "cognitive load web design",
      "landing page optimization",
      "conversion rate optimization",
      "CRO",
      "UX design for conversions",
      "web design for conversions",
      "high-converting landing page",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    author: "Wasim Faiz",
    datePublished: "2026-02-26",
  },
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const id = params.id;
  const post = BLOG_DATA[id];

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you are looking for could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blogs/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blogs/${id}`,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = BLOG_DATA[id];

  // Article JSON-LD schema for Google rich results (author, date, image in SERP)
  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.datePublished,
        dateModified: post.datePublished,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: "Setzet",
          url: "https://setzet.com",
          logo: {
            "@type": "ImageObject",
            url: "https://setzet.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://setzet.com/blogs/${id}`,
        },
      }
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {children}
    </>
  );
}
