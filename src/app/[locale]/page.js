import MainComponent from "./components/MainComponent";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./components/LocalSwitcher";
import DraggableButton from "./components/DraggableButton";
export default function Mainpage() {
  
  

  return (
    <div>
      
      <MainComponent />
      {/* <DraggableButton /> */}
    </div>
  );
}
