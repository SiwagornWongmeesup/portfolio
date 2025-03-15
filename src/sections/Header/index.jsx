import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../contents-text/header';

const Header = () => {
   return (
    <div>
         <div className='flex flex-col gap-1'>
        
         <img src={data.img} alt="Profile" className="w-40 h-40 rounded-full object-cover" />

        
                    <div className='mt-3 text-3xl text-primaryTitle font-semibold'>{data.name}</div>
                    <div className='mt-2 font-medium'>{data.title}</div>
                    <div className='mt-2 text-sm w-5/6'>{data.caption}</div>
                    <div className='mt-6'>
                      <a href="">
                      <span className='rounded-xl bg-primaryTitle text-primaryBg py-2 px-3.5'>
                       {data.btnText}
                        <span className='rotate-90 inline-block ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                        </span>
                      </a>
                    </div>
        </div>
    </div>
   )
}

export default Header;