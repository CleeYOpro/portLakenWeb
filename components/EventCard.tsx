import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location?: string;
  time?: string;
  onReadMore?: () => void;
  readMoreLabel?: string;
}

export default function EventCard({
  title,
  description,
  image,
  category,
  date,
  location,
  time,
  onReadMore,
  readMoreLabel = "Read more",
}: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
      <div className="h-56 relative img-zoom">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-port-sky/20 text-port-sky text-xs font-semibold rounded-full">
            {category}
          </span>
          <span className="text-sm text-port-slate">{date}</span>
        </div>
        <h3 className="font-bold text-xl text-port-navy mb-3">{title}</h3>
        <p className="text-sm text-port-slate mb-4">{description}</p>
        {onReadMore && (
          <button
            type="button"
            onClick={onReadMore}
            className="text-sm font-semibold text-port-navy hover:text-port-sky transition mb-4"
          >
            {readMoreLabel}
          </button>
        )}
        {(location || time) && (
          <div className="flex items-center gap-4 text-xs text-port-slate">
            {location && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-port-sky">
                  location_on
                </span>
                {location}
              </span>
            )}
            {time && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-port-sky">
                  schedule
                </span>
                {time}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
