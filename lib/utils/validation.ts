import { z } from 'zod'

export const emailSchema = z.email({ error: 'Invalid email address' })

export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, { error: 'Invalid phone number (E.164 format)' })

export const coreEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.url({
    error: 'NEXT_PUBLIC_BASE_URL must be a valid URL',
  }),
})

export function zodToValidator(schema: z.ZodType): (value: string) => boolean {
  return (value: string) => schema.safeParse(value).success
}
