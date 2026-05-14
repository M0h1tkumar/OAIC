import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function Section({ children, className, id, container = true }: { children: ReactNode; className?: string; id?: string; container?: boolean }) {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-24", className)}>
      {container ? <div className="container-wide">{children}</div> : children}
    </section>
  );
}
