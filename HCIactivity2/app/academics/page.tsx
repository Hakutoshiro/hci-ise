"use client";

import Link from "next/link";

const paths = [
  {
    label: "Students",
    href: "/academics/students",
  },
  {
    label: "Courses",
    href: "/academics/courses",
  },
  {
    label: "Sections",
    href: "/academics/sections",
  },
  {
    label: "Transcripts",
    href: "/academics",
  },
];

export default function Academics() {
  return (
    <div>
      <h1 className={"text-5xl font-bold  mb-10"}>
        Students and Courses
      </h1>

      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {paths.map((path) => (
          <Link href={path.href}>
            <div
              key={path.label}
              className="h-32 rounded-lg  flex text-3xl items-center justify-center transition transform hover:bg-gray-300 hover:text-black hover:scale-105 active:scale-100"
            >
              {path.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
