import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { industryForumsCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Industry Forums & Exhibition Committee',
  description: 'OAIC 2026 Industry Forums and Exhibition Committee.',
};

export default function IndustryForumsCommitteePage() {
  return (
    <>
      <PageHeader
        title="Industry Forums & Exhibition Committee"
        description="Connecting academia and industry through exhibitions, forums, and networking events."
        breadcrumbs={[
          {
            href: '/committees/industry-forums',
            label: 'Industry Forums Committee',
          },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {industryForumsCommittee.map((member) => (
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
