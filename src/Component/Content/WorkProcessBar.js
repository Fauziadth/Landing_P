import React from 'react';
import { Fade } from 'react-reveal';
import { workProcess as dataList } from '../../content/data';
import Wrapper from '../Part/Wrapper';


const Item = ({ data }) => (
  <div className="row">
    <div className="col-auto">
        <div className="process-init"><h3>{data.title.charAt(0)}</h3></div>
    </div>
    <div className="col-auto">
        <h3 style={{color:'#1c658d', fontWeight : '600'}}>{data.title}</h3>
        <p>{data.desc}</p>
    </div>
  </div>
);

const WorkProcessBar = () => {
  
  return (
    <Wrapper subTitle={"Our processes"} title={"To serve the best result"}>
      <div className="row justify-content-center align-items-center" style={{paddingTop : '20px'}}>
        <div className="col-10">
          <Fade left>
            {dataList.map((data, idx) => (
                <Item data={data} key={idx} />
              ))
            }
          </Fade>
        </div>
      </div>
    </Wrapper>
  );
}

export default WorkProcessBar;