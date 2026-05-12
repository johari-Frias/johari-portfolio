import { MailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-brand-border bg-brand-bg/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 text-center">
        {/* Tagline */}
        <p className="text-lg font-semibold text-brand-text">
          Currently open to new opportunities
        </p>
        <p className="max-w-md text-sm text-brand-muted">
          2026 Johari Frias — AI Systems Architecture & Data Engineering.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:johari19@outlook.com"
            className="group flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-accent"
          >
            <MailIcon className="h-5 w-5" />
            Email
          </a>

          <a
            href="https://github.com/johari-Frias"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-accent"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/johari-f-37baa5210"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-xs text-brand-muted/60">
          &copy; {new Date().getFullYear()} — Built with Next.js &amp;
          Tailwind&nbsp;CSS
        </p>
      </div>
    </footer>
  );
}
