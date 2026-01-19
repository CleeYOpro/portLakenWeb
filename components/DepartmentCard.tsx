interface DepartmentCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export default function DepartmentCard({ title, description, icon, imageUrl }: DepartmentCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-port-mist shadow-sm card-hover cursor-pointer group flex flex-col h-full">
      {imageUrl ? (
        <div className="mb-4 flex justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              // Fallback to icon if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallbackIcon = target.parentElement?.nextElementSibling as HTMLElement;
              if (fallbackIcon) fallbackIcon.style.display = 'block';
            }}
          />
          <span className="material-symbols-outlined text-port-sky text-3xl hidden" style={{ display: 'block' }}>
            {icon}
          </span>
        </div>
      ) : (
        <span className="material-symbols-outlined text-port-sky mb-4 block text-3xl">
          {icon}
        </span>
      )}
      <h3 className="font-bold text-lg text-port-navy mb-2 group-hover:text-port-sky transition-colors">
        {title}
      </h3>
      <p className="text-sm text-port-slate mt-auto">{description}</p>
    </div>
  );
}