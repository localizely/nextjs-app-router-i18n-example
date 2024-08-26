"use client";

import { IntlProvider, FormattedMessage } from "react-intl";

type Props = {
  locale: string;
  messages: Record<string, string>;
};

export default function FooterContent({ locale, messages }: Props) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        {/* eslint-disable-next-line */}
        <img src="/img/next.svg" width={60} height={12} alt="NextJS " />
      </div>
      <div>
        <FormattedMessage tagName="p" id="common.footer" />
      </div>
    </IntlProvider>
  );
}
