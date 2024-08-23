import Link from "next/link";

const paths = [
  {
    label: "Instructor",
    href: "/personnel/instructors",
  },
  {
    label: "Teacher",
    href: "/personnel/teachers",
  },
  {
    label: "Advisor",
    href: "/personnel/advisors",
  },
];

export default function Personnel() {
  return (
    <div>
      <h1 className={"text-5xl font-bold  mb-10"}>Personnel</h1>

      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {paths.map((path) => (
          <Link href={path.href}>
            <div
              key={path.label}
              className="h-32 rounded-lg hover:text-black flex text-3xl items-center justify-center transition transform hover:bg-gray-300 hover:scale-105 active:scale-100"
            >
              {path.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
