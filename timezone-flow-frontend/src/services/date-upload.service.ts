import { axiosForApi } from '@/api';
import type { AnyService } from '@/types';

/* eslint-disable jsdoc/require-jsdoc */
/**
 * Main service for uploading date string.
 */
export const DateUploadService = {
  upload: (dateString: string) =>
    axiosForApi.post<{ dateString: string }>('/upload', { dateString }),
} satisfies AnyService;
/* eslint-enable jsdoc/require-jsdoc */
