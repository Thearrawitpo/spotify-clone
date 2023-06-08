"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

export default function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className='relative group flex items-center rounded-md transition pr-4
  overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20'
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image src={image} fill alt='image' className='object-cover' />
      </div>
      <p className='font-medium truncate'>{name}</p>
      <div
        className='absolute transition opacity-0 rounded-full flex 
      items-center justify-center bg-green-500 p-4 drop-shadow-md
      right-5 group-hover:opacity-100 hover:scale-110'
      >
        <FaPlay className='text-black' />
      </div>
    </button>
  );
}
