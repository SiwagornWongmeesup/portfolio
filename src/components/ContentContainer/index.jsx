import { useEffect, useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
}) => {
    
    const [isMouseEnter, setIsMouseEnter] = useState({});

     const SECTION_ID = `${sectionTitle}-section`

     useEffect(() => {
        onInitial(SECTION_ID);
     },[])

    return(
        <div id={SECTION_ID} className="scroll-m-6">
        <div className="text-primaryTitle font-medium px-2">{sectionTitle}</div>
      {
        data.map(({date,
            title="",
            link="",
            description=[],
            tech=[],
            picture="",
        },index)=>( 

            
        <div 
            key={`${SECTION_ID}-${index}`}
            className={`grid grid-cols-[25%_75%] rounded-lg px-2 py-4 duration-300 ${isMouseEnter[`${SECTION_ID}-${index}`]? "bg-primarybase":""}`}
            onMouseEnter={() =>setIsMouseEnter({[`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() =>setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            >

            <div>
                
               <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
               <Picture picture={picture} title={title}/>
            </div>
          
            <div className="grid gap-y-4">
                <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}/>
                {
                    description.map((e,i)=>(
                          <Description key={`${e}-description-${i}`} description={e}/>
                    ))
                }
              
                { 
                    tech.length > 0 ?
                <div className="flex gap-x-4 text-xl">
                    {
                        tech.map((e,i )=>(
                            <Tech key={`${e}-Tech-${i}`}icon={e.type} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}/>
                         ))
                    }
                   
                </div>
                :null
                }
            </div>
        </div>
        ))
        }
    </div>
    )
}
export default ContentContainer;