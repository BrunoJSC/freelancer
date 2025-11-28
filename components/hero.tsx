"use client";

import { generateCharId } from "@/lib/constants";
import { useHeroStore } from "@/lib/store/hero-store";
import { ArrowRight, Terminal } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Dot Pattern - 2D Style */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:bg-[radial-gradient(#333_1px,transparent_1px)]"></div>
    </div>
  );
}

// VS Code Mockup - Flat 2D Design
function VSCodeMockup() {
  return (
    <div className="w-full h-full bg-[#1e1e1e] rounded-xl border-2 border-gray-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] overflow-hidden font-mono text-sm flex flex-col">
      {/* Title Bar */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-gray-800 shrink-0">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
        </div>
        <div className="ml-6 text-gray-400 text-xs flex items-center gap-2 bg-[#1e1e1e] px-3 py-1 rounded-t-md border-t border-x border-gray-800 relative -bottom-[13px]">
          <Terminal size={12} />
          <span>portfolio.tsx</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 text-gray-300 leading-relaxed flex-1 overflow-hidden">
        <div className="flex h-full">
          <div className="text-gray-600 select-none pr-4 text-right border-r border-gray-700 mr-4 font-mono text-xs sm:text-sm">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
            10
          </div>
          <div className="flex-1 font-mono text-xs sm:text-sm overflow-x-auto">
            <span className="text-[#c678dd]">const</span>{" "}
            <span className="text-[#e5c07b]">FullStackDev</span>{" "}
            <span className="text-[#56b6c2]">=</span>{" "}
            <span className="text-[#abb2bf]">{`{`}</span>
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">name</span>:{" "}
            <span className="text-[#98c379]">'Bruno de Jesus'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">passion</span>:{" "}
            <span className="text-[#98c379]">'Building the Future'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">stack</span>:{" "}
            <span className="text-[#abb2bf]">[</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TypeAnimation
              sequence={[
                "'React'",
                1000,
                "'Next.js'",
                1000,
                "'TypeScript'",
                1000,
                "'Node.js'",
                1000,
                "'Tailwind'",
                1000,
                "'PostgreSQL'",
                1000,
                "'Docker'",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[#98c379]"
              repeat={Infinity}
            />
            <br />
            &nbsp;&nbsp;<span className="text-[#abb2bf]">]</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">status</span>:{" "}
            <span className="text-[#98c379]">'Available for hire'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#61afef]">code</span>:{" "}
            <span className="text-[#c678dd]">()</span>{" "}
            <span className="text-[#c678dd]">{`=>`}</span>{" "}
            <span className="text-[#abb2bf]">{`{`}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#c678dd]">return</span>{" "}
            <span className="text-[#98c379]">'Excellence'</span>;
            <br />
            &nbsp;&nbsp;<span className="text-[#abb2bf]">{`}`}</span>
            <br />
            <span className="text-[#abb2bf]">{`}`}</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] text-white text-[10px] px-3 py-1 flex justify-between items-center shrink-0">
        <div className="flex gap-3">
          <span>main*</span>
          <span>TypeScript React</span>
        </div>
        <div>
          <span>Ln 12, Col 34</span>
          <span className="ml-3">UTF-8</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const line1 = "Transforme";
  const line2 = "Ideias em";
  const line3 = "Realidade";

  const mounted = useHeroStore((state) => state.mounted);
  const setMounted = useHeroStore((state) => state.setMounted);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [setMounted]);

  return (
    <>
      <section
        id="home"
        className="w-full min-h-[calc(100vh-3.5rem)] flex items-center relative overflow-hidden py-20 lg:py-0"
      >
        <HeroBackground />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="flex flex-col justify-center space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center rounded-full border-2 border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary transition-all hover:scale-105 cursor-pointer mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Disponível para novos projetos
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-foreground leading-[0.95]">
                  <motion.span
                    className="block"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {line1.split("").map((char, index) => (
                      <motion.span
                        key={generateCharId(char, index, 1)}
                        variants={child}
                        style={{ display: "inline-block" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="block text-primary"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {line2.split("").map((char, index) => (
                      <motion.span
                        key={generateCharId(char, index, 2)}
                        variants={child}
                        style={{ display: "inline-block" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="block"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {line3.split("").map((char, index) => (
                      <motion.span
                        key={generateCharId(char, index, 3)}
                        variants={child}
                        style={{ display: "inline-block" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>
                <motion.p
                  className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  Desenvolvedor Full-Stack focado em criar soluções web de alta
                  performance que impulsionam o seu negócio.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-black dark:border-white text-lg px-8 py-6 rounded-xl"
                >
                  <Link href="#contact">
                    Comece seu Projeto <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="bg-background border-2 border-border hover:bg-accent hover:text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-lg px-8 py-6 rounded-xl"
                >
                  <Link href="#projects">Ver Projetos</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - VS Code Mockup */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <VSCodeMockup />
            </motion.div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
