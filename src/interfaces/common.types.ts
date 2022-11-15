import { AnySchema, TestContext } from "yup";
import { AnyObject } from "yup/lib/object";

export interface CommonResponse<T> {
  code: number;
  status: string;
  message: string;
  data: T | null;
  warning: string[] | null;
  error: string[] | null;
}

export type FormShape<T> = Partial<Record<keyof T, AnySchema>>;

export interface YupTestContext extends TestContext<AnyObject> {
  originalValue?: string | undefined;
}
