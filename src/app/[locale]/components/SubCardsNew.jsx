import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useLocale, useTranslations } from "next-intl";

export default function SubCardsNew({ typeIndex }) {
  const t = useTranslations("SubMain");
  return (
    <div className="h-full w-full flex flex-col   ">
      {mainItems[typeIndex].subCards.map((item, index) => (
        <CardItem
          key={index}
          imgSrc={item.imgSrc}
          subTitle={t(`item${index + 1}`)}
          routeUrl={item.routeUrl}
        />
      ))}{" "}
    </div> // div
  );
}

const CardItem = ({ imgSrc, subTitle, routeUrl }) => {
  // const route = subTitle.replace(" ", "").toLowerCase();

  const locale = useLocale();
  const url = `/${locale}/${routeUrl}`;
  
  return (
    <Link href={url} className=" ">
      <Card className=" h-full top-0 m-4 p-0 bg-neutral-700 border-2 border-white ">
        <CardHeader className="rounded-none">
          <Image src={imgSrc} alt="log" width={400} height={400}  className="h-3/5"/>
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4"  className=" my-4 text-white  ">
            {subTitle}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};
const mainItems = [
  {
    id: 0,
    subCards: [
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "About Al Kaaba",
        routeUrl: "kaaba1",
      },
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "Parts of Al Kaaba",
        routeUrl: "kaaba2",
      },
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "About Al Kaaba",
        routeUrl: "kaaba3",
      },
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "About Al Kaaba",
        routeUrl: "kaaba4",
      },
      {
        imgSrc: "/sub/zam.jpg",
        subTitle: "Zam Zam",
        routeUrl: "zamzam",
      },
      {
        imgSrc: "/sub/ibrahim.jpg",
        subTitle: "Ibrahim",
        routeUrl: "maqam",
      },
      {
        imgSrc: "/sub/safa.jpg",
        subTitle: "The Safa",
        routeUrl: "safa",
      },
      {
        imgSrc: "/sub/blackstone.jpg",
        subTitle: "The black stone",
        routeUrl: "stone ",
      },
      {
        imgSrc: "/sub/corner.jpg",
        subTitle: "yemini corners",
        routeUrl: "yemini ",
      },
      {
        imgSrc: "/sub/ismail.jpg",
        subTitle: "Hijr Ismail",
        routeUrl: "hijr",
      },
    ],
  },
  {
    id: 1,
    subCards: [
      {
        imgSrc: "/m1.jpg",
        subTitle: "Mecca1",
      },
      {
        imgSrc: "/m2.jpg",
        subTitle: "mecca2",
      },
      {
        imgSrc: "/m3.jpg",
        subTitle: "mecca3",
      },
      {
        imgSrc: "/m4.jpg",
        subTitle: "mecca4",
      },
    ],
  },
  {
    id: 2,
    subCards: [
      {
        imgSrc: "/1.png",
        subTitle: "Al Kaaba",
      },
      {
        imgSrc: "/2.png",
        subTitle: "Zam Zam",
      },
      {
        imgSrc: "/3.png",
        subTitle: "Ibrahim",
      },
      {
        imgSrc: "/4.png",
        subTitle: "The Black Stone",
      },
      {
        imgSrc: "/5.png",
        subTitle: "The Right Corner",
      },
      {
        imgSrc: "/6.png",
        subTitle: "The Holder",
      },
    ],
  },
  {
    id: 3,
    subCards: [
      {
        imgSrc: "/1.png",
        subTitle: "Al Kaaba",
      },
      {
        imgSrc: "/2.png",
        subTitle: "Zam Zam",
      },
      {
        imgSrc: "/3.png",
        subTitle: "Ibrahim",
      },
      {
        imgSrc: "/4.png",
        subTitle: "The Black Stone",
      },
      {
        imgSrc: "/5.png",
        subTitle: "The Right Corner",
      },
      {
        imgSrc: "/6.png",
        subTitle: "The Holder",
      },
    ],
  },
];
