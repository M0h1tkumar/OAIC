import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { importantDates } from '@/data/dates';
import { Badge } from '@/components/ui/Badge';
import { Calendar, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import { cn } from '@/lib/cn';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Important Dates',
  description:
    'Key deadlines for paper submission, notification, camera-ready, and registration for OAIC 2026.',
};


export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        title="Important Dates"
        description="Plan ahead - these deadlines are firm. Mark them in your calendar."
        breadcrumbs={[
          { href: '/authors/important-dates', label: 'Important Dates' },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <Card className="border-none shadow-xl overflow-hidden">
            <CardHeader className="bg-primary-900 text-white p-8">
              <CardTitle className="text-3xl md:text-4xl">Key Deadlines</CardTitle>
              <CardDescription className="text-primary-100 opacity-90 mt-2 text-lg">
                All deadlines are at 11:59 PM AoE (Anywhere on Earth).
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-10">
              <div className="flow-root">
                <ul className="-mb-8">
                  {importantDates.map((date, i) => (
                    <li key={i}>
                      <div className="relative pb-12">
                        {i !== importantDates.length - 1 ? (
                          <span
                            className="absolute left-6 top-6 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex items-start group">
                          <div className="relative px-1">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-white shadow-lg group-hover:scale-110 transition-transform ring-4 ring-white">
                              <Calendar className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 ml-6 pt-2">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <p className="text-xl font-bold text-gray-900">
                                  {date.event}
                                </p>
                                <time
                                  dateTime={date.date}
                                  className="mt-1 block text-lg font-medium text-primary-600"
                                >
                                  {date.date}
                                </time>
                              </div>
                              <Badge className={cn(
                                "w-28 justify-center py-1.5 font-bold uppercase tracking-wider text-xs border-none",
                                date.status === 'open' ? 'bg-green-100 text-green-700' : 
                                date.status === 'extended' ? 'bg-orange-100 text-orange-700' :
                                'bg-gray-100 text-gray-600'
                              )}>
                                {date.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert className="mt-12 border-primary-100 bg-primary-50/50 p-6">
            <AlertTriangle className="h-6 w-6 text-primary-600" />
            <AlertTitle className="text-primary-900 font-bold text-xl ml-2">Note on Deadlines</AlertTitle>
            <AlertDescription className="text-primary-800 mt-2 ml-2 text-lg leading-relaxed">
              All deadlines are at{' '}
              <strong className="font-semibold underline">
                11:59 PM AoE (Anywhere on Earth)
              </strong>
              . Extensions, if any, will be announced on this page and via
              email to registered authors. We strongly encourage early
              submissions to avoid last-minute technical issues.
            </AlertDescription>
          </Alert>
        </div>
      </Section>
    </>
  );
}
