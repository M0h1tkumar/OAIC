import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-primary-900 text-white py-12 border-b border-primary-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-orange/5 blur-3xl rounded-full translate-x-1/2" />
      
      <div className="container-wide text-center relative z-10">
        <nav aria-label="Breadcrumb" className="flex justify-center">
          <ol className="flex items-center gap-2 text-sm text-primary-200">
            <li>
              <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 opacity-50" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent-cyan transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight">{title}</h1>
        {description && <p className="mt-4 text-lg md:text-xl text-primary-100 max-w-2xl mx-auto opacity-90">{description}</p>}
      </div>
    </div>
  );
}
