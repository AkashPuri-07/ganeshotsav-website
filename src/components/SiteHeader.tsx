const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#daily-updates", label: "Daily Updates" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Our Team" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/#location", label: "Location" },
  { href: "/#live-aarti", label: "Live Aarti" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-gold bg-ivory/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <a
          href="/#home"
          className="font-display text-lg text-vermilion whitespace-nowrap"
        >
          Sarvajanik Shri Ganesh Utsav Mandal
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 font-sans text-sm text-ink">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-vermilion">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
