import { SITE_CONFIG } from "@/lib/constants";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm py-8 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvido com ❤️ e Next.js
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={`mailto:${SITE_CONFIG.author.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
