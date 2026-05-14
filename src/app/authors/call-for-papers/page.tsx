import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { topics, submissionTypes } from '@/data/callForPapers';
import { Badge } from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description:
    'OAIC 2026 invites original research contributions across all areas of artificial intelligence.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        title="Call for Papers"
        description="OAIC 2026 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[
          { href: '/authors/call-for-papers', label: 'Call for Papers' },
        ]}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 bg-primary-50/50 border-primary-100 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The conference solicits contributions that present original and
                unpublished work on all aspects of AI, machine learning, and
                their applications. All accepted papers will be published in the
                conference proceedings and archived in major academic
                databases.
              </p>
            </CardContent>
          </Card>

          <SectionHeader
            title="Topics of Interest"
            subtitle="Broad Scope"
            description="We invite submissions on a wide range of topics, including but not limited to:"
            className="mb-10"
          />
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {topics.map((t) => (
              <Card key={t.category} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-900">{t.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary-500" />
                        <span className="text-sm text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionHeader
            title="Submission Types"
            subtitle="Format Options"
            description="Choose the format that best fits your contribution."
            className="mb-10"
          />
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {submissionTypes.map((type) => (
              <Card
                key={type.type}
                className="flex flex-col transition-all hover:border-primary-500 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-primary-900">{type.type}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <Badge className="mb-3 bg-primary-100 text-primary-700 border-none">
                    {type.pages}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button as="a" size="lg" className="w-full sm:w-auto bg-primary-700 hover:bg-primary-800 text-white px-12 py-6 text-lg font-bold">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Submit via EasyChair
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
