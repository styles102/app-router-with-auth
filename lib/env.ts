import z from "zod";

const envSchema = z.object({
	AUTH0_CLIENT_ID: z.string(),
	AUTH0_CLIENT_SECRET: z.string(),
	AUTH0_ISSUER_BASE_URL: z.string(),
	NEXTAUTH_SECRET: z.string(),
	NEXTAUTH_URL: z.string(),
})

export const ENV = envSchema.parse(process.env);

export const getEnvIssues = (): z.ZodIssue[] | void => {
  const result = envSchema.safeParse(process.env);
  if (!result.success) return result.error.issues;
};
