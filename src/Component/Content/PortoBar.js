import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import { FaCircle, FaRegCircle } from "react-icons/fa";

import Wrapper from '../Part/Wrapper';

import porto1 from '../../Pics/Porto/Porto1.png';
import porto2 from '../../Pics/Porto/Porto2.png';
import porto3 from '../../Pics/Porto/Porto3.png';
import porto4 from '../../Pics/Porto/Porto4.png';
import porto5 from '../../Pics/Porto/Porto5.png';
import porto6 from '../../Pics/Porto/Porto6.png';

const slideShow = [
    {
        pic: porto1,
        title: "Monitoring system for energi solar system"
    },
    {
        pic: porto2,
        title: "Building automation system & energy efficiency monitoring system"
    },
    {
        pic: porto3,
        title: "Track monitoring system"
    },
    {
        pic: porto4,
        title: "Monitoring sensor system"
    },
    {
        pic: porto5,
        title: "Intelligent transportation system"
    },
    {
        pic: porto6,
        title: "Energy solar system"
    }
];

const PortoBar = () => {
    const slideRef = useRef();
    const captionRef = useRef();
    const [slide, setSlide] = useState(0);

    const goto = (target) => {
        slideRef.current.goTo(target);
    }
    const setCaption = (target) => {
        captionRef.current.goTo(target);
    }

    return (
        <Wrapper subTitle={"Our product and success story"} title={"What we have done"} style={{ minHeight: '90vh', paddingTop: '30px' }} center>
            <div className="row justify-content-center align-items-center">
                <Carousel
                    autoplay
                    afterChange={(idx) => setSlide(idx)}
                    beforeChange={(_, n) => setCaption(n)}
                    dots={false}
                    ref={slideRef}
                >
                    {slideShow.map((img, idx) => (
                        <div>
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                <img src={img.pic} alt={img.title} style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <Carousel
                    effect="fade"
                    dots={false}
                    ref={captionRef}
                >
                    {slideShow.map((img, idx) => (
                        <div key={idx}>
                            <h1 style={{ textAlign: 'center' }}>{img.title}</h1>
                        </div>
                    ))}
                </Carousel>

                <div style={{ textAlign: 'center' }}>
                    {slideShow.map((data, idx) => {
                        if (slide === idx)
                            return <FaCircle key={idx} style={{ margin: '6px 8px', cursor: 'pointer', color: '#1c658d' }} />;
                        else
                            return <FaRegCircle key={idx} onClick={() => { goto(idx) }} style={{ margin: '6px 8px', cursor: 'pointer', color: '#1c658d' }} />;
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default PortoBar;