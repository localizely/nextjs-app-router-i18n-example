import FooterContent from "./FooterContent";

async function getMessages(locale: string) {
  return await import(`../../lang/${locale}.json`);
}

type Props = {
  locale: string;
};

export default async function Footer({ locale }: Props) {
  const messages = (await getMessages(locale)).default;

  return (
    <footer className="footer">
      <FooterContent locale={locale} messages={messages} />
    </footer>
  );
}
