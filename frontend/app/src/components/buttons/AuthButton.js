import React, { useState } from 'react';
import img3 from '../../assets/images/buttons/authorization/authorization-push.png'
import img2 from '../../assets/images/buttons/authorization/authorization-point.png'
import img1 from '../../assets/images/buttons/authorization/authorization-nonclick.png'
const AuthButton = ({toggle}) => {
    const [image, setImage] = useState(img1);

    const handleLeave = () => {
        setImage(img1);
    };

    const handleHover = () => {
        setImage(img2);
    };

    const handlePress = () => {
        setImage(img3);
        toggle();
    };

    return (
        <div className="col-lg-12 d-flex mb-2 mt-5 justify-content-end">
            <img
                className=""
                src={image}
                alt="button"
                draggable="false"
                style={{width: "80%", height: "100%"}}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onMouseDown={handlePress}
                onMouseUp={handleHover}
            >
            </img>
        </div>
    );
}

export default AuthButton;
