import React from "react";
import { FaPlay } from "react-icons/fa";

type Props = {};

export default function PlayButton({}: Props) {
  return (
    <div
      className='transition opacity-0 rounded-full flex items-center 
  bg-green-500 p-4 drop-shadow-md translate translate-y-4 group-hover:opacity-100
  group-hover:translate-y-0 hover:scale-110'
    >
      <FaPlay className='text-black' />
    </div>
  );
}
