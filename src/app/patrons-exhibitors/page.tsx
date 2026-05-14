import type { Metadata } from 'next';
// Sponsors component missing
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Sponsors & Exhibitors',
  description:
    'Partner with OAIC 2026 - sponsorship and exhibition opportunities.',
};

export default function PatronsExhibitorsPage() {
  return (
    <>
      <PageHeader
        title="Sponsors & Exhibitors"
        description="Partner with OAIC 2026 and connect with India's leading AI and Computer Science research community."
        breadcrumbs={[
          { href: '/patrons-exhibitors', label: 'Sponsors & Exhibitors' },
        ]}
      />

      {/* <Sponsors /> */}
    </>
  );
}
