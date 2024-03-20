import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useLocale, useMessages, useTranslations } from "next-intl";

export default function CardContent({
  head,
  subHeader,
  parag,
  parag1,
  ul,
  id,
  src,
}) {
  const locale = useLocale();
  console.log(locale);
  console.log(src);
  return (
    <Card
      shadow={false}
      className="w-full  h-full grid    items-start justify-center overflow-hidden text-center"
    >
      <CardBody
        className="relative  py-8 px-6 md:px-12 "
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {src ? (
          <Typography
            variant="img"
            color="black"
            className="mb-2 font-extrabold text-[22px] flex justify-center   leading-[2] "
          >
            <img src={src} alt="img" className="w-full rounded-lg mb-4 h-2/5" />
          </Typography>
        ) : (
          ""
        )}

        <Typography
          variant="h1"
          color="black"
          className="mb-2 font-extrabold text-[22px] flex justify-center   leading-[2] "
        >
          {head}
        </Typography>
        <Typography
          variant="h1"
          color="black"
          className={` ${
            locale === "ar"
              ? "mb-6 bg-black rounded-md text-white font-extrabold flex justify-center text-[24px]  leading-[2]"
              : "mb-6    text-lg py-1  bg-black rounded-md text-white px-2 flex  font-bold   leading-[1.5]"
          }`}
        >
          {subHeader}
        </Typography>
        <Typography
          variant="h5"
          color="black"
          className={`${
            locale === "ar"
              ? "mb-3 font-extrabold  text-center text-4xl leading-[1.5]"
              : "mb-3 font-bold   text-justify  overflow-hidden    text-2xl leading-[1.5]"
          }`}
        >
          {parag}
        </Typography>
        <Typography
          variant="h5"
          color="black"
          className="mb-3 font-bold  text-xl leading-[2]"
        >
          {parag1}
        </Typography>
        <Typography
          variant="ul"
          color="black"
          className="mb-6 text-lg font-bold text-start leading-[2]"
        >
          {ul.map((item, index) => (
            <ul key={item} className="text-start">
              <li> - {item}</li>
            </ul>
          ))}
        </Typography>
      </CardBody>
    </Card>
  );
}
