"use client";

import { CheckCircle2, Lightbulb, Rocket } from "lucide-react";
import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const steps = [
  {
    title: "1. Descoberta",
    description:
      "Entendo seus objetivos, público-alvo e requisitos para criar uma estratégia sob medida.",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "2. Desenvolvimento",
    description:
      "Codifico sua solução usando as melhores práticas de performance e segurança.",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "3. Lançamento & Suporte",
    description:
      "Coloco seu projeto no ar e ofereço suporte contínuo para garantir o sucesso.",
    icon: Rocket,
    color: "text-purple-500",
  },
];

export function Process() {
  return (
    <>
      <section id="process" className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4 max-w-3xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Como Eu Trabalho
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Um processo transparente e eficiente para entregar resultados
                excepcionais.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-none shadow-none bg-transparent relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm z-10">
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <CardHeader className="pt-12 text-center">
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground">
                      {step.description}
                    </CardContent>
                  </Card>
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
