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
      <Section>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {organizingCommittee.map((member) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-sm">
                <CommitteeMemberCard member={member} />
              </div>
            ))}
          </div>
      </Section>
    </>
  );
}
