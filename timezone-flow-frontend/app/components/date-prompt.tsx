'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { Fragment, useCallback, useMemo } from 'react';

import { dayjs } from '@/api';
import { VStack } from '@/components/ui';
import { DateUploadService } from '@/services';

import styles from '../main-page.module.scss';

import { PromptArticle as Article } from './index';

// eslint-disable-next-line jsdoc/require-jsdoc
export function DatePrompt() {
  const today = useMemo(() => dayjs(new Date()), []);
  const formatted = useMemo(() => today.format(), [today]);
  const localParsed = useMemo(() => dayjs(formatted), [formatted]);

  const uploaded = useQuery({
    queryKey: ['upload'],
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: () => DateUploadService.upload(formatted),
  });

  const resultingDateString = useMemo(() => {
    return uploaded.data?.data.dateString;
  }, [uploaded.data]);

  const prettyTime = useCallback(
    (dateString: string, timezone: string | undefined = undefined): string => {
      // eslint-disable-next-line no-extra-boolean-cast
      const formatter = !!timezone
        ? dayjs(dateString).tz(timezone)
        : dayjs(dateString);

      return formatter.format('HH:mm');
    },
    [],
  );

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
          <div className={cn('w-full')}>
            <Article title='Today'>
              <p suppressHydrationWarning>{formatted}</p>
            </Article>

            <Article title='Will upload'>
              <p>{formatted}</p>
            </Article>

            <Article title='Parsed locally'>
              <p>{localParsed.format()}</p>
            </Article>

            <Article
              title='Grid test'
              className={cn('w-full')}
            >
              <div className={cn('grid gap-[1.6rem]', 'w-full', styles.grid)}>
                {Array.from({ length: 4 }).map((_, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={`grid-item-${idx}`}>
                    <div
                      className={cn('h-[150px] rounded-[1.2rem] bg-red-500')}
                    ></div>
                  </Fragment>
                ))}
              </div>
            </Article>

            <Article title='Upload status'>
              {uploaded.isLoading ? (
                <p>… Loading</p>
              ) : (
                <>
                  {uploaded.isError ? (
                    <p>❌ Error occurred ({uploaded.error.message})</p>
                  ) : (
                    <>
                      <p>✅ Successfully uploaded</p>

                      {!!resultingDateString && (
                        <>
                          <p>📆 Parsed: {resultingDateString}</p>

                          <p>
                            🕑 Time in your TZ:{' '}
                            {prettyTime(resultingDateString)}
                          </p>

                          <p>
                            🕑 Time in Moscow:{' '}
                            {prettyTime(resultingDateString, 'Europe/Moscow')}
                          </p>

                          <p>
                            🕑 Time in New York:{' '}
                            {prettyTime(
                              resultingDateString,
                              'America/New_York',
                            )}
                          </p>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Article>
          </div>
        </VStack>
      </section>
    </VStack>
  );
}
