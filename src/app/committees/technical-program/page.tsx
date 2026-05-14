import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { technicalProgramCommittee } from '@/data/committees';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Technical Program Committee',
  description:
    'Meet the technical program committee responsible for reviewing submissions to OAIC 2026.',
};

export default function TechnicalProgramCommitteePage() {
  return (
    <>
      <PageHeader
        title="Technical Program Committee"
        description="Leading experts who review and curate the OAIC 2026 research program."
        breadcrumbs={[
          {
            href: '/committees/technical-program',
            label: 'Technical Program Committee',
          },
        ]}
      />
      <Section>
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {technicalProgramCommittee.map((member) => (
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
