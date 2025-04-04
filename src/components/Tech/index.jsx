import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tech = ({isHighLight,icon,link}) => {

    let iconColor = "";

    if (icon.iconName === "html5") {
        iconColor = isHighLight ? "text-red-600" : "text-gray-600" ;
    } else if (icon.iconName === "css") {
        iconColor = isHighLight ? "text-blue-600" : "text-gray-600";
    } else if (icon.iconName === "js") {
        iconColor = isHighLight ? "text-yellow-500" : "text-gray-600";
    } else if (icon.iconName === "react") {
        iconColor = isHighLight ? "text-blue-600" : "text-gray-600" ;
    } else if (icon.iconName === "wordpress") {
        iconColor = isHighLight ? "text-blue-600" : "text-gray-600" ;
    }
    return(
    <div>
        <div className="flex gap-x-4 text-xl">
            <a href={link} target="_blank" className={`hover:scale-110 duration-500 ${iconColor}`}><FontAwesomeIcon icon={icon}/></a>
        </div>
    </div>
    )
}

export default Tech;