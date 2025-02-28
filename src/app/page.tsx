import PricingList from "@/components/PricingList";

export default function PageHome () {
  return (
    <main>
      <section
        id="pricing"
        className="bg-secondary/20 dark:bg-none py-24 min-h-svh w-full border-b dark:border-secondary-foreground/20"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            Cresça seu negócio <br />
            com o <span className="text-primary">melhor investimento!</span>
          </h2>
        </div>

        <div className="container mx-auto mt-12 md:mt-16 px-4 2xl:px-0">
          <PricingList readonly={false} />
        </div>
      </section>
    </main>
  );
}