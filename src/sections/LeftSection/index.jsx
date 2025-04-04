import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = ({ navBarItems,currentSection }) => {
    return (
        <div className="px-5 mb-14 lg:mb-0">
        {/* stickyยึดติดกับอเมื่อscroll */}
            <div className='sticky top-6 grid px-2 lg:grid-rows-[1fr_2fr] lg:h-[83vh]'>
                <Header/>
                <Navbar navBarItems={navBarItems} currentSection={currentSection}/>
                <Contact/>
            </div>
      </div>
    )
} 

export default LeftSection;