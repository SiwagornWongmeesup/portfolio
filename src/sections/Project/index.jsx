import { useEffect, useState } from "react";
import { Projectdata } from "../../contents-text/project";
import Picture from "../../components/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleLink from "../../components/TitleLink";
import Tech from "../../components/Tech";

const Project = ({ onInitial, title = "", link }) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const SectionId = `${title}-section`;

    useEffect(() => {
        onInitial(SectionId); 
    },[]);
   
    return (
        <div id={SectionId} className="scroll-m-6">
            <div className="text-primaryTitle font-medium px-2">{title}</div>
            {Projectdata.map((item, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-[25%_75%] px-2 py-4 p-2 rounded-lg transition duration-300 
                        ${hoverIndex === index ? "bg-primarybase" : ""}`}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div className="pt-11">
                        <Picture  picture={item.picture} title={item.title} />
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <TitleLink isHighLight={hoverIndex === index} title={item.title} link={item.link} />
                        <div>{item.description}</div>

                        <div className="flex  text-xl gap-x-4">
                            {item.tech.map((icon, idx) => (
                                <div className="flex  gap-x-4 items-center" key={`${idx}-Tech`}>
                                    <Tech icon={icon} isHighLight={hoverIndex === index} />
                                    {item.skill && (
                                    <div className="inline-block text-sm bg-blue-300  p-2 rounded-sm ">{item.skill}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
