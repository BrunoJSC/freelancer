"use client";

import * as motion from "motion/react-client";
import { type IconType } from "react-icons";
import { BiData } from "react-icons/bi";
import {
  SiExpo,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Separator } from "./ui/separator";

interface Technology {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  bgGradient: string;
}

const technologies: Technology[] = [
  {
    name: "React.js",
    category: "FRONTEND",
    icon: SiReact,
    color: "#61DAFB",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    name: "Next.js",
    category: "FRONTEND",
    icon: SiNextdotjs,
    color: "#000000",
    bgGradient: "from-gray-800/10 to-gray-900/10",
  },
  {
    name: "TypeScript",
    category: "LINGUAGEM",
    icon: SiTypescript,
    color: "#3178C6",
    bgGradient: "from-blue-600/10 to-blue-700/10",
  },
  {
    name: "JavaScript",
    category: "LINGUAGEM",
    icon: SiJavascript,
    color: "#F7DF1E",
    bgGradient: "from-yellow-400/10 to-yellow-500/10",
  },
  {
    name: "TailwindCSS",
    category: "ESTILIZAÇÃO",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgGradient: "from-cyan-500/10 to-teal-500/10",
  },
  {
    name: "Node.js",
    category: "BACKEND",
    icon: SiNodedotjs,
    color: "#339933",
    bgGradient: "from-green-600/10 to-lime-600/10",
  },
  {
    name: "Expo",
    category: "MOBILE",
    icon: SiExpo,
    color: "#000020",
    bgGradient: "from-indigo-900/10 to-purple-900/10",
  },
  {
    name: "Flutter",
    category: "MOBILE",
    icon: SiFlutter,
    color: "#02569B",
    bgGradient: "from-blue-500/10 to-sky-600/10",
  },
  {
    name: "Supabase",
    category: "BACKEND",
    icon: SiSupabase,
    color: "#3ECF8E",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    name: "PostgreSQL",
    category: "BANCO DE DADOS",
    icon: SiPostgresql,
    color: "#4169E1",
    bgGradient: "from-blue-600/10 to-indigo-600/10",
  },
  {
    name: "Prisma",
    category: "ORM",
    icon: SiPrisma,
    color: "#2D3748",
    bgGradient: "from-gray-700/10 to-gray-800/10",
  },
  {
    name: "Drizzle",
    category: "ORM",
    icon: BiData,
    color: "#C5F74F",
    bgGradient: "from-lime-400/10 to-green-500/10",
  },
];

export function TechStack() {
  return (
    <>
      <section className="w-full py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header com espaçamento melhorado (8pt grid: 64px = 8*8) */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-6 max-w-3xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Stack Tecnológica
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                style={{ lineHeight: "1.6" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                As ferramentas e tecnologias que uso para construir aplicações
                robustas e escaláveis.
              </motion.p>
            </div>
          </div>

          {/* Grid com espaçamento consistente (16px = 8*2) */}
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  aria-label={`${tech.name} - ${tech.category}`}
                  className={`group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-linear-to-br ${tech.bgGradient} border border-border hover:border-foreground/20 transition-all duration-300 overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}05)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      className="w-12 h-12 transition-all duration-300"
                      style={{
                        color: tech.color,
                        filter: "drop-shadow(0 0 8px rgba(0,0,0,0.1))",
                      }}
                    />
                  </motion.div>

                  {/* Text com tipografia melhorada */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <span className="font-semibold text-sm text-center text-foreground">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                      {tech.category}
                    </span>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
