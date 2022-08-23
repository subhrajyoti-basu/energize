import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import EmailForm from '../components/EmailForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react'

export default function Home() {
  const applink = useRef(null)
  const ourchargers = useRef(null)
  const excuteScroll = () => applink.current.scrollIntoView()
  const excutecharges = () => ourchargers.current.scrollIntoView()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
    <Head>
      <title>Energize EV Charging Solutions - Home</title>
      <link rel='shortcut icon' href='/favicon.ico'/>
    </Head>
      <div className='px-10 max-w-[1238px] mx-auto'>
        <Header
          applink={excuteScroll}
          ourchargers={excutecharges} />
        <Banner />
        <div data-aos="fade-up" className='max-w-[700px] mx-auto'>
          <h1>
            Coming Soon
          </h1>
          <div className='text-justify mt-5'>
            With more and more electric vehicles rolling out
            on the Indian roads, the need to recharge their
            batteries grows
            exponentially. Though the introduction of
            electric vehicles solved various problems, but
            has also given birth to a new
            problem - the requisite charging infrastructures.
            At Energize, we pledge to bring you the best-in class charging infrastructure to recharge your electric vehicles. Our aim is
            to provide the electric vehicle users with
            convenient charging stations allowing them to
            drive their car with zero-anxiety on
            longer trips. We bring in our mobile application
            stitched with the best security framework, for
            both Android and iOS
            platforms, so that an EV user can find nearby charging stations at ease and can navigate to
            one without any hassle.
            Look out for us as we shall soon be energizing you and your EVs.
            <br />
            <p className='mt-5'>
              Cheers,<br />
              <b ref={applink}>Team Energize</b>
            </p>

          </div>
        </div>

        <div className='my-20' data-aos='fade-up'>
          <h3 className='max-w-[420px] mx-auto' >
            Hold on!!
            We are just not there yet.
          </h3>
          <p className='text-center mt-5 mb-5 max-w-[303px] mx-auto'>
            Get the links to our mobile application as
            soon as we launch!! Fill the form below.
          </p>
          <EmailForm />
        </div>
        <div className='my-16 ' ref={ourchargers}>
          <h1 className='text-center mb-10 max-w-[367px] mx-auto'>About Our Chargers</h1>
          <div className='space-y-5 lg:flex lg:space-y-0 lg:justify-between mx-auto'>

            <div className='lg:max-w-[355px] overflow-y-hidden transition-[height] duration-300 ease-in-out lg:h-[150px] lg:hover:h-[550px]  w-full bg-[#FFEFC7] p-10 rounded-lg items-center'>
              <div className='w-full'>
                <h3 className='w-[100px] text-left'>Rapid Chargers</h3>
              </div>
              <div className='flex mt-10 justify-evenly flex-wrap'>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Rapid_20KW(1).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Rapid_30KW(1).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Rapid_30KW(2).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Rapid_40KW(2).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Rapid_60KW(2).png' layout='fill' objectFit='contain' />
                </div>
              </div>
            </div>

            <div className='bg-[#E2FB7F] lg:max-w-[355px] overflow-y-hidden transition-[height] duration-300 ease-in-out lg:h-[150px] lg:hover:h-[550px]  w-full p-10 rounded-lg items-center'>
              <div className='w-full'>

                <h3 className='w-[100px] text-left'>Regular Chargers</h3>
              </div>
              <div className='flex mt-10 justify-evenly flex-wrap'>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Regular_14KW(1).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Regular_14KW(2).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Regular_7.2KW(2i).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Regular_3.3KW(1).png' layout='fill' objectFit='contain' />
                </div>
                <div className='h-[100px] w-[100px] relative m-3'>
                  <Image src='/images/Regular_3.3KW(1i).png' layout='fill' objectFit='contain' />
                </div>
              </div>
            </div>
            <div className='lg:max-w-[355px] overflow-y-hidden transition-[height] duration-300 ease-in-out lg:h-[150px] lg:hover:h-[880px]  w-full bg-[#FFEFC7] p-10 rounded-lg items-center'>
              <div className='w-full'>
                <h3 className='w-[100px] text-left'>Hybrid Chargers</h3>
              </div>
              <div className='flex mt-10 justify-evenly flex-wrap'>
                <div className='flex p-5 bg-[#fff6dd] rounded-lg w-max'>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Rapid_30KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Regular_3.3KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                </div>
                <div className='flex p-5 mt-4 lg:mt-4 sm:mt-0 bg-[#fff6dd] rounded-lg w-max'>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Rapid_30KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Regular_7.2KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                </div>
                <div className='flex p-5 mt-4 bg-[#fff6dd] rounded-lg w-max'>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Rapid_20KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Regular_3.3KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                </div>
                <div className='flex p-5 mt-4 bg-[#fff6dd] rounded-lg w-max'>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Rapid_20KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                  <div className='h-[100px] w-[100px] relative m-3'>
                    <Image src='/images/Regular_7.2KW(1).png' layout='fill' objectFit='contain' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='mb-20'>
          <h1 className='text-center'>Partner With Us</h1>
        </div>
        <div>
          <div className='space-y-10 md:flex md:space-y-0 items-center'>
            <ul className='list-disc w-full' data-aos='fade-right'>
              <li>Do you want to take your business to the next-level?</li>
              <li>Do want to generate more revenue through your business?</li>
              <li>Do you want to convert your business into a landmark?</li>
              <li>Do you want to turn your parking space into cash cow?</li>
            </ul>
            <div className='w-full ' data-aos='fade-left'>
              Join hands with Energize EV Charging Solutions and
              install an electric vehicle charger at your property
              and ride with us to make India carbon-free. Our chargers
              can be customised as per to your requirement and
              will generate you revenue like never before.
            </div>
          </div>
          <div className='my-20'>
            <h2 className='text-center max-w-[726px] mx-auto mb-10'>Our chargers can be conveniently installed at...</h2>
            <div className='space-y-5'>
              <div className='lg:max-w-[500px]' data-aos='fade-left'>
                <div className='relative h-[200px]'>
                  <Image src="/images/resort.png" layout='fill' objectFit='contain' />
                </div>
                <h5 className='text-center'>Hotel and Resorts</h5>
              </div>
              <div className='lg:max-w-[500px] ml-auto ' data-aos='fade-right'>
                <div className='relative h-[200px]'>
                  <Image src="/images/mall.png" layout='fill' objectFit='contain' />
                </div>
                <h5 className='text-center'>Shopping Malls</h5>
              </div>
              <div className='lg:max-w-[500px]' data-aos='fade-left'>
                <div className='relative h-[200px]'>
                  <Image src="/images/fleet.png" layout='fill' objectFit='contain' />
                </div>
                <h5 className='text-center'>Fleet Operation</h5>
              </div>
              <div className='lg:max-w-[500px] ml-auto ' data-aos='fade-right'>
                <div className='relative h-[200px]'>
                  <Image src="/images/office.png" layout='fill' objectFit='contain' />
                </div>
                <h5 className='text-center'>Office Spaces</h5>
              </div>
              <div className='lg:max-w-[500px]' data-aos='fade-left'>
                <div className='relative h-[200px]'>
                  <Image src="/images/dhaba.png" layout='fill' objectFit='contain' />
                </div>
                <h5 className='text-center'>Restaurants and Dhabas</h5>
              </div>
            </div>
            <h2 className='text-center my-10'>... and many other commercial spaces</h2>
            <div className='space-y-5 mx-auto max-w-[500px] my-20'>
              <h1>
                Want to become Energize Partner?
              </h1>
              <p>
                To know more about partnering with Energize EV Charging Solutions, mail us at <b>sales@energizecharging.com</b>
              </p>
            </div>
          </div>
        </div>

      </div >
      <Footer applink={excuteScroll}
        ourchargers={excutecharges} />
    </>
  )
}
