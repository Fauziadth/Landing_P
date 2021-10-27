import React from 'react';
import { Fade } from 'react-reveal';
import { dataSkill as skillData } from '../../content/data';
import Wrapper from '../Part/Wrapper';


const SkillItem = ({ data }) => (
  <div className="col-md-4 skill-card">
    <div>
      <div className="img">
        <img className="dark-invert" src={data.pics.url} alt={data.pics.alt}></img>
      </div>

      <h3 style={{fontWeight : '600', color : 'black'}}>{data.title}</h3>
      
        {data.usage.map((dat, idx)=>(
          <div key ={idx}>{dat}</div>
        ))}
      </div>
  </div>
);

const SkillBar = () => {
  
  return (
    
    <Wrapper subTitle={"What we do"} title={"We provide capabilities on these"}>
      <div className="row" style={{paddingTop : "20px"}}>
          {skillData.map((data, idx) => (
              <SkillItem data={data} key={idx} />
            ))}
      </div>
    </Wrapper>
  );
}

export default SkillBar;