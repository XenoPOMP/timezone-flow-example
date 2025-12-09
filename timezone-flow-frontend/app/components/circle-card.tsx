import cn from 'classnames';

import type { CircleClockProps } from '@/components/ui/kit';
import { CircleClock } from '@/components/ui/kit';

interface CircleCardProps extends CircleClockProps {
  title: string;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function CircleCard({
  title,
  hours,
  seconds,
  minutes,
}: CircleCardProps) {
  return (
    <div
      className={cn(
        'flex-center flex-col gap-[1.0rem] rounded-[1.2rem] p-[1.6rem]',
        'bg-red-500',
      )}
    >
      <CircleClock
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <b>{title}</b>
    </div>
  );
}
