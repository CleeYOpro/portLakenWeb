import Image from "next/image";

interface CouncilMemberProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function CouncilMember({
  name,
  role,
  description,
  image,
}: CouncilMemberProps) {
  return (
    <div className="text-center group">
      <div className="relative w-48 h-48 mx-auto mb-6 bg-port-mist rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="192px"
            className="object-cover"
          />
        ) : (
          <span className="material-symbols-outlined text-port-ice text-[120px]">
            account_circle
          </span>
        )}
      </div>

      <h3 className="font-bold text-xl text-port-navy mb-1">{name}</h3>
      <p className="text-port-sky text-sm font-medium mb-3">{role}</p>
      <p className="text-port-slate text-sm">{description}</p>
    </div>
  );
}