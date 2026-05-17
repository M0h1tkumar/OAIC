import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { organizingCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Organizing Committee',
  description: 'Meet the organizing committee of OAIC 2026.',
};

export default function OrganizingCommitteePage() {
  return (
    <>
      <PageHeader
        title="Organizing Committee"
        description="The dedicated team working to make OAIC 2026 a world-class conference."
        breadcrumbs={[
          { href: '/committees/organizing', label: 'Organizing Committee' },
        ]}
      />
      <Section className="py-8 md:py-16">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {organizingCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
