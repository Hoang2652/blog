import React from "react";
import Logo from "./Logo"
import IconGroup from "./IconGroup";
import NavMenu from "./NavMenu";

function Header() {
    return ( 
        <header className="fixed top-0 z-10 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-20 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div className="max-w-8xl mx-auto">
                <div className="flex flex-row justify-between w-9/12 m-auto p-4 relative ">
                    <Logo imageUrl="/next.svg" />  
                    <NavMenu /> 
                    <IconGroup />  
                </div>
            </div>
        </header>
     );
}

export default Header;