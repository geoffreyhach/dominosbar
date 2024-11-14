"use client";

import axios from "axios";
import { SWRConfig } from "swr";

interface MySWRProviderProps {
  children: React.ReactNode;
}

axios.defaults.baseURL =
  typeof window === "undefined"
    ? "http://strapi:1337/api" // Server-side
    : "http://localhost:1337/api";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;

export const SWRProvider = ({ children }: MySWRProviderProps) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
