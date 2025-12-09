import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import type { NumbersToN } from 'ts-number-range';

import { ZStack } from '@/components/ui';

import hourArrowImage from '@public/clock-images/Hour arrow.png';
import minuteArrowImage from '@public/clock-images/Minute arrow.png';
import secondArrowImage from '@public/clock-images/Second arrow.png';
import ciferblatImage from '@public/clock-images/ciferblat.png';

interface CircleClockProps {
  hours: NumbersToN<24>;
  minutes: NumbersToN<60>;
  seconds: NumbersToN<60>;
}

const ARROW_IMAGE = {
  width: 300,
  height: 300,
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const CircleClock: FC<CircleClockProps> = () => {
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
      />
    </ZStack>
  );
};
