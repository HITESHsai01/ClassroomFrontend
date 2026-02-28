import { GraduationCap, School } from "lucide-react";
import { z } from "zod";

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Student",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Teacher",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Computer Science Engineering",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];

  // explicitly check undefined or empty
  if (value === undefined || value === "") {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

/* ---------- helpers (optional strict validation) ---------- */

const getUrlEnv = (key: string): string => {
  const value = getEnvVar(key);

  try {
    new URL(value);
  } catch {
    throw new Error(`Invalid URL in environment variable: ${key}`);
  }

  return value;
};

/* ---------- exports ---------- */

export const CLOUDINARY_UPLOAD_URL = getUrlEnv("VITE_CLOUDINARY_UPLOAD_URL");

export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");

export const BACKEND_BASE_URL = getUrlEnv("VITE_BACKEND_BASE_URL");

export const BASE_URL = getUrlEnv("VITE_API_URL");

export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY

export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET =
  getEnvVar("VITE_CLOUDINARY_UPLOAD_PRESET");