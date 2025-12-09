import { z } from 'zod';

// Schema of env parsed object
const envSchema = z
  .object({
    CANONICAL_URL: z.string().default('http://localhost:3000'),
    NEXT_PUBLIC_API_URL: z.string(),
    NODE_ENV: z.string().optional(),
  })
  .transform(({ NEXT_PUBLIC_API_URL, ...rest }) => ({
    ...rest,
    API_URL: NEXT_PUBLIC_API_URL,
  }));

export type EnvSchema = z.infer<typeof envSchema>;

// Use this object to validate env file
export const env = envSchema.parse(process.env);
