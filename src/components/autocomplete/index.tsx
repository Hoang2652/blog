import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import './index.css'

interface AutoCompleteProps {
    options?: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ options = [] }) => {
    const [value, setValue] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    
    const suggestions: string[] = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
    );

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if(suggestions.length < 1){
            setShowSuggestions(false);
        }
        else {
            setShowSuggestions(true);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <input
                value={value}
                onChange={handleChange}
                placeholder="Search by keywword..."
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
