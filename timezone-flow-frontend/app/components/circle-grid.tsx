import cn from 'classnames';
import type { PropsWithChildren } from 'react';

import styles from '@app/main-page.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export function CircleGrid({ children }: PropsWithChildren) {
  return (
    <div className={cn('grid gap-[1.6rem]', 'w-full', styles.grid)}>
      {children}
    </div>
  );
}
