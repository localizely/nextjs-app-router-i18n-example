"use client";

import { FormattedMessage } from "react-intl";

import FooterContainer from "./FooterContainer";

function Footer({ locale }: { locale: string }) {
  return (
    <FooterContainer locale={locale}>
      <div>
        {/* eslint-disable-next-line */}
        <img src="/img/next.svg" width={60} height={12} alt="NextJS " />
      </div>
      <div>
        <FormattedMessage tagName="p" id="common.footer" />
      </div>
    </FooterContainer>
  );
}

export default Footer;
