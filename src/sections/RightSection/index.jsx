import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Skill from "../Skill";
import Experience from "../Experience";
import Project from "../Project";
import {BlogData} from "../../contents-text/Blog";
import Footer from "../Footer";
import ScrollToTop from "../scrolltotop";
     
const RightSection = ({onInitial}) => {
    return (
        <div className="grid gap-y-16 lg:gap-y-36 px-5">
           <About  
            title="About" 
            onInitial={onInitial}
           />
           <Skill
            title="Skill"
            onInitial={onInitial}
             />
           <Experience
            onInitial={onInitial}
            title="Experience"
           />

           <Project
            onInitial={onInitial}
            title="Project"
           />
           
           {/* ContentContainer
            onInitial={onInitial}  
            title="Blog"
            data={BlogData} */}
           <Footer/>
            <ScrollToTop />
        </div>
        
    )
}

export default RightSection;