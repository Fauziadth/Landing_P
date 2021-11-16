import React from 'react';
import { Fade } from 'react-reveal';
import { valuesList as dataList } from '../../content/data';
import value_pic from '../../Pics/Values.png';
import Wrapper from '../Part/Wrapper';

const ValuesBar = () => {
  
  return (
    <Wrapper subTitle={"Our Value"} title={"What you can expect from ours"} direction="left">
      <div className="row justify-content-center align-items-center">
          <div className="col-10">
              <div style={{marginTop : "30px" , marginBottom : "30px"}}>
                  <Fade left>
                    {dataList.map((data, idx) => (
                          <div key={idx} style={{display: 'grid', gridTemplateColumns: '35px auto', marginBottom : "30px"}}>
                              <div>
                                <img src={value_pic} alt="value_n" style={{height : '30px'}}/>
                              </div>
                              <div style={{fontSize : "18px", fontWeight : '600'}}>{data}</div>
                          </div>
                      ))
                    }
                  </Fade>
              </div>
          </div>
      </div>
    </Wrapper>
  );
}

export default ValuesBar;