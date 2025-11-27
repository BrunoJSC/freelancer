import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 DevPortfolio. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Termos
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
