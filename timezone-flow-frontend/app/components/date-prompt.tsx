'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { useCallback, useMemo } from 'react';

import { dayjs } from '@/api';
import { VStack } from '@/components/ui';
import type { CircleClockProps } from '@/components/ui/kit';
import { DateUploadService } from '@/services';

import { PromptArticle as Article, CircleCard, CircleGrid } from './index';

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
    (
      dateString: string,
      timezone: string | undefined = undefined,
    ): CircleClockProps => {
      // eslint-disable-next-line no-extra-boolean-cast
      const formatter = !!timezone
        ? dayjs(dateString).tz(timezone)
        : dayjs(dateString);

      return {
        hours: +formatter.format('H') as CircleClockProps['hours'],
        minutes: +formatter.format('m') as CircleClockProps['minutes'],
        seconds: +formatter.format('s') as CircleClockProps['seconds'],
      };
    },
    [],
  );

  // eslint-disable-next-line no-extra-boolean-cast
  const prettyLocal = !!resultingDateString
    ? prettyTime(resultingDateString)
    : undefined;
  // eslint-disable-next-line no-extra-boolean-cast
  const prettyMoscow = !!resultingDateString
    ? prettyTime(resultingDateString, 'Europe/Moscow')
    : undefined;
  // eslint-disable-next-line no-extra-boolean-cast
  const prettyNY = !!resultingDateString
    ? prettyTime(resultingDateString, 'America/New_York')
    : undefined;

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
              title='Upload status'
              className={cn('w-full')}
            >
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

                          <CircleGrid>
                            {!!prettyLocal && (
                              <CircleCard
                                title='Local'
                                hours={prettyLocal.hours}
                                minutes={prettyLocal.minutes}
                                seconds={prettyLocal.seconds}
                              />
                            )}

                            {!!prettyMoscow && (
                              <CircleCard
                                title='Moscow'
                                hours={prettyMoscow.hours}
                                minutes={prettyMoscow.minutes}
                                seconds={prettyMoscow.seconds}
                              />
                            )}

                            {!!prettyNY && (
                              <CircleCard
                                title='New York'
                                hours={prettyNY.hours}
                                minutes={prettyNY.minutes}
                                seconds={prettyNY.seconds}
                              />
                            )}
                          </CircleGrid>
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
