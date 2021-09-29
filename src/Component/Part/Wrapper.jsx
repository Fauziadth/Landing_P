import React from 'react';
import { Fade } from 'react-reveal';

const Wrapper = ({
    children,
    title,
    subTitle,
}) => {
  return (
    <div className="row justify-content-center align-items-center wrapper">
        <div className="col-8">
            <Fade left>
                <h3>{subTitle}</h3>
                <h1>{title}</h1>                
                {children}
            </Fade>
        </div>
    </div>
  );
}

export default Wrapper;