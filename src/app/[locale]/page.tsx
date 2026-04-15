import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ProofWall } from "@/components/sections/ProofWall";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Industries } from "@/components/sections/Industries";
import { Capabilities } from "@/components/sections/Capabilities";
import { Perspectives } from "@/components/sections/Perspectives";
import { About } from "@/components/sections/About";
import { Careers } from "@/components/sections/Careers";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Ticker />
      <ProofWall />
      <CaseStudies />
      <Industries />
      <Capabilities />
      <Perspectives />
      <About />
      <Careers />
    </>
  );
}
