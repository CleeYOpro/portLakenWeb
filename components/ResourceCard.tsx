import Image from "next/image";

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  distance: string;
}

export default function ResourceCard({
  title,
  description,
  image,
  category,
  distance,
}: ResourceCardProps) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-port-mist">
      <div className="relative h-48 img-zoom">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/70 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-port-navy">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-port-slate mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-port-slate">
            <span className="material-symbols-outlined text-base">location_on</span>
            {distance}
          </div>
          <button className="px-4 py-2 border border-port-mist rounded-lg text-xs font-semibold text-port-navy hover:bg-port-navy hover:text-white hover:border-port-navy transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
