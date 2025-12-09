import type { AxiosResponse } from 'axios';

export type AnyService = Record<
  string,
  (...args: any[]) => Promise<AxiosResponse>
>;
