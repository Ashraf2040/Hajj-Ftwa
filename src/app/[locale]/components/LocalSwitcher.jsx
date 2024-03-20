"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
   
     
      <select
        defaultValue={localActive}
        className="bg-transparent text-white mr-2 text-center "
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="flex  items-center text-black ">
          
          EN  
        </option>
        <option value="ar" className=" text-black"> Ar</option>
        <option value="ur" className=" text-black"> Ur</option>
        <option value="fr" className=" text-black"> Fr</option>
        <option value="tu" className=" text-black"> Tur</option>
        <option value="de" className=" text-black"> De</option>
      </select>
   
  );
}
