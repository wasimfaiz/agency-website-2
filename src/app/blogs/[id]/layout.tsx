import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const id = params.id;

  if (id === "1") {
    return {
      title: 'The Future of CRM Automation: AI Workflows That Save Time & Boost Conversions',
      description: 'Discover how AI-driven CRM automation is eliminating manual data entry, improving lead management, and increasing conversion rates. Learn the tools and strategies shaping the future of CRM.',
      keywords: ['CRM automation', 'AI-driven CRM', 'CRM workflow automation', 'best CRM automation tools', 'AI in customer relationship management', 'automated CRM software', 'CRM automation for sales teams', 'increase conversion rates with CRM'],
    }
  }

  return {
    title: 'Journal | Studio',
    description: 'Insights, stories, and strategies from our team.',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
