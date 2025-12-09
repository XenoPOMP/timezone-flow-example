import { describe, test } from 'vitest';

import { CircleClock } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('CircleClock component', () => {
  test('It renders', () => {
    assertRendering(<CircleClock />);
  });
});
