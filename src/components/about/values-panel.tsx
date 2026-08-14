"use client";

import { Eye, Compass, Landmark, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { useState } from "react";
import { aboutMission, aboutVision, educationalApproach, pillars } from "@/data/content";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "vision", label: "Vision and Mission" },
  { id: "pillars", label: "The Four Pillars / Core Values" },
  { id: "approach", label: "Ascend’s Educational Approach" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ValuesPanel() {
  const [active, setActive] = useState<TabId>("vision");

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
      <div
        className="flex flex-col gap-2 border-b border-border bg-surface-muted/60 p-2 sm:flex-row sm:justify-center"
        role="tablist"
        aria-label="Our values sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={cn(
              "focus-ring rounded-2xl px-4 py-3 text-sm font-semibold transition md:text-base",
              active === tab.id
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-foreground hover:bg-card"
            )}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="min-h-[22rem] p-6 md:p-10">
        {active === "vision" ? <VisionMission /> : null}
        {active === "pillars" ? <FourPillars /> : null}
        {active === "approach" ? <EducationalApproach /> : null}
      </div>
    </div>
  );
}

function VisionMission() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-10">
      <article className="flex flex-col items-center text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Eye className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-4 text-2xl font-bold text-foreground">Our Vision</h3>
        <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-foreground">
          {aboutVision}
        </p>
      </article>
      <article className="flex flex-col items-center text-center md:border-l md:border-border md:pl-10">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold/20 text-primary">
          <Compass className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-4 text-2xl font-bold text-foreground">Our Mission</h3>
        <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-foreground">
          {aboutMission}
        </p>
      </article>
    </div>
  );
}

const pillarIcons = [Landmark, BookOpen, GraduationCap, Sparkles];

function FourPillars() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, index) => {
        const Icon = pillarIcons[index] ?? Landmark;
        return (
          <article
            key={pillar.title}
            className="relative flex min-h-[22rem] flex-col items-center overflow-hidden rounded-[1.5rem] bg-surface-muted px-5 pb-8 pt-6 text-center"
          >
            <div className="h-3 w-24 rounded-t-md bg-accent-gold" />
            <div className="mt-0 flex w-full flex-1 flex-col items-center rounded-b-[1.25rem] border-x-8 border-b-8 border-primary/80 bg-card px-4 py-8 shadow-soft">
              <Icon className="h-8 w-8 text-primary" aria-hidden />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                {pillar.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function EducationalApproach() {
  return (
    <div className="mx-auto max-w-3xl">
      <h3 className="text-center text-2xl font-bold text-foreground">
        How we handle education at Ascend
      </h3>
      <ul className="mt-8 space-y-4">
        {educationalApproach.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-border bg-surface-muted/50 px-4 py-4 text-sm font-medium leading-relaxed text-foreground md:text-base"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
