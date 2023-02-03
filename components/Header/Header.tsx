import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
