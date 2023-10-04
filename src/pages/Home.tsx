import { Header } from "../components/Header";
import developerImg from "../image/130724-loading-webpage.gif";
import lamp from "../image/lightideacreate.gif";
import { Button } from "../components/Button";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="block md:flex md:justify-between mt-[30px]">
        <div className="w-full md:w-1/2">
          <img className="w-full" src={developerImg} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="xl:text-5xl lg:text-5xl text-4xl font-semibold mt-[50px]">
            Website/App Design & Maketing Online
          </h1>
          <div className="flex my-[30px]">
            <div className="md:w-3/5">
              <h3 className="text-xl">
              Chúng tôi chuyên thiết kế theo yêu cầu và cung cấp các giải pháp quảng cáo hiệu quả cho các cá nhân, doanh nghiệp trong mọi lĩnh vực.
              </h3>
              <ul className="mt-[20px] text-blue-600 space-y-2">
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <p>Thiết kế bộ nhận diện thương hiệu </p>
                </li>
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <p>Thiết kế Website/App Mobile và LangdingPage</p>
                </li>
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <p>Chạy quảng cáo mọi nghành hàng </p>
                </li>
                
              </ul>

              {/* <div className="flex space-x-4 mt-6 text-lg lg:text-xl">
                <Link to="/thiet-ke">
                  <Button 
                    size="small" 
                    text="Thiết kế"
                    icon ={<FaRegEdit />} 
                    />
                </Link>
                <Link to="/About">
                  <Button
                    size="small"
                    variant="outline"
                    text="Contact"
                    icon={<RiContactsLine />}
                    />
                </Link>
              </div> */}
            </div>
            <div className="w-2/5">
              <img src={lamp} alt="lampimg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
