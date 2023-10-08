import * as z from "yup";

export const loginFormDataSchema = z.object().shape({
	email: z.string().email().required(),
	password: z.string().required(),
});

export const regFormDataSchema = z.object().shape({
	email: z.string().email().required(),
	password: z.string().required(),
	school: z.string().required(),
});

export const createPostSchema = z.object().shape({
	email: z.string().email().required(),
	password: z.string().required(),
	school: z.string().required(),
});

export type TLoginFormDataSchema = z.InferType<typeof loginFormDataSchema>;
export type TRegFormDataSchema = z.InferType<typeof regFormDataSchema>;
export type TCreatePostSchema = z.InferType<typeof createPostSchema>;
