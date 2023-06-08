"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import React from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
