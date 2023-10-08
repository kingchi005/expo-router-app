import * as z from "yup";
// export default
const envSchema = z.object().shape({
	EXPO_PUBLIC_API_SERVICE_URL: z.string().required(),
	EXPO_PUBLIC_SECRETE_CRPT_KEY: z.string().required(),
});

const env = envSchema.validateSync(process.env, { abortEarly: false });

export default env;
