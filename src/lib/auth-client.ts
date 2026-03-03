import { createAuthClient } from 'better-auth/react';
import { BACKEND_BASE_URL, USER_ROLES } from "../constants";

const AUTH_BASE_URL = BACKEND_BASE_URL.endsWith("/")
  ? `${BACKEND_BASE_URL}auth`
  : `${BACKEND_BASE_URL}/auth`

export const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
  user: {
    additionalFields: {
      role: {
        type: USER_ROLES,
        required: true,
        defaultValue: "student",
        input: false,
      },
      department: {
        type: "string",
        required: false,
        input: true,
      },
      imageCldPubId: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
});