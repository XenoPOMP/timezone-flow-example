import { useMemo } from 'react';

import type { CircleClockProps } from '@/components/ui/kit';

import type { DeepTypeReplace } from '@test/assets';

type ParsedAngles = DeepTypeReplace<CircleClockProps, number>;

// eslint-disable-next-line jsdoc/require-jsdoc
export const useCircleClock = (props: CircleClockProps): ParsedAngles => {
  return useMemo((): ParsedAngles => {
    const { hours, minutes, seconds } = props;

    const trailingSeconds = minutes * 60 + seconds;
    const trailingHours = trailingSeconds / (60 * 60);

    return {
      hours: (hours + trailingHours) / 12,
      minutes: minutes / 60,
      seconds: seconds / 60,
    };
  }, [props]);
};
