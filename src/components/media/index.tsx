import Modal from '@/components/modal'
import { useState } from 'react';
import Image from 'next/image';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import PlayArrowIcon from '@mui/icons-material/PlayArrowSharp';

function media() {

    const [showModal, setShowModal] = useState(false);
    const [opacity, setOpacity] = useState(0.5);

    return ( 
        <section>
            <figure className="flex pt-20 pb-32">
                <div className='w-44 rounded-lg relative overflow-hidden cursor-pointer' onClick={() => setShowModal(true)}>
                    <span className='absolute w-9 h-9 rounded-full top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center' onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0.5)}>
                        <Brightness1Icon sx={{ fontSize: '44px', opacity, fill: '#394144' }}/>
                        <PlayArrowIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
                    </span>
                    <Image
                        src="/HP_PW_Thumb.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <figcaption className='inline-block ml-6 w-auto'>
                    <h4 className='font-bold text-2xl mb-2'>Yep<span className='text-blue-700/90'>.</span> We buy cars, too<span className='text-blue-700/90'>.</span></h4>
                    <span className='inline-block max-w-sm text-lg'>
                        <p>
                            Honest. Transparent. Fast. It's the CarShop Wow. Get a <a href='#' className='underline hover:text-blue-700/90 cursor-pointer'>free online valuation.</a>
                        </p>
                    </span>
                </figcaption>
            </figure>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
                <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/OHTpBOZIIWY?si=oB1fwuuhKgwRmZGb" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                >
                </iframe>
            </Modal>
        </section> 
    );
}

export default media;