import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/core/lib/client/exports/Link";

export function PackageCard({title, description, href}) {
  return (
    <div className={clsx('card-demo col col--4 margin-bottom--md')}>
      <div className="card shadow--tl">
        <div className="card__header text--center">
          <Heading as='h3'>{title}</Heading>
        </div>
        <div className={clsx('card__body')}>
          <p>
            {description}
          </p>
        </div>
        <div className={clsx('card__footer')}>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary')} to={href}>Get started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
