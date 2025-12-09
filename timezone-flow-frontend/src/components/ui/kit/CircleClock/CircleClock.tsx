import cn from 'classnames';
import Image from 'next/image';
import type { ComponentProps, FC } from 'react';
import { useCallback, useMemo } from 'react';
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

interface CircleLabel {
  label?: (time: string) => string;
}

const ARROW_IMAGE: Pick<
  ComponentProps<typeof Image>,
  'width' | 'height' | 'className' | 'aria-hidden'
> = {
  width: 835,
  height: 835,
  className: cn('w-full h-full'),
  'aria-hidden': 'true',
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const CircleClock: FC<CircleClockProps & CircleLabel> = ({
  hours,
  minutes,
  seconds,
  label,
}) => {
  const angles = useCircleClock({ hours, minutes, seconds });

  const datePad = useCallback(
    (payload: number): string => payload.toString().padStart(2, '0'),
    [],
  );
  const formattedTime = useMemo((): string => {
    const time = `${datePad(hours)}:${datePad(minutes)}:${datePad(seconds)}`;

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!label) {
      return label(time);
    }

    return `Time is ${time}`;
  }, [datePad, hours, minutes, seconds, label]);

  return (
    <ZStack
      className={cn('aspect-square w-full max-w-[200px]')}
      aria-hidden='false'
      aria-label={`${formattedTime}`}
    >
      <Image
        src={ciferblatImage}
        alt='Ciferblat image'
        {...ARROW_IMAGE}
      />

      <div
        {...ARROW_IMAGE}
        style={{
          backgroundColor: 'black',
          zIndex: '-1',
          borderRadius: '9999px',
        }}
      ></div>

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
