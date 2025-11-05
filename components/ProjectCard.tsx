export function ProjectCard({ title, tech, desc, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-accent/40 rounded-xl p-5 hover:shadow-md transition bg-white/80"
    >
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-primaryDark text-sm mt-1">{tech}</p>
      <p className="text-gray-700 mt-3">{desc}</p>
    </a>
  );
}
