import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import '@/styles/input.css'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ListProps {
    options?: string[];
}

const List: React.FC<ListProps> = ({ options = [] }) => {

    const [value, setValue] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const autocompleteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleSuggestionClick = (suggestion: string) => {
        value.length === 0 ? setValue(suggestion) : setValue((prev) => prev + ', '+ suggestion)
    };

    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <div className="autocomplete_wrap">
                <div style={{ paddingLeft: '10px', margin: 'auto' }}>
                    <AddCircleIcon sx={{ fontSize: '45px',  color: '#394144', transform: showSuggestions ? 'rotate(45deg)' : '', transition: 'all 0.5s'  }} />
                </div>
                <div
                    placeholder="Add as many as you'd like..."
                    onClick={() => setShowSuggestions(true)}
                    className="autocomplete_choose"
                    style={{ color: showSuggestions ? '' : '#9ca0a1' }}
                >
                    {value.length === 0 ? "Add as many as you'd like..." : value}
                </div>
                <div className="list_icon_wrap search_icon">
                    <SearchIcon sx={{ fontSize: '40px', margin: 'auto', color: 'white'}}/>
                </div>
            </div>
            {showSuggestions && (
                <div className="suggestions show" style={{ marginLeft: '3.75rem'}}>
                    {options.map(option => (
                        <div className="checkbox-input" onClick={() => handleSuggestionClick(option)} key={option}>
                            <input type="checkbox"></input>
                            <label>
                                {option} 
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;
