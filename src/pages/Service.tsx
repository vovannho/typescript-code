import { Header } from '../components/Header'
import companyImg from '../image/service2.jpg';
import ecommerceImg from '../image/service1.jpg';
import landingImg from '../image/service3.jpg';
import appImg from '../image/appmobile.jpg';
import { Button } from '../components/Button';
import {FaPhoneSquareAlt} from 'react-icons/fa'
import { Footer } from '../components/Footer';

const Service = () => {
  const Services = [
  
    {
      imgSrc: ecommerceImg,
      title: 'E-commerce website design',
      content: 'Design a multi-product sales page, focusing on the aesthetics of the product line, user-friendly and compatible on many devices.  '
    },
    {
      imgSrc: companyImg,
      title :'Company Introduction',
      content: 'Design a website to introduce and promote the company"s brand in a simple, accessible way with information and services so that customers can contact them when needed.'
    },
    {
      imgSrc: appImg,
      title :'Mobile app design',
      content: 'App design is a great foundation for user experience. As the number of people accessing the internet by mobile is increasing exponentially. Then professional mobile application is the right hand to double revenue.'
    },
    {
      imgSrc: landingImg,
      title :'Langding Page all fields',
      content: 'In addition to sales purposes, Landing Page is also used for many other purposes in advertising and marketing such as promotional pages, gift giving, ebooks, events, marketing funnels...'
    },
  ]
  return (
    <div>
        <Header/>
        <div className='xl:text-6xl lg:text-5xl text-4xl text-center mt-[60px]'>
          Our service and Technology
        </div>
        <ul className=' grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
              {Services.map((item,index)=> {
                    return(
                        <li className='relative grid md:grid-cols-2 gap-3 border p-3 shadow-md min-h-[310px]' key={index}>
                          <div>
                            <img src={item.imgSrc} alt=''/> 
                          </div>
                          <div>
                            <p className='text-2xl font-medium'>
                              {item.title}
                            </p>
                            <p className='text-lg font-light'>
                              {item.content}
                            </p>
                            <a href="tel:+84814213949" className='float-right items-end mt-3'>
                              <Button text='Call Now' variant='green' size='small' icon={<FaPhoneSquareAlt/>} />
                            </a>
                          </div>

                        </li>
                    )})
                    }
        </ul>
        <Footer/>
    </div>
  )
}

export default Service