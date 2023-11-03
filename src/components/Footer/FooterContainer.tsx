import React from "react";
import { IntlProvider } from "react-intl";

async function getMessages(locale: string) {
  return await import(`../../lang/${locale}.json`);
}

type FooterContainerProps = {
  locale: string;
  children: React.ReactNode;
};

async function FooterContainer({ locale, children }: FooterContainerProps) {
  const messages = await getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="footer">{children}</div>
    </IntlProvider>
  );
}

export default FooterContainer;
