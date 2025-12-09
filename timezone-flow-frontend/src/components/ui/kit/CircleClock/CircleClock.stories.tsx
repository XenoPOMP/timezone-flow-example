import type { Meta } from '@storybook/nextjs';

import { StoryBuilder } from '@/utils/storybook';

import { CircleClock } from './CircleClock';

const meta = {
  title: 'UI Kit / CircleClock',
  component: CircleClock,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircleClock>;

export default meta;

const builder = new StoryBuilder<typeof CircleClock>()
  .defineMeta(meta)
  .defineSharedProps({
    hours: 7,
    minutes: 37,
    seconds: 45,
  });

export const Base = builder.buildStory({});
