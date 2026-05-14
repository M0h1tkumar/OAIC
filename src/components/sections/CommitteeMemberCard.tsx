import type { CommitteeMember } from '@/types';
import { User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  
  CardTitle,
} from '@/components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({
  member,
}: CommitteeMemberCardProps) {
  return (
    <Card className="flex flex-col items-center text-center h-full">
      <CardContent className="p-6 flex flex-col items-center">
        <Avatar className="mb-4 h-24 w-24">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : null}
          <AvatarFallback>
            <User className="h-10 w-10 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg font-bold text-primary-900 mb-1">{member.name}</CardTitle>
        <CardDescription className="text-sm font-semibold text-primary-700">{member.role}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto flex flex-col items-center">
        <div className="h-px w-12 bg-primary-100 mb-4" />
        <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
          {member.institution}
        </p>
      </CardFooter>
    </Card>
  );
}
