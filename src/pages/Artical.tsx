import { Header } from "../components/Header";
import actical1 from "../image/artical1.jpg";
import actical2 from "../image/artical2.jpg";
import actical3 from "../image/artical3.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Footer } from "../components/Footer";

const Artical = () => {
  const ListArtical = [
    {
      id:"1",
      imgSrc: actical1,
      title: "E-commerce website design",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"2",
      imgSrc: actical2,
      title: "Company Introduction",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"3",
      imgSrc: actical3,
      title: "Mobile app design",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"4",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"5",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"6",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"7",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"8",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"9",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"10",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"11",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"12",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"13",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"14",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"15",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"16",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"17",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"18",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"19",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"20",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"21",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"22",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"23",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
    {
      id:"24",
      imgSrc: actical1,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Developer",
      link: "",
    },
    {
      id:"25",
      imgSrc: actical2,
      title: "Langding Page all fields",
      create_at: "Mar 16, 2020",
      topic: "Maketting",
      link: "",
    },
  ];

  const [currentPage,setCurrentPage]  = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = ListArtical.slice(firstIndex,lastIndex);
  const npage = Math.ceil(ListArtical.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  function nextPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage+1)
    }

  }
  function changCPage(id:number){
    setCurrentPage(id+1)

  }
  function prePage(){
    if (currentPage!== npage){
      setCurrentPage(currentPage-1)
    }

  }
  return (
    <div>
      <Header />
      <div className="xl:text-6xl lg:text-5xl text-4xl text-center mt-[60px]">
        From the Blog
      </div>
      <ul className="grid-cols-4 grid gap-4 mt-[60px] ">
        {records.map((item, index) => {
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
      <nav className="">
        <ul className="flex items-center  text-center space-x-3 mt-10 ">
          <li className="">
            <a onClick={()=> prePage()}>
              Prev
            </a>
          </li>
          {
            numbers.map((n,i)=> (
              <li className={`hover:bg-blue-400 ${currentPage === n ? 'bg-blue-400' :  ''}`}  key={i} >
                <a className="p-3" onClick={() => changCPage(i)}>{n}</a>
              </li>
            ))
          }
          <li>
            <a onClick={()=>nextPage()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <Footer/>
    </div>
  );
};

export default Artical;
