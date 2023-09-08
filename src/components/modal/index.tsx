import React, { ReactNode } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
}

function modal({ isVisible, onClose, children }: ModalProps): JSX.Element | null {

    if (!isVisible) return null;

    const handleClose = (event: any) => {
        if(event.target.id === 'wrapper') onClose();
    }

    return ( 
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[800px] flex flex-col">
                <button className="text-white text-xl place-self-end " onClick={() => onClose()}>
                    <CancelIcon sx={{ color: '#394144', fontSize: '30px', marginBottom: '10px', marginRight: '-30px', '&:hover': {color: '#0284C7',},}} />
                </button>
                <div className="bg-white rounded">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default modal;