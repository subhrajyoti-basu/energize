import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer({ applink, ourchargers }) {
    return (
        <>
            <div className=" mt-[10px] bg-black px-5 py-10 ">
                <div className='px-10 max-w-[1238px] mx-auto flex items-center justify-between'>


                    <div className='w-[150px]'>
                        <img src='/images/Energize_Logo4.png' />
                    </div>
                    <div className="space-x-10 hidden lg:flex text-white">
                        <div className='cursor-pointer' onClick={applink}>Get App</div>
                        <div className='cursor-pointer' onClick={ourchargers}>Our Chargers</div>
                        <div className='cursor-pointer' onClick={ourchargers}>Partner With Us</div>
                    </div>
                    <div className='flex space-x-2 text-white'>
                        <a href="https://www.facebook.com/Energize-EV-Charging-Solutions-107034718786007">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/energizechargin">

                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/energizecharging/">

                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className='text-white px-10 max-w-[1238px] mx-auto flex items-center space-x-4 text-xs'>
                    <Link href={'/privacy_policy'}>Privacy Policy</Link>
                    <Link href={'/refund_policy'}>Refund Policy</Link>
                    <Link href={'/terms_and_conditions'}>Terms and Condition</Link>
                </div>
                <div className='flex justify-center mt-5'>
                    <img className='w-[50%] md:w-[40%]' src='/images/image-company.png'></img>
                </div>
            </div>
        </>
    );
}

export default Footer;