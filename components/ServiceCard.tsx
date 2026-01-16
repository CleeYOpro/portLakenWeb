import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  emoji: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, emoji, image, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy via-port-navy/50 to-transparent opacity-80"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className="text-3xl mb-3 block transform transition-transform duration-300 group-hover:scale-110">
            {emoji}
          </span>
          <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
