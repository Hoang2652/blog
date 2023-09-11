import { Fragment } from "react";
function Pattern() {
    return ( 
    <Fragment>
        <svg width="40rem" height="46rem" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: '-132px' }}>
            <rect x="300" y="150" width="250" height="150" rx="50" ry="50" fill="#77b42b" transform="rotate(45 225 80)" />
            <rect x="-120" y="-100" width="170" height="80" rx="20" ry="20" fill="#e0374c" transform="rotate(145 140 125)" />
            <rect x="200" y="0" width="150" height="80" rx="20" ry="20" fill="#38a8e0" transform="rotate(35 225 80)" />
            <rect x="380" y="350" width="130" height="60" rx="20" ry="20" fill="#f4cd00" transform="rotate(-10)" />
            <rect x="-20" y="-170" width="35" height="70" rx="10" ry="10" fill="#394144" transform="rotate(150 225 80)" />
            <rect x="200" y="-470" width="400" height="200" rx="60" ry="60" fill="#e54592" transform="rotate(140 225 80)" />
        </svg>
    </Fragment> 
    );
}

export default Pattern;