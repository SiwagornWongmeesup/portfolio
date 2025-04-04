 import { faDiscord, faFacebook, faGithub, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Contact = () => {
     return (
     
         <div className='flex items-end gap-3.5 text-2xl mt-5   '>
            <a href="https://www.facebook.com/share/1AXguU5DZW/"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faFacebook} />
            </a>
            
            <a href="https://www.instagram.com/siwag.orn?igsh=aW12czhsZHBjejJ1s"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faInstagram} />
            </a>

            <a href="https://line.me/ti/p/ZcXu7n0je7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faLine} />   
            </a>

            <a href="https://github.com/SiwagornWongmeesup"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 duration-300' icon={faGithub} />
            </a>
        </div>
       
          
     )
    }   
 export default Contact;