import type { Metadata } from "next";
import { GetInTouch } from "@/components/about/get-in-touch";
import { ValuesPanel } from "@/components/about/values-panel";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "Explore Ascend International School’s vision and mission, four pillars, and educational approach.",
};

export default function OurValuesPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-ascend">
          <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Our Values
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-foreground">
            Choose a section below to learn how Ascend guides learning, character, and student
            success.
          </p>
          <div className="mt-10">
            <ValuesPanel />
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
}
