import React from "react";
import Logo from "./Logo"
import IconGroup from "./IconGroup";

function Header() {
    return ( 
        <header>
            <div className="flex flex-row justify-between w-9/12 m-auto p-4">
                <Logo imageUrl="/next.svg" />   
                <IconGroup />  
            </div>
        </header>
     );
}

export default Header;