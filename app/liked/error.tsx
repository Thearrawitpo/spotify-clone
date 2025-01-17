"use client";

import Box from "@/components/Box";
import React from "react";

type Props = {};

export default function Error({}: Props) {
  return (
    <Box className='h-full flex items-center justify-center'>
      <div className='text-neutral-400'>Something went wrong.</div>
    </Box>
  );
}
