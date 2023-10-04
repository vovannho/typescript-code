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
      title: 'Thiết kế website thương mại điện tử',
      content: 'Thiết kế trang bán hàng đa sản phẩm, chú trọng tính thẩm mỹ của dòng sản phẩm, thân thiện với người dùng và tương thích trên nhiều thiết bị.  '
    },
    {
      imgSrc: companyImg,
      title :'Giới thiệu công ty',
      content: 'Thiết kế website giới thiệu, quảng bá thương hiệu công ty một cách đơn giản, dễ tiếp cận với các thông tin, dịch vụ để khách hàng có thể liên hệ khi có nhu cầu.'
    },
    {
      imgSrc: appImg,
      title :'Thiết kế ứng dụng di động',
      content: 'Khi số lượng người truy cập internet bằng điện thoại di động ngày càng tăng theo cấp số nhân. Khi đó ứng dụng di động chuyên nghiệp chính là cánh tay đắc lực để tăng gấp đôi doanh thu.'
    },
    {
      imgSrc: landingImg,
      title :'Thiết kế LangdingPage đa nghành ',
      content: 'In addition to sales purposes, Landing Page is also used for many other purposes in advertising and marketing such as promotional pages, gift giving, ebooks, events, marketing funnels...'
    },
  ]
  return (
    <div>
        <Header/>
        <div className='xl:text-5xl lg:text-4xl text-4xl text-center mt-[60px]'>
          Thiết kế Web/App, LangdingPage 
        </div>
        <ul className=' grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
              {Services.map((item,index)=> {
                    return(
                        <li className='relative grid md:grid-cols-2 gap-3 border p-3 shadow-md min-h-[310px]' key={index}>
                          <div>
                            <img src={item.imgSrc} alt=''/> 
                          </div>
                          <div>
                            <p className='text-xl font-medium mb-2'>
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