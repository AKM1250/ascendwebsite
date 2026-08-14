import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GetInTouch() {
  return (
    <section className="section-padding pt-0">
      <div className="container-ascend">
        <div className="rounded-[2rem] bg-primary px-6 py-10 text-center text-primary-foreground md:px-12 md:py-12">
          <h2 className="text-3xl font-bold md:text-4xl">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white">
            Ready to learn more about Ascend, visit campus, or find the right pathway for your
            family? We would be glad to hear from you.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-6">
            <Link href="/contact">Get in touch with us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
