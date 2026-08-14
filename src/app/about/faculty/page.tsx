import type { Metadata } from "next";
import Image from "next/image";
import { facultyGroups } from "@/data/content";

export const metadata: Metadata = {
  title: "Faculty Members",
  description:
    "Meet Ascend International School’s leadership, teaching staff, and student care team.",
};

export default function AboutFacultyPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-ascend">
        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Faculty Members
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-foreground">
          Educators, leaders, and counselors working together so every student can ascend.
        </p>

        <div className="mt-14 space-y-16">
          {facultyGroups.map((group, groupIndex) => (
            <section key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {groupIndex + 1}. {group.title}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{group.title}</h2>
              <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-foreground">
                {group.description}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <article
                    key={member.name}
                    className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 30vw, 90vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {member.position}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
