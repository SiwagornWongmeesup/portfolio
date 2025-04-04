import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState  } from "react";

const ScrollToTop = () => {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() => {
        const  toggleVisibility = () => {
            if(window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
    };

    window.addEventListener("scroll",toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); 

    const handleScrollToTop = () =>   {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return(
        <button onClick={handleScrollToTop}  className={`fixed bottom-5 right-5 bg-scroll p-3 rounded-lg shadow-lg transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none" }`}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>
    )
}

export default ScrollToTop;