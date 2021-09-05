import React from 'react';
import { dataSkill as skillData } from '../../content/data';


const SkillItem = ({ data }) => (
  <div className="skills-content">
    <div className="skill-img">
      <img className="dark-invert" src={data.pics.url} alt={data.pics.alt}></img>
    </div>

    <h3>{data.title}</h3>
    
    <ul>
      {data.usage.map((dat, idx)=>(
        <li key ={idx}>{dat}</li>
      ))}
    </ul>
  </div>
);

const SkillBar = () => {
  
  return (
    <div className="part">
      <div className="inner w9">
          {(skillData.length > 0)? skillData.map((data, idx) => (
            <SkillItem data={data} key={idx} />
            )):
            null
          }
      </div>
    </div>
  );
}

export default SkillBar;