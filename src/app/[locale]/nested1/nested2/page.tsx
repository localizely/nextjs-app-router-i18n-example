import styles from "../../page.module.css";
import { getIntl } from "@/lib/intl";

type HomeProps = {
  params: { locale: string };
};

export default async function Nested({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {intl.formatMessage(
            { id: "page.nested.title" }
          )}
        </h1>
      </main>
    </div>
  );
}
