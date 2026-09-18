const SOCIAL_LINKS = [
  {
    href: "https://www.youtube.com/@BelgaumBhagyavidhata",
    label: "YouTube",
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    ),
  },
  {
    href: "https://www.instagram.com/belgaumbhagyavidhata/",
    label: "Instagram",
    icon: (
      <path d="M12 2c-2.7 0-3.1 0-4.1.06-1.1.05-1.8.22-2.5.47a5 5 0 0 0-1.8 1.17 5 5 0 0 0-1.17 1.8c-.25.7-.42 1.4-.47 2.5C2 9 2 9.4 2 12s0 3.1.06 4.1c.05 1.1.22 1.8.47 2.5a5 5 0 0 0 1.17 1.8 5 5 0 0 0 1.8 1.17c.7.25 1.4.42 2.5.47C8.9 22 9.3 22 12 22s3.1 0 4.1-.06c1.1-.05 1.8-.22 2.5-.47a5 5 0 0 0 1.8-1.17 5 5 0 0 0 1.17-1.8c.25-.7.42-1.4.47-2.5.06-1 .06-1.4.06-4.1s0-3.1-.06-4.1c-.05-1.1-.22-1.8-.47-2.5a5 5 0 0 0-1.17-1.8 5 5 0 0 0-1.8-1.17c-.7-.25-1.4-.42-2.5-.47C15.1 2 14.7 2 12 2Zm0 1.8c2.6 0 3 0 4 .06.97.04 1.5.2 1.85.34.46.18.8.4 1.15.74.34.35.56.68.74 1.15.13.35.3.88.34 1.85.05 1.05.06 1.37.06 4s0 2.95-.06 4c-.04.97-.2 1.5-.34 1.85a3.1 3.1 0 0 1-.74 1.15c-.35.34-.68.56-1.15.74-.35.13-.88.3-1.85.34-1.05.05-1.37.06-4 .06s-2.95 0-4-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.74 3.1 3.1 0 0 1-.74-1.15c-.13-.35-.3-.88-.34-1.85C3.8 15 3.8 14.63 3.8 12s0-2.95.06-4c.04-.97.2-1.5.34-1.85.18-.46.4-.8.74-1.15.35-.34.68-.56 1.15-.74.35-.13.88-.3 1.85-.34C9 3.8 9.4 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold bg-ivory px-6 py-8 text-center">
      <div className="flex justify-center gap-5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-ink/70 transition-colors hover:text-vermilion"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {social.icon}
            </svg>
          </a>
        ))}
      </div>
      <p className="mt-4 font-sans text-sm text-ink/80">
        © 2026 Belgaum cha Bhagyavidhata · Official website of Sarvajanik Shri
        Ganesh Utsav Mandal, Bhagyanagar 🙏
      </p>
    </footer>
  );
}
