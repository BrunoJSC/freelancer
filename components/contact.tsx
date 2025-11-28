"use client";

import { Mail, MapPin } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      toast.success(
        "Mensagem enviada com sucesso! Entrarei em contato em breve."
      );
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Erro ao enviar mensagem"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-bold tracking-tight">Entre em Contato</h2>
            <p className="text-gray-500 text-lg dark:text-gray-400">
              Tem um projeto em mente? Vamos discutir como podemos trabalhar
              juntos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold text-lg mb-2">Comunicação Clara</h3>
              <p className="text-muted-foreground text-sm">
                Atualizações constantes e transparência total durante todo o
                projeto.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold text-lg mb-2">Prazos Cumpridos</h3>
              <p className="text-muted-foreground text-sm">
                Compromisso sério com cronogramas e entregas pontuais.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold text-lg mb-2">Qualidade Garantida</h3>
              <p className="text-muted-foreground text-sm">
                Código limpo, testado e otimizado para performance.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Sinta-se à vontade para entrar em contato através de qualquer
                  um desses canais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:brunojscarmo@gmail.com"
                    className="hover:underline"
                  >
                    brunojscarmo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>Brasil</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Enviar Mensagem</CardTitle>
                <CardDescription>
                  Entrarei em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        name="firstName"
                        placeholder="Nome"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="border border-black dark:border-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="lastName"
                        placeholder="Sobrenome"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="border border-black dark:border-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="border border-black dark:border-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="min-h-[120px] border border-black dark:border-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
