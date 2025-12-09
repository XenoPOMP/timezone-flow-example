import { axiosForApi } from '@/api';
import type { AnyService } from '@/types';

/* eslint-disable jsdoc/require-jsdoc */
/**
 * Main service for uploading date string.
 */
const DateUploadService = {
  upload: () => axiosForApi.post('/upload', { dateString: '' }),
} satisfies AnyService;
/* eslint-enable jsdoc/require-jsdoc */
