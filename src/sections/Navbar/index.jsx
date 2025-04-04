import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navBarItems = [
    {title :"About",SectionId:"About-section"},
    {title :"Skill",SectionId:"Skill-section"},
    {title :"Experience",SectionId:"Experience-section"},
    {title :"Project",SectionId:"Project-section"},
    // {title :"Blog",SectionId:"Blog-section"},
]
const Navbar = ({currentSection}) =>{
    const [isMouseEnter,setIsMouseEnter] = useState ({});

    const handleClick = (SECTION_ID) => {
        document.getElementById(SECTION_ID).scrollIntoView({ behavior: "smooth"})
    }
  
    return(
       <div className='hidden lg:flex flex-col font-medium mt-6'>

            {
                navBarItems.map((e,i) => (
                 <div key={`nav-${e}-${i}`}
                   onMouseEnter={() => setIsMouseEnter({[e.title]: true})}
                    onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
                   onClick={() => handleClick(e.SectionId)}
                   className="cursor-pointer flex py-2"
                 >
                    <div>
                       
                    <FontAwesomeIcon className={`mr-3 new-arrow ${currentSection === e.SectionId? "text-green-600" : isMouseEnter[e.title] ? "text-primaryArrow" : "hidden" }`}icon={faArrowRight}/>
                    </div>
                    <div className={`${currentSection === e.SectionId || isMouseEnter[e.title] ? "translate-x-1":""} duration-500 ease-out`}>{e.title}</div>
                   </div>
                ))
            }
        </div>
    )
}

export default Navbar;