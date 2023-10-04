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
        text : 'AgencyM.net'
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
        <div className='xl:text-5xl lg:text-4xl text-4xl text-center mt-[60px]'>
            Về chúng tôi
        </div>
        <div className='lg:grid grid-cols-2 gap-6 mt-6'>
            <div>
                <h3 className='text-2xl font-medium'>Sứ mệnh và Lời cảm ơn  </h3>
                <p className='text-lg mt-3 font-light'>
                Với sứ mệnh luôn đặt uy tín lên hàng đầu, chúng tôi sẽ mang đến cho khách hàng những gì tốt nhất mà chúng tôi có thể làm được. 
                <br/>
                Là đơn vị cung cấp dịch vụ thiết kế website/app và quảng cáo, chúng tôi luôn đưa ra các giải pháp nhanh chóng – hiệu quả – giá cả phải chăng.
                <br/>
                AgencyM xin chân thành cảm ơn quý khách hàng đã đồng hành cùng chúng tôi trong suốt thời gian qua và sẽ tiếp tục hỗ trợ bạn một cách chu đáo nhất có thể !
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
                      <p className=' text-6xl font-semibold mb-2 text-blue-600'>
                        <CountUp start={40} end={100} duration={3}/>
                        <span>+</span>
                      </p>Dự án đã hoàn thành</div>
                    <div className='text-center text-lg font-medium'>
                      <p className=' text-6xl font-semibold mb-2 text-blue-600'>
                      <CountUp start={35} end={99} duration={3}/>
                        <span>+</span>
                      </p>
                      Khách hàng hài lòng
</div>
                    <div className='text-center text-lg font-medium'>
                      <p className=' text-6xl font-semibold mb-2 text-blue-600'>
                      <CountUp start={1} end={5} duration={3}/>
                        <span>+</span>
                      </p>Số năm kinh nghiệm
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