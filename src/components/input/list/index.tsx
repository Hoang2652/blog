import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import '@/styles/input.css'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ListProps {
    options?: string[];
}

const List: React.FC<ListProps> = ({ options = [] }) => {

    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

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

    const handleSuggestionClick = (option: string) => {
        const isChecked = checkedOptions.includes(option);
    
        if (isChecked) {
          setCheckedOptions(checkedOptions.filter(item => item !== option));
        } else {
          setCheckedOptions([...checkedOptions, option]);
        }
    }

    const isOptionChecked = (option: string) => {
        return checkedOptions.includes(option);
      }

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
                    {checkedOptions.length === 0 ? "Add as many as you'd like..." : checkedOptions.join(', ')}
                </div>
                <div className="list_icon_wrap search_icon">
                    <SearchIcon sx={{ fontSize: '40px', margin: 'auto', color: 'white'}}/>
                </div>
            </div>
            {showSuggestions && (
                <div className="suggestions show" style={{ marginLeft: '3.75rem'}}>
                    {options.map(option => (
                        <div className="checkbox-input" onClick={() => handleSuggestionClick(option)} key={option}>
                            <input type="checkbox" checked={checkedOptions.includes(option)} readOnly />
                            <label style={{ fontWeight: isOptionChecked(option) ? 'bold' : 'normal' }}>
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
