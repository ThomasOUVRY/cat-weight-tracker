import { z } from "zod";

export const WeightSchema = z.object({
  weight: z.coerce.number().min(1),
  date: z.coerce.date(),
  id: z.string().optional(),
});
