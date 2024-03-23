"use client";

import { usePathname } from "next/navigation";
import MainComponent from "./components/MainComponent";

export default function Mainpage() {
 
  return (
    <div>
      <MainComponent />
      {/* <DraggableButton /> */}
    </div>
  );
}
