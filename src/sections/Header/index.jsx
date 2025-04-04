import { data } from '../../contents-text/header';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
   return (
    <div>
         <div className='flex flex-col gap-1'>
        
         <img src={data.img} alt="Profile" className="w-40 h-40 rounded-full object-cover" />

        
         <div className='mt-2 text-3xl text-primaryTitle font-semibold'>
         <TypeAnimation
            sequence={[
            data.name,
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'ศิวกร วงศ์มีทรัพย์',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
         />
    </div>
                    <div className='mt-2 font-medium'>{data.title}</div>
                    <div className='mt-2 text-sm w-5/6'>{data.caption}</div>   
        </div>
    </div>
   )
}

export default Header;