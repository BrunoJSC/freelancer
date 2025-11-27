import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load componentes pesados
const Projects = dynamic(
  () =>
    import("@/components/projects").then((mod) => ({ default: mod.Projects })),
  {
    loading: () => (
      <div className="w-full py-20 md:py-32 lg:py-40 bg-muted/50 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Carregando projetos...
        </div>
      </div>
    ),
  }
);

const Contact = dynamic(
  () =>
    import("@/components/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => (
      <div className="w-full py-20 md:py-32 lg:py-40 bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Carregando contato...
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Suspense fallback={<div className="w-full py-20 animate-pulse" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="w-full py-20 animate-pulse" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
