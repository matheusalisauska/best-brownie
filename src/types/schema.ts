import { z } from 'zod';

export const SendPointsSchema = z.object({
    userId: z.string(),
    points: z.string().min(1, 'O valor mínimo é 1').transform((v) => parseInt(v)),
});

export type SendPoints = z.infer<typeof SendPointsSchema>;