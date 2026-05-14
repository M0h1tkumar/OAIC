import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Visa Information',
  description:
    'Visa requirements and application guide for attending OAIC 2026 in Bhubaneswar, India.',
};

const visaCategories = [
  {
    country: 'USA, UK, EU, Canada, Australia',
    type: 'e-Visa',
    notes:
      'Apply online at indianvisaonline.gov.in. Typically granted in 3–5 business days.',
  },
  {
    country: 'SAARC Countries',
    type: 'Varies',
    notes:
      'Check country-specific requirements. Nepal/Bhutan citizens generally exempt.',
  },
  {
    country: 'China, Japan, South Korea',
    type: 'e-Visa',
    notes: 'e-Visa available. Apply at least 4 days in advance.',
  },
  {
    country: 'All other countries',
    type: 'Regular Visa',
    notes:
      'Apply at your nearest Indian embassy/consulate. Allow 2–4 weeks processing time.',
  },
];

const applicationSteps = [
  'Visit the official Indian e-Visa portal.',
  'Select "e-Visa" and choose your nationality.',
  'Fill in personal details, travel dates, and purpose (Conference/Business).',
  'Upload required documents: passport copy, photo, and invitation letter.',
  'Pay the visa fee online.',
  'Receive e-Visa approval via email (usually within 3–5 business days).',
  'Print your e-Visa and carry it with your passport.',
];

export default function VisaPage() {
  return (
    <>
      <PageHeader
        title="Visa Information"
        description="Planning your travel to OAIC 2026 in Bhubaneswar, India."
        breadcrumbs={[{ href: '/travel/visa', label: 'Visa Information' }]}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <Alert className="mb-12 border-primary-100 bg-primary-50/50">
            <AlertTriangle className="h-5 w-5 text-primary-600" />
            <AlertTitle className="text-primary-900 font-bold">Important Disclaimer</AlertTitle>
            <AlertDescription className="text-primary-800">
              Visa regulations are subject to change. Please verify all
              information with your local Indian embassy or the official
              government portal.
            </AlertDescription>
          </Alert>

          <Card className="mb-12 border-none shadow-md overflow-hidden">
            <CardHeader className="bg-primary-900 text-white p-6 md:p-8">
              <CardTitle className="text-2xl md:text-3xl">Visa Requirements</CardTitle>
              <CardDescription className="text-primary-100 opacity-90 mt-2">
                Most international visitors require a visa. The Indian
                government offers e-Visas for 165+ countries. We recommend applying at least 4
                weeks before travel.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-bold text-gray-900 py-4 px-6">Country/Region</TableHead>
                    <TableHead className="font-bold text-gray-900 py-4 px-6">Visa Type</TableHead>
                    <TableHead className="font-bold text-gray-900 py-4 px-6">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visaCategories.map((row) => (
                    <TableRow key={row.country}>
                      <TableCell className="font-semibold text-gray-800 py-4 px-6">
                        {row.country}
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <Badge className="bg-primary-100 text-primary-800 border-none px-3 py-1">{row.type}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-600 py-4 px-6 leading-relaxed text-sm">
                        {row.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mb-12 border-none shadow-md">
            <CardHeader className="border-b bg-gray-50/50 p-6 md:p-8">
              <CardTitle className="text-2xl md:text-3xl text-primary-900">Application Guide</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Step-by-step instructions to apply for your Indian e-Visa.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <ol className="space-y-6">
                {applicationSteps.map((step, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="mr-6 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-gray-700 leading-relaxed pt-1.5 md:text-lg">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button as="a" size="lg" className="w-full sm:w-auto bg-primary-700 hover:bg-primary-800 text-white px-10 py-7 text-lg font-bold shadow-xl rounded-none">
              <a
                href="https://indianvisaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> Indian e-Visa Portal
              </a>
            </Button>
            <Button as="a" variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100 border-primary-900 px-10 py-7 text-lg font-bold shadow-md rounded-none">
              <a href="mailto:info@oaic2024.in?subject=Invitation Letter Request">
                Request Invitation Letter
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
