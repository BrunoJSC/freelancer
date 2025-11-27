import { ExternalLink, Github } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects = [
  {
    title: "Hegemon Consultoria",
    description:
      "Consultoria especializada em certificação INMETRO, ANVISA e ANATEL. Site institucional moderno e responsivo.",
    tags: ["Vite", "React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://www.hegemon.com.br/",
    repoUrl: "#",
    className: "md:col-span-2",
  },
  {
    title: "Plataforma E-commerce",
    description:
      "Uma loja online completa construída com Next.js, Supabase e integração Stripe.",
    tags: ["Next.js", "Supabase", "Stripe", "TailwindCSS"],
    demoUrl: "#",
    repoUrl: "#",
    className: "md:col-span-1",
  },
];

export function Projects() {
  return (
    <>
      <section
        id="projects"
        className="w-full py-24 md:py-32 lg:py-40 bg-muted/30"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4 max-w-3xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Projetos em Destaque
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Confira alguns dos projetos que desenvolvi para ajudar empresas
                a alcançarem seus objetivos.
              </motion.p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={project.className}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visitar Site
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="flex-1"
                        disabled={project.repoUrl === "#"}
                      >
                        <Link href={project.repoUrl}>
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
