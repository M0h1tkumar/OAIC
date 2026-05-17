import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import { FileDown, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Submission Guidelines',
  description:
    'Everything you need to know to prepare and submit your paper to OAIC 2026.',
};

function GeneralGuidelines() {
  return (
    <div className="space-y-6 mt-4 md:mt-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-8">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
          All papers submitted to OAIC 2026 must be original, unpublished work not
          currently under review at any other venue. Submissions must be in
          English and comply with the IEEE double-column conference format.
        </p>
        <ul className="space-y-5">
          {[
            'Papers must not exceed the specified page limits (excluding references).',
            'All submissions will undergo a blind peer review process.',
            'Authors must anonymize their submissions, removing names, affiliations, and acknowledgements.',
            'Self-citations should be minimized and written in the third person to maintain anonymity.',
            'Submitted papers must not be under review elsewhere simultaneously.',
            'At least one author of an accepted paper must register for the conference and present the paper.',
          ].map((item) => (
            <li key={item} className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary-400 stroke-[3]" />
              </div>
              <span className="text-gray-700 font-medium text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FormattingGuidelines() {
  return (
    <div className="space-y-6 mt-4 md:mt-0">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
        {[
          { label: 'Format', value: 'IEEE double-column, A4' },
          { label: 'Full Paper Length', value: '6 pages (+ refs)' },
          { label: 'Short Paper Length', value: '4–6 pages (+ refs)' },
          { label: 'Font', value: 'Times New Roman, 10pt' },
          { label: 'File Format', value: 'PDF only' },
          { label: 'File Size Limit', value: '10 MB' },
        ].map((spec) => (
          <div key={spec.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 hover:border-primary-400 hover:shadow-md transition-all duration-300 flex flex-col justify-center">
            <p className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-wider mb-1">
              {spec.label}
            </p>
            <p className="font-bold text-primary-900 text-lg md:text-xl">{spec.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
        <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold w-full sm:w-auto text-center">
          <FileDown className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 inline-block" /> LaTeX Template
        </Button>
        <Button as="a" href="#" variant="outline" className="text-primary-600 border-2 border-primary-600 hover:bg-primary-50 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-sm transition-transform hover:-translate-y-1 rounded-md font-bold w-full sm:w-auto text-center">
          <FileDown className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 inline-block" /> Word Template
        </Button>
      </div>
    </div>
  );
}

function EthicsPolicy() {
  return (
    <div className="space-y-6 md:space-y-8 mt-4 md:mt-0">
      <Alert className="bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-lg shadow-sm text-primary-950 p-5 md:p-6">
        <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
        <AlertTitle className="font-bold text-lg md:text-xl text-primary-900 ml-2">Commitment to Integrity</AlertTitle>
        <AlertDescription className="text-base md:text-lg mt-2 ml-2 leading-relaxed">
          OAIC 2026 is committed to the highest standards of publication ethics
          and takes all forms of misconduct seriously, including plagiarism,
          data fabrication, and improper authorship.
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          {
            title: 'Plagiarism',
            desc: 'All submissions are checked using plagiarism detection software. Papers with significant overlap will be rejected.',
          },
          {
            title: 'Authorship',
            desc: 'All listed authors must have made a substantial contribution. Ghostwriting and honorary authorship are not permitted.',
          },
          {
            title: 'AI-Assisted Writing',
            desc: 'Authors must disclose the use of AI writing tools. AI tools may not be listed as authors.',
          },
          {
            title: 'Data Integrity',
            desc: 'Authors must preserve research data and provide access upon reasonable request by reviewers.',
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-2 md:mb-3">{item.title}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CameraReady() {
  return (
    <div className="space-y-6 mt-4 md:mt-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-8">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
          After acceptance, authors must prepare and submit the camera-ready
          version by{' '}
          <strong className="font-bold text-primary-900">September 10, 2026</strong>.
        </p>
        <ul className="space-y-5">
          {[
            'Address all reviewer comments in the final version.',
            'Include author names and affiliations (no longer anonymized).',
            'Add acknowledgements section if applicable.',
            'Ensure PDF is IEEE Xplore compliant (use IEEE PDF eXpress).',
            'Submit the signed IEEE Copyright Form.',
            'Upload all materials via the submission system by the deadline.',
          ].map((item) => (
            <li key={item} className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-primary-400 stroke-[3]" />
              </div>
              <span className="text-gray-700 font-medium text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const TABS = [
  { value: 'general', label: 'General Guidelines', component: GeneralGuidelines },
  { value: 'formatting', label: 'Formatting', component: FormattingGuidelines },
  { value: 'ethics', label: 'Ethics Policy', component: EthicsPolicy },
  { value: 'camera-ready', label: 'Camera-Ready', component: CameraReady },
];

export default function SubmissionGuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Submission Guidelines"
        description="Everything you need to know to prepare and submit your paper to OAIC 2026."
        breadcrumbs={[
          {
            href: '/authors/submission-guidelines',
            label: 'Submission Guidelines',
          },
        ]}
      />
      <Section className="pb-16 md:pb-24 px-4 md:px-0">
        <Tabs defaultValue="general" className="mx-auto max-w-4xl">
          <TabsList className="w-full flex-wrap h-auto justify-start md:justify-center mb-4 md:mb-0 gap-2">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex-1 min-w-[140px] md:flex-none">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="pt-6">
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </>
  );
}
