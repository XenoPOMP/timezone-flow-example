import cn from 'classnames';
import type { Metadata } from 'next';

import { Container } from '@/components/ui';

import styles from './main-page.module.scss';

export const metadata: Metadata = {
  title: 'Main',
};

/**
 * Home page at url/
 * @constructor
 */
export default function Home() {
  return (
    <Container asChild>
      <main className={cn(styles.mainPage)}>index page</main>
    </Container>
  );
}
