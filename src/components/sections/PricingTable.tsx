import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pricingTiers } from '@/data/registration';

export default function PricingTable() {
  return (
    <Tabs defaultValue="Early Bird" className="w-full overflow-hidden">
      <div className="overflow-x-auto pb-2 scrollbar-hide">
        <TabsList className="mb-6 grid w-full min-w-[300px] grid-cols-3">
          {pricingTiers.map((tier) => (
            <TabsTrigger key={tier.name} value={tier.name} className="text-xs sm:text-sm px-2">
              {tier.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {pricingTiers.map((tier) => (
        <TabsContent key={tier.name} value={tier.name} className="animate-in fade-in-50 duration-300">
          <Card className="border-primary-100 shadow-sm">
            <CardHeader className="bg-primary-50/50">
              <CardTitle className="text-primary-900">{tier.name} Registration</CardTitle>
              <CardDescription className="text-primary-700 font-medium">Cutoff: {tier.cutoff}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="pl-4 sm:pl-0">Category</TableHead>
                      <TableHead className="text-right pr-4 sm:pr-0">Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tier.rows.map((row) => (
                      <TableRow key={row.category}>
                        <TableCell className="font-medium text-xs sm:text-sm pl-4 sm:pl-0 py-4">
                          {row.category}
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs sm:text-sm pr-4 sm:pr-0">
                          <span className="text-primary-700 font-bold">
                            {row.currency === 'INR' ? '₹' : '$'}
                            {row.amount}
                          </span>
                          <span className="ml-1 text-gray-500 text-[10px] sm:text-xs">
                            {row.currency}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
      <div className="mt-8 text-center">
        <Button size="lg" className="w-full sm:w-auto bg-primary-700 hover:bg-primary-800 text-white font-bold py-6 px-12 text-lg rounded-none shadow-xl">
          Register Now
        </Button>
      </div>
    </Tabs>
  );
}
