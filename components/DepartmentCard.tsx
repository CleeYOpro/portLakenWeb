interface DepartmentCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function DepartmentCard({ title, description, icon }: DepartmentCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-port-mist shadow-sm card-hover cursor-pointer group">
      <span className="material-symbols-outlined text-port-sky mb-4 block text-3xl">
        {icon}
      </span>
      <h3 className="font-bold text-lg text-port-navy mb-2 group-hover:text-port-sky transition-colors">
        {title}
      </h3>
      <p className="text-sm text-port-slate">{description}</p>
    </div>
  );
}