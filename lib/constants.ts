// Constantes do projeto
export const SITE_CONFIG = {
  name: "Bruno de Jesus",
  title: "Bruno de Jesus - Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor full-stack especializado em aplicações web, mobile e desktop modernas. Transformando ideias em software de alta qualidade.",
  url: "https://brunocarmo.dev", // Atualize com seu domínio
  author: {
    name: "Bruno de Jesus",
    email: "brunojscarmo@gmail.com",
    github: "https://github.com/brunocarmo",
    linkedin: "https://linkedin.com/in/brunocarmo",
  },
} as const;

// Configurações de animação
export const ANIMATION_CONFIG = {
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
      }),
    },
    child: {
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
    },
  },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  },
} as const;

// IDs únicos para animações (evita warnings de lint)
export const generateUniqueId = (prefix: string, index: number) =>
  `${prefix}-${index}-${Date.now()}`;

// Gera IDs estáveis para caracteres
export const generateCharId = (char: string, index: number, line: number) =>
  `char-${line}-${index}-${char.codePointAt(0)}`;
