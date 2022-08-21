import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from 'next/image';

function Header({ applink, ourchargers }) {
    return (
        <div className="flex items-center justify-between mt-[10px]">
            <div className='w-[150px]'>
                <img src='/images/Energize_Logo1.png' />
            </div>
            <div className="space-x-10 hidden lg:flex">
                <div className='cursor-pointer' onClick={applink}>Get App</div>
                <div className='cursor-pointer' onClick={ourchargers}>Our Chargers</div>
                <div className='cursor-pointer' onClick={ourchargers}>Partner With Us</div>
            </div>
            <div className='flex space-x-2'>
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
    );
}

export default Header;