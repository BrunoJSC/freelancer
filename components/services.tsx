"use client";

import * as motion from "motion/react-client";
import { type IconType } from "react-icons";
import { MdDesktopWindows, MdPhoneIphone, MdWeb } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

interface Service {
  title: string;
  description: string;
  icon: IconType;
  color: string;
  bgGradient: string;
}

const services: Service[] = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web que convertem visitantes em clientes. Foco em performance, SEO e experiência do usuário.",
    icon: MdWeb,
    color: "#3B82F6",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Leve seu negócio para o bolso do seu cliente. Apps intuitivos e rápidos para iOS e Android.",
    icon: MdPhoneIphone,
    color: "#10B981",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Sistemas Sob Medida",
    description:
      "Automatize processos e aumente a produtividade da sua empresa com software personalizado.",
    icon: MdDesktopWindows,
    color: "#8B5CF6",
    bgGradient: "from-purple-500/10 to-violet-500/10",
  },
];

export function Services() {
  return (
    <>
      <section
        id="services"
        className="w-full py-20 md:py-32 lg:py-40 bg-background"
      >
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
                Serviços
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Soluções tecnológicas completas para impulsionar o crescimento
                do seu negócio no mundo digital.
              </motion.p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card
                    className={`group flex flex-col items-start text-left h-full transition-all duration-300 hover:-translate-y-2 bg-linear-to-br ${service.bgGradient} border-border hover:border-foreground/20`}
                  >
                    <CardHeader>
                      <motion.div
                        className="p-3 rounded-lg w-fit mb-4 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          className="h-8 w-8 relative z-10"
                          style={{ color: service.color }}
                        />
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
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
