import React from 'react';
import { Fade } from 'react-reveal';

const Wrapper = ({
    children,
    title,
    subTitle,
    center,
    style
}) => {
  return (
    <div className="row justify-content-center align-items-center wrapper" style={style ? style : null}>
        <div className="col-8">
            <Fade left>
                <h3 style={{textAlign : center ? 'center' : 'left'}}>{subTitle}</h3>
                <h1 style={{textAlign : center ? 'center' : 'left'}}>{title}</h1>                
                {children}
            </Fade>
        </div>
    </div>
  );
}

export default Wrapper;