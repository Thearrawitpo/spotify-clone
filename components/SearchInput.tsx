"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";
import Input from "./Input";

type Props = {};

export default function SearchInput({}: Props) {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder='What do you want to listen'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
