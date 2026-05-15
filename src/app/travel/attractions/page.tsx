import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AttractionCard from '@/components/sections/AttractionCard';
import { touristAttractions } from '@/data/attractions';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Tourist Attractions',
  description:
    "Explore Odisha's magnificent heritage, nature, and culture while attending OAIC 2026.",
};

const cuisine = [
  {
    name: 'Dalma',
    desc: 'The quintessential Odishan comfort dish - lentils slow-cooked with seasonal vegetables.',
  },
  {
    name: 'Pakhala Bhata',
    desc: 'Fermented rice soaked in water, a summer staple served with sides.',
  },
  {
    name: 'Chhena Poda',
    desc: "Odisha's signature dessert - a caramelized cottage cheese cake.",
  },
  {
    name: 'Rasagola',
    desc: 'A classic sweet, with a GI tag for its origin in Odisha.',
  },
];

export default function AttractionsPage() {
  return (
    <>
      <PageHeader
        title="Tourist Attractions"
        description="Bhubaneswar and Odisha offer a treasure trove of history, nature, and culture to explore."
        breadcrumbs={[
          { href: '/travel/attractions', label: 'Tourist Attractions' },
        ]}
      />

      <Section>
        <SectionHeader
          title="Explore Odisha"
          subtitle="Heritage & Nature"
          description="World-class heritage sites and natural wonders, all within reach of Bhubaneswar."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {touristAttractions.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-100">
        <SectionHeader
          title="Taste of Odisha"
          subtitle="Local Delicacies"
          description="Don't leave without trying these iconic traditional dishes."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cuisine.map((dish) => (
            <Card key={dish.name} className="h-full hover:shadow-lg transition-shadow border-none">
              <CardHeader className="bg-white">
                <CardTitle className="text-xl text-primary-900">{dish.name}</CardTitle>
              </CardHeader>
              <CardContent className="bg-white">
                <CardDescription className="text-gray-600 leading-relaxed italic">
                  &quot;{dish.desc}&quot;
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
