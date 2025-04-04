import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents-text/about";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const About = ({
    onInitial,
    title = "",
}) => {

    const SectionId = `${title}-section`;

    useEffect(() => {
        onInitial( SectionId);
     },[])
   
    return (
        <div id={ SectionId} className="scroll-m-6 space-y-4 px-2">
            <div className="text-primaryTitle font-medium">{data.title}</div>
            <div className="gap-y-3">{data.description}</div>
            <div className='mt-3'>
                <a href="">
                <span className='rounded-xl bg-primaryTitle text-primaryBg py-2 px-3.5'>
                    {data.btnText}
                    <span className='rotate-90 inline-block ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                </span>
                </a>
            </div>
        </div>
    )
}
export default About;
 