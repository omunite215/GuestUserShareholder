import { z } from "zod";

export const ShareholdersFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).trim().nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255).trim(),
  idNo: z.string().max(100).trim(),
  address: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535)
    .trim(),
  phone: z.string(),
  email: z.string().max(255).email().trim().optional(),
  idProof: z
    .any()
    .refine((file: string | any[]) => file?.length == 1, "File is required.")
    .refine(
      (file: { size: number }[]) => file[0]?.size <= 3000000,
      `Max file size is 3MB.`
    ),
  addressProof: z
    .any()
    .refine(
      (file: { size: number }[]) => file[0]?.size <= 3000000,
      `Max file size is 3MB.`
    ),
});
