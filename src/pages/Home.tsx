import { Header } from "../components/Header";
import developerImg from "../image/130724-loading-webpage.gif";
import lamp from "../image/lightideacreate.gif";
import { Button } from "../components/Button";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="block md:flex md:justify-between mt-[30px]">
        <div className="w-full md:w-1/2">
          <img className="w-full" src={developerImg} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold mt-[50px]">
            Website/App Design & Maketing Online
          </h1>
          <div className="flex my-[30px]">
            <div className="md:w-3/5">
              <h3 className="text-xl">
                We specialize in custom website design and provide effective
                advertising solutions for individuals and businesses in all
                fields.
              </h3>
              <ul className="mt-[20px] text-blue-600 space-y-2">
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <p>Custom logo design</p>
                </li>
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <p>Website design for all fields</p>
                </li>
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <p>Write SEO content & SEO website</p>
                </li>
                <li className="flex items-center gap-x-4 text-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <p>Google, facebook ads in all fields</p>
                </li>
              </ul>

              <div className="flex space-x-4 mt-6 text-lg lg:text-xl">
                <Button size="small" text="Resume" icon ={<FaRegEdit />} />
                <Button
                  size="small"
                  variant="outline"
                  text="Contact"
                  icon={<RiContactsLine />}
                />
              </div>
            </div>
            <div className="w-2/5">
              <img src={lamp} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
