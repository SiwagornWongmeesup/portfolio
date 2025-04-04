import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  Footer = () => {
    return(
        <div className="mb-3.5">
            <div className="flex lg:justify-end justify-center">
                <a href="https://github.com/SiwagornWongmeesup/My-Profile/blob/main/README.md"  target="_blank" rel="noopener noreferrer">
                <span>
                    powered By React.js and tailwind
                    <FontAwesomeIcon className='hover:scale-125 duration-500 pl-2 text-2xl 'icon={faGithub}/>
                </span>
                </a>
            </div>
        </div>
    )
}

export default Footer;