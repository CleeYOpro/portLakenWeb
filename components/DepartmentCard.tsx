import Link from "next/link";
import { IconType } from "react-icons";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

export default function DepartmentCard({ title, description, icon: Icon, href }: DepartmentCardProps) {
  return (
    <Link href={href} className="block department-card">
      <div className="relative aspect-square bg-[#8a9bb5] rounded-2xl cursor-pointer group overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,155,195,0.5)] hover:bg-[#7a8eaa] hover:scale-[1.03]">
        {/* Spotlight glow overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15)_0%,transparent_70%)]" />

        {/* Icon */}
        <div className="relative z-10 mb-4">
          <Icon className="text-white text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500" />
        </div>

        {/* Title - appears on hover */}
        <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
          <h3 className="font-bold text-lg text-white drop-shadow-md">{title}</h3>
          <p className="text-white/70 text-xs mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
