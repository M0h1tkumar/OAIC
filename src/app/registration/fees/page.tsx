import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import PricingTable from '@/components/sections/PricingTable';
import Section from '@/components/layout/Section';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { AlertTriangle } from 'lucide-react';
import { registrationIncludes } from '@/data/registration';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Registration Fees',
  description:
    'View OAIC 2026 registration fees for students, academics, industry, and international attendees.',
};

const notes = [
  'GST at 18% applicable on all INR registrations.',
  'Payment accepted via NEFT/RTGS, credit/debit card, and UPI.',
  'Cancellations before September 30, 2026receive 50% refund.',
  'No refunds after October 1, 2026.',
  'Each accepted paper requires at least one full registration.',
];

export default function RegistrationFeesPage() {
  return (
    <>
      <PageHeader
        title="Registration Fees"
        description="Register early for the best rates. Early Bird closes September 15, 2026."
        breadcrumbs={[
          { href: '/registration/fees', label: 'Registration Fees' },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-5xl">
          <PricingTable />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">
                Registration Includes
              </h3>
              <ul className="space-y-3">
                {registrationIncludes.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important Notes</AlertTitle>
              <AlertDescription>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>
    </>
  );
}
