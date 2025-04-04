import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TitleLink = ({ isHighLight, title, link }) => {
   
    if(!link){
        return <div className={`${isHighLight? "text-primarytext":""}`}>{title}</div>
    }

    return(
        <div className={`${isHighLight? "text-primarytext":""}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">  
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isHighLight? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink;