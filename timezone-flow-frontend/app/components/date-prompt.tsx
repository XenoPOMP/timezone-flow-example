import cn from 'classnames';
import { useMemo } from 'react';

import { dayjs } from '@/api';
import { VStack } from '@/components/ui';

// eslint-disable-next-line jsdoc/require-jsdoc
export function DatePrompt() {
  const today = useMemo(() => dayjs(new Date()), []);

  return (
    <VStack
      asChild
      alignment='topLeading'
      spacing='2.0rem'
    >
      <section className={cn('my-[2.0rem]')}>
        <h1 className={cn('text-[3.2rem] font-bold !leading-[normal]')}>
          Preview dates
        </h1>

        <VStack
          asChild
          alignment='topLeading'
          spacing='1.6rem'
          className={cn(
            '[&>article]:flex [&>article]:flex-col [&>article]:gap-[0.6rem]',
            '[&_h2]:text-[2.0rem] [&_h2]:font-medium',
          )}
        >
          <div>
            <article>
              <h2>Today</h2>
              <p>{today.format()}</p>
            </article>
          </div>
        </VStack>
      </section>
    </VStack>
  );
}
