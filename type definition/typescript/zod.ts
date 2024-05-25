import { z } from 'zod';

const statsSchema = z.object({
  strength: z.number().min(3).max(18),
  intelligence: z.number().min(3).max(18),
  dexterity: z.number().min(3).max(18),
  agility: z.number().min(3).max(18),
  luck: z.number().min(3).max(18),
});

const characterSchema = z.object({
  name: z.string(),
  age: z.number(),
  attributes: z.array(z.string()),
  personality: z.string(),
  stats: statsSchema,
  background: z.string(),
  magic: z.string().optional(),
});

type Character = z.infer<typeof characterSchema>;
type Output = Character[];