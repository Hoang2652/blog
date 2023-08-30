import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import '@/styles/input.css'
import SearchIcon from '@mui/icons-material/Search';

interface AutoCompleteProps {
    options?: string[];
}

interface NameProps {
    name: string;
    highlight: string;
}

const Name: React.FC<NameProps> = ({ name, highlight }) => {
    if (!highlight.trim()) {
        return <span>{name}</span>;
    }

    const escapeRegExp = (str: string = ""): string =>
        str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

    const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");
    const parts = name.split(regex);

    return (
        <span>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <span key={i} style={{ color: '#1976d2'}}>{part}</span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
};

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

        if (suggestions.length < 1 || suggestions.length === options.length) {
            setShowSuggestions(false);
        } else {
            setShowSuggestions(true);
        }

        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);   
    };

    const handleSuggestionClick = (suggestion: string) => {
        setValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <div className="autocomplete_wrap">
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder="Search by keyword..."
                    onFocus={() => setShowSuggestions(true)}
                    className="autocomplete_input"
                />
                <div className="autocomplete_icon_wrap search_icon">
                    <SearchIcon sx={{ fontSize: '40px', margin: 'auto', color: 'white'}}/>
                </div>
            </div>
            {showSuggestions && (
                <ul className="suggestions show">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            <Name name={suggestion} highlight={value} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
