import Image from "next/image";

export function ProjectCard({ title, tech, desc, image }: any) {
  return (
    <div className="border border-accent/40 rounded-xl overflow-hidden hover:shadow-md transition bg-white/80 flex flex-col h-full">
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-primaryDark text-sm mt-1">{tech}</p>
        <p className="text-gray-700 mt-3 flex-grow">{desc}</p>
      </div>
    </div>
  );
}
