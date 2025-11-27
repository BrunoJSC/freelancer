"use client";

import { Quote } from "lucide-react";
import * as motion from "motion/react-client";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechStart",
    content:
      "Trabalhar com este desenvolvedor foi uma experiência incrível. Ele entendeu nossa visão perfeitamente e entregou um produto que superou nossas expectativas.",
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de Marketing, CreativeAgency",
    content:
      "Profissionalismo e qualidade técnica excepcionais. O novo site aumentou nossa conversão em 40% no primeiro mês.",
    avatar: "CM",
  },
  {
    name: "Mariana Costa",
    role: "Fundadora, EcoStore",
    content:
      "A comunicação foi clara durante todo o processo. O resultado final foi um e-commerce rápido, bonito e fácil de usar.",
    avatar: "MC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-background">
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
              O Que Dizem Meus Clientes
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A satisfação dos meus clientes é a minha maior prioridade.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-muted/20 border-border/50">
                <CardContent className="pt-6 flex flex-col gap-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
