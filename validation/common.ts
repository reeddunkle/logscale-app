import { z } from "zod";

const zId = z.number().min(1);
const zNullableNumber = z.number().nullable();
const zNullableString = z.string().nullable();

export { zId, zNullableNumber, zNullableString };
