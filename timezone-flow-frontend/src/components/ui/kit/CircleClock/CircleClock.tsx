import cn from 'classnames';
import Image from 'next/image';
import type { CSSProperties, ComponentProps, FC } from 'react';
import type { NumbersToN } from 'ts-number-range';

import { ZStack } from '@/components/ui';

import hourArrowImage from '@public/clock-images/Hour arrow.png';
import minuteArrowImage from '@public/clock-images/Minute arrow.png';
import pinImage from '@public/clock-images/Pin.png';
import secondArrowImage from '@public/clock-images/Second arrow.png';
import ciferblatImage from '@public/clock-images/ciferblat.png';

import { useCircleClock } from './use-circle-clock';

export interface CircleClockProps {
  hours: NumbersToN<24>;
  minutes: NumbersToN<60>;
  seconds: NumbersToN<60>;
}

const ARROW_IMAGE: Pick<
  ComponentProps<typeof Image>,
  'width' | 'height' | 'className'
> = {
  width: 300,
  height: 300,
  className: cn('w-full h-full'),
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const CircleClock: FC<CircleClockProps> = ({
  hours,
  minutes,
  seconds,
}) => {
  const angles = useCircleClock({ hours, minutes, seconds });

  return (
    <ZStack className={cn('aspect-square w-full max-w-[300px]')}>
      <Image
        src={ciferblatImage}
        alt='Ciferblat image'
        {...ARROW_IMAGE}
      />

      <Image
        src={secondArrowImage}
        alt='Seconds` Arrow'
        {...ARROW_IMAGE}
        style={{
          transform: `rotate(calc(.5turn + ${angles.seconds}turn))`,
        }}
      />

      <Image
        src={minuteArrowImage}
        alt='Minutes` Arrow'
        {...ARROW_IMAGE}
        style={{
          transform: `rotate(calc(.5turn + ${angles.minutes}turn))`,
        }}
      />

      <Image
        src={hourArrowImage}
        alt='Hours` Arrow'
        {...ARROW_IMAGE}
        style={{
          transform: `rotate(calc(.5turn + ${angles.hours}turn))`,
        }}
      />

      <Image
        src={pinImage}
        alt='Just a pin image'
        {...ARROW_IMAGE}
      />
    </ZStack>
  );
};
