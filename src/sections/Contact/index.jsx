 import { faDiscord, faFacebook, faGithub, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Contact = () => {
     return (
         <div className='flex items-end gap-3.5 text-2xl'>
             <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faFacebook} />
             <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faInstagram} />
             <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faLine} />
             <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faGithub} />
            <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faDiscord} />
        </div>
     )
    }   
 export default Contact;