import type { Metadata } from "next";
import Image from "next/image";
import { aboutWelcome, founders } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Welcome to Ascend International School. Learn about our mission, community, and messages from our founders.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24">
        <div className="relative h-[min(52vh,28rem)] min-h-[220px] w-full">
          <Image
            src={aboutWelcome.photo}
            alt={aboutWelcome.photoAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-ascend">
          <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {aboutWelcome.title}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground md:text-lg">
            {aboutWelcome.quote}
          </p>
          <p className="mt-6 text-center text-base font-semibold text-foreground">
            — {aboutWelcome.attribution}
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-ascend">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Welcome Message
          </h2>
          <div className="mt-10 space-y-8">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                className={`grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-soft md:grid-cols-2 md:p-8 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {founder.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
                    {founder.message}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
