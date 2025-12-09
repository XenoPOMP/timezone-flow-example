import cn from 'classnames';
import { useMemo } from 'react';

import { dayjs } from '@/api';
import { VStack } from '@/components/ui';

import { PromptArticle } from './index';

// eslint-disable-next-line jsdoc/require-jsdoc
export function DatePrompt() {
  const today = useMemo(() => dayjs(new Date()), []);
  const formatted = useMemo(() => today.format(), [today]);
  const localParsed = useMemo(() => dayjs(formatted), [formatted]);

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
            <PromptArticle title='Today'>{formatted}</PromptArticle>
            <PromptArticle title='Will upload'>{formatted}</PromptArticle>
            <PromptArticle title='Parsed locally'>
              {localParsed.format()}
            </PromptArticle>
          </div>
        </VStack>
      </section>
    </VStack>
  );
}
