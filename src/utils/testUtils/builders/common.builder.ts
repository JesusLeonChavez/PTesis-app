import { CommonResponse } from "interfaces/common.types";

export const buildCommonResponse = (
  data: any,
  overrides?: CommonResponse<any>
) => {
  return {
    code: 200,
    status: "success",
    message: "ok",
    data,
    warning: null,
    error: null,
    ...overrides
  };
};
