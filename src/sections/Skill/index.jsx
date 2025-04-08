import { faCss, faHtml5, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {data} from "../../contents-text/Skill"

const Skill = ({ 
    onInitial,
    title="",
}) => {
          
    const SectionId = `${title}-section`;

    useEffect(() => {
            onInitial(SectionId);
         },[])

    return(
        <div id={SectionId} className="scroll-m-6 space-y-4 px-2"> 
            <div className="text-primaryTitle font-medium">Skills</div>
            <div className="flex gap-2">
               <div className="flex items-center gap-2 bg-primaryHtml p-2 rounded-sm text-textColor">
                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                    {data[0].text1}
               </div>    
               
               <div className="flex items-center gap-2 bg-blue-500  p-2 rounded-sm  text-textColor">
                    <FontAwesomeIcon icon={faCss}></FontAwesomeIcon>
                    {data[0].text2}
                </div>        

                <div className="flex items-center gap-2 bg-yellow-500  p-2 rounded-sm  text-textColor">
                    <FontAwesomeIcon icon={faJs} />
                    {data[0].text3}
                </div>       
                <div className="flex items-center gap-2 bg-yellow-500 p-2 rounded-sm  text-textColor text-{color}">
                    <FontAwesomeIcon icon={faPython} />
                    {data[0].text4}
                    
                </div>       
                  
            </div>
        </div>

        
    )
}

export default Skill;