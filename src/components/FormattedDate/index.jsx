const FormattedDate = ({isHighLight,children}) => {
    return(
        <div>
            <span className={`text-sm ${isHighLight ? "text-primarytext":""}`}>
                {children} 
            </span>
        </div>
    )
}

export default FormattedDate;