import Picture from "../../components/Picture";
import { ExperienceData } from "../../contents-text/Experience";
import { useEffect, useState } from "react";

const Experience = ({ onInitial, title = "" }) => {
    const [hoverIndex, setHoverIndex] = useState(null); // เก็บแค่ index
    const SectionId = `${title}-section`;

    useEffect(() => {
        onInitial(SectionId);
    }, []);

    return (
        <div id={SectionId} className="scroll-m-6">
            <div className="text-primaryTitle font-medium px-2">{title}</div>
            {ExperienceData.map((item, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-[25%_75%] px-2 py-4 p-2 rounded-lg transition duration-300 
                        ${hoverIndex === index ? "bg-primarybase" : ""}`}  // ใช้ hoverIndex
                    onMouseEnter={() => setHoverIndex(index)}  // เก็บ index ที่ hover
                    onMouseLeave={() => setHoverIndex(null)}  // คืนค่าเป็น null เมื่อเมาส์ออก
                >
                    <div className={` px-2 ${hoverIndex === index ? "text-primarytext" : ""} flex flex-col gap-2`}>
                        {item.work}
                        <Picture picture={item.picture} title={title} />
                        <div className="text-primaryTitle px-2 text-sm">{item.year}</div>
                    </div>

                    <div className="flex flex-col gap-1 pt-7">
                        <div className="flex items-end">{item.topic}</div>
                        {item.description.map((desc, i) => (
                        <div key={i} className="text-sm">{desc}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
