import { Header } from "../components/Header";
import actical1 from "../image/artical1.jpg";
import actical2 from "../image/artical2.jpg";
import actical3 from "../image/artical3.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Artical = () => {
  const ListArtical = [
    {
      imgSrc: actical1,
      title: "E-commerce website design",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Company Introduction",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical3,
      title: "Mobile app design",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
  ];
  // const maxLengt = 8;
  // const countPage = Math.ceil(ListArtical.length/maxLengt);
  // const [currentPage,setCurrentPage]  = useState(1);
  return (

    <div>
      <Header />
      <div className="xl:text-6xl lg:text-5xl text-4xl text-center mt-[60px]">
        From the Blog
      </div>
      <ul className="grid-cols-4 grid gap-4 mt-[60px] ">
        {ListArtical.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <li className="h-[350px] relative rounded-xl overflow-hidden">
                <div className="absolute h-full w-full z-1  bg-black opacity-30 "></div>
                <img
                  className="h-full object-cover"
                  src={item.imgSrc}
                  alt="artical1"
                />
                <div className="absolute px-4 text-[#fff] inset-x-0 bottom-4 w-full z-10 ">
                  <p className="text-xl font-medium">{item.title}</p>
                  <div className="flex justify-between">
                    <p>{item.create_at}</p>
                    <p className="bg-blue-500 px-2 py-0.5 rounded-xl">
                      {item.topic}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Artical;
