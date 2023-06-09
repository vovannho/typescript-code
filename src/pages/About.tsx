import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'
import developerProfile from '../image/meeting.jpg';
import {FaFacebook,FaPhoneSquareAlt ,FaMapMarkerAlt } from "react-icons/fa";
import {IoEarth} from "react-icons/io5";
import CountUp from 'react-countup';
const About = () => {
    
const Contact = [
  
    {
      icon: FaFacebook,
      color : 'text-blue-700',
      text: 'Thiết kế website giá rẻ '
    },
    {
      icon: FaPhoneSquareAlt,
      color : 'text-green-600',
      text :'081.421.3949'
    },
    {
        icon: IoEarth,
        color : 'text-blue-700',
        text : 'Mwebsite.net'
      },
    {
      icon: FaMapMarkerAlt,
      color : 'text-red-500',
      text : '41 Trần Bạch Đằng - Sơn Trà - Đà Nẵng'
    }
  
  ]
  
  return (
    <div>
        <Header/>
        <div className='xl:text-6xl lg:text-5xl text-4xl text-center mt-[60px]'>
            About for Mwebsite
        </div>
        <div className='lg:grid grid-cols-2 gap-6 mt-6'>
            <div>
                <h3 className='text-2xl font-medium'>BIOGRAPHY</h3>
                <p className='text-lg mt-3 font-light'>
                    Hi, I'm Mwebsite.

                    <br/>
                    Mwebsite  would like to sincerely thank customers who have been accompanying us during the past time.

                    <br/>
                    Come to us, customers will experience the best service, the most perfect with the most competitive price. You can rest assured with our 24/7 service. With the mission of always putting prestige first, we will bring to customers the best that we can do.

                    <br/>
                    As a agency in website design and advertising services, we always offer quick - effective - affordable solutions.
                    <br/>
                </p>
                <br></br>
                <h3 className='text-2xl font-medium'>Contact Us :</h3>
                <ul className='space-y-3 mt-3 '>
                    {Contact.map((item,index)=> {
                    return(
                        <li className=' flex items-center space-x-3' key={index}>
                        <item.icon className={`${item.color} w-[30px] h-[30px]`} />
                        <p>{item.text}</p>
                        </li>
                    )})
                    }
                </ul>
               

            </div>
            <div className='w-full items-center justify-center '>
                <img className=' rounded-xl border-solid p-2 border' src={developerProfile} alt="" />
                <div className='sm:grid  grid-cols-3 gap-3 my-6'>
                    <div className='text-center text-lg font-medium'>
                      <p className=' text-6xl font-semibold mb-2 text-blue-500'>
                        <CountUp start={40} end={50} duration={3}/>
                        <span>+</span>
                      </p>Projects Completed</div>
                    <div className='text-center text-lg font-medium'>
                      <p className=' text-6xl font-semibold mb-2 text-blue-500'>
                      <CountUp start={35} end={45} duration={3}/>
                        <span>+</span>
                      </p>Satisfied Clients</div>
                    <div className='text-center text-lg font-medium'>
                      <p className=' text-6xl font-semibold mb-2 text-blue-500'>
                      <CountUp start={1} end={4} duration={3}/>
                        <span>+</span>
                      </p>Years Of Experience
                    </div>
                </div>
            </div>
        </div>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default About