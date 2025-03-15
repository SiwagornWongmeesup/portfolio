import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () =>{
    return(
        <div className='flex flex-col gap-4 font-medium'>
            <div>
                <FontAwesomeIcon className='mr-2' icon={faArrowRight}/>
                About</div>
            <div>Skill</div>
            <div>Experience</div>
            <div>Project</div>
            <div>Blog</div>
        </div>
    )
}

export default Navbar;