import { z } from 'zod';

export const nameSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .transform((val) => {
      // Automatically clean up multiple spacing:
      // Trim ends and replace multiple spaces inside with a single space.
      return val.trim().replace(/\s+/g, ' ');
    })
    .pipe(
      z
        .string()
        .min(3, 'Name must be at least 3 characters long')
        .max(40, 'Name must not exceed 40 characters')
        // Regex to verify name does not contain only numbers or special characters.
        // It must contain at least one letter.
        .refine((val) => /[a-zA-Z]/.test(val), {
          message: 'Name must contain at least one letter',
        })
        // Must not be numbers-only (e.g. "123456")
        .refine((val) => !/^\d+$/.test(val), {
          message: 'Name cannot contain only numbers',
        })
    ),
});

export type NameFormValues = z.infer<typeof nameSchema>;
