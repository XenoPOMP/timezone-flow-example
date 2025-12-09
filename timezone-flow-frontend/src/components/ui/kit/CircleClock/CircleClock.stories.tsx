import type { Meta } from '@storybook/react';

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
  .defineSharedProps({});

export const Base = builder.buildStory({});
