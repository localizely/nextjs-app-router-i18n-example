import Link from "next/link";
import { i18n } from "../../../i18n-config";

function Header() {
  const { locales, defaultLocale } = i18n;

  return (
    <header>
      <div dir="ltr" className="languages">
        {[...locales].sort().map((locale) => (
          <Link
            key={locale}
            href={locale === defaultLocale ? "/" : `/${locale}`}
          >
            {locale}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
