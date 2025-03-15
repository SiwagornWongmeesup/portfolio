import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = () => {
    return (
        <div className="px-5">
        {/* stickyยึดติดกับอเมื่อscroll */}
            <div className='sticky top-6 grid gap-y-5 lg:grid-rows-[55%_35%_10%] lg:h-[92vh]'>
                <Header/>
                <Navbar/>
                <Contact/>
            </div>
      </div>
    )
} 

export default LeftSection;