import { useState } from "react";

const MenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="w-9 h-7 flex flex-col justify-center items-center cursor-pointer relative" 
            onClick={() => setIsOpen(!isOpen)}
        >
            <div 
                className={`h-1 w-full bg-black transition-all duration-500 ease-in-out absolute ${isOpen ? "rotate-45 " : "top-0"}`}
            ></div>
            <div 
                className={`h-1 bg-black transition-all duration-500 ease-in-out ${isOpen ? "opacity-0" : "w-1/2"}`}
            ></div>
            <div 
                className={`h-1 w-full bg-black transition-all duration-500 ease-in-out absolute ${isOpen ? "-rotate-45 " : "bottom-0"}`}
            ></div>
        </div>
    );
};

export default MenuToggle;
