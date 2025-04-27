import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

export function round2(value: number | string) {
  const num = typeof value === 'string' ? Number(value) : value;
  if (isNaN(num)) throw new Error('Value is not a number or string');
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

// export function formatError(error: unknown): string {
//   if (error.name === 'ZodError') {
//     return error.errors.map((err: any) => err.message).join('. ');
//   } else if (error.name === 'PrismaClientKnownRequestError') {
//     if (error.code === 'P2002') {
//       const field = error.meta?.target?.[0] || 'Field';
//       return `${capitalize(field)} already exists`;
//     }
//     if (error.code === 'P2025') {
//       const cause = error.meta?.cause || 'Record';
//       return `${capitalize(cause)} not found`;
//     }
//   } else if (error.name === 'PrismaClientInitializationError') {
//     return 'Database connection failed. Please check your database configuration.';
//   } else if (error.isAxiosError) {
//     return `HTTP Request Failed: ${error.response?.data?.message || error.message}`;
//   } else if (error instanceof Error) {
//     return error.message;
//   } else {
//     return typeof error.message === 'string' ? error.message : JSON.stringify(error);
//   }
// }

// export function handleError(error: any): string {
//   const formattedError = formatError(error);
//   if (process.env.NODE_ENV === 'production') {
//     console.error('Error in production:', error);
//   } else {
//     console.error('Error in development:', error);
//   }
//   return formattedError;
// }

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number | string | null) {
  if (typeof amount === 'number' || typeof amount === 'string') {
    return CURRENCY_FORMATTER.format(Number(amount));
  }
  return 'NaN';
}

export function formatId(id: string) {
  return id.slice(-6);
}

export const formatDateTime = (dateInput: Date) => {
  const optionsDateTime: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDateTime = new Date(dateInput).toLocaleString('en-US', optionsDateTime);
  const formattedDate = new Date(dateInput).toLocaleString('en-US', optionsDate);
  const formattedTime = new Date(dateInput).toLocaleString('en-US', optionsTime);

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

// function capitalize(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
