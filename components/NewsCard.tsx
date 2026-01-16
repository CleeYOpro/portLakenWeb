import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  href: string;
  featured?: boolean;
}

export default function NewsCard({
  title,
  description,
  image,
  category,
  date,
  href,
  featured = false,
}: NewsCardProps) {
  if (featured) {
    return (
      <Link
        href={href}
        className="group relative rounded-2xl overflow-hidden shadow-lg bg-white card-hover cursor-pointer"
      >
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-port-navy/90 via-port-navy/40 to-transparent"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {category}
              </span>
              <span className="text-white/70 text-sm">{date}</span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-white/80 leading-relaxed max-w-xl">{description}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex gap-6 p-4 bg-white rounded-xl shadow-lg card-hover cursor-pointer"
    >
      <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-port-sky text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
          <span className="text-port-slate/50">•</span>
          <span className="text-port-slate/70 text-sm">{date}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-port-navy mb-2 group-hover:text-port-steel transition-colors">
          {title}
        </h3>
        <p className="text-port-slate text-sm line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
