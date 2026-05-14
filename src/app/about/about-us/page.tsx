import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';

export const metadata: Metadata = {
  title: 'About OAIC',
  description:
    'Learn about the 2026 1st Odisha AI Conference (OAIC), a premier event for AI research and innovation in India.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About The Conference"
        description="Learn more about the 2026 1st Odisha AI Conference (OAIC)."
        breadcrumbs={[{ href: '/about/about-us', label: 'About Us' }]}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Fostering Innovation"
            title="The 2026 1st Odisha AI Conference (OAIC)"
          />
          <div className="prose prose-lg mt-6 text-gray-700">
            <p>
              The <strong>2026 1st Odisha AI Conference (OAIC)</strong> will serve as a premier platform for exchanging ideas, presenting research findings, and fostering collaborations that address real-world challenges through AI-driven solutions.
            </p>
            <p>
              OAIC focuses on both theoretical developments and practical applications of AI across diverse domains, emphasizing ethical AI, sustainable development, and the integration of AI with emerging technologies to drive societal and economic transformation.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-4">About the Host: Siksha &apos;O&apos; Anusandhan (SOA)</h3>
            <p>
              <strong>Siksha &apos;O&apos; Anusandhan (Deemed to be University)</strong>, Bhubaneswar, declared u/s 3 of UGC Act, 1956, is a leading university in India offering professional programs in multiple disciplines. Today, it has emerged as one of the fastest-growing universities in the country, providing a vibrant atmosphere for teaching-learning, research and development, and socially inclusive extension activities.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>NAAC:</strong> Accredited with &apos;A++&apos; grade (3rd Cycle).</li>
              <li><strong>QS World University Ranking 2023:</strong> One of only 35 institutions in India to be ranked internationally.</li>
              <li><strong>Times Higher Education World University Ranking 2023:</strong> Placed 89th in India.</li>
              <li><strong>MHRD NIRF India Rankings 2026:</strong> 14th in University Category, 26th in Engineering.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

