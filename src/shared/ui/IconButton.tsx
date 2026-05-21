import type {IconButtonProps} from "../types";

const IconButton = ({onClick, disabled=false, icon, addClasses=""}: IconButtonProps) => {

   return (
      <>
         <button
            className={` opacity-80 hover:opacity-100 cursor-pointer ` + addClasses}
            onClick={onClick}
            disabled={disabled}
         >
            {icon}
         </button>
      </>
   )
}

export default IconButton;