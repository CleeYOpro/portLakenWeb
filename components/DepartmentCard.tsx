import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

export default function DepartmentCard({ title, description, icon: Icon, href }: DepartmentCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-2xl border border-port-mist shadow-sm card-hover cursor-pointer group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-port-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <Icon className="text-port-sky mb-4 text-3xl group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-bold text-lg text-port-navy mb-2 group-hover:text-port-sky transition-colors">
            {title}
          </h3>
          <p className="text-sm text-port-slate mb-4">{description}</p>
          <span className="inline-flex items-center gap-1 text-port-sky text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            Learn more <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
