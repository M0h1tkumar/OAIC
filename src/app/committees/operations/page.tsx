import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { operationsCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Operations Committee',
  description: 'OAIC 2026 Operations Committee.',
};

export default function OperationsCommitteePage() {
  return (
    <>
      <PageHeader
        title="Operations Committee"
        description="The team managing logistics, venues, and day-to-day conference operations."
        breadcrumbs={[
          { href: '/committees/operations', label: 'Operations Committee' },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {operationsCommittee.map((member) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-sm">
                <CommitteeMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
