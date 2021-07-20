import React from 'react';
import { dataSkill as skillData } from '../../content/data';


const SkillItem = ({ data }) => (
  <div className="skills-content">
    <h3>{data.title}</h3>
    
    <img className="dark-invert" src={data.pics.url} alt={data.pics.alt}></img>
    
    <ul>
      {data.usage.map((dat, idx)=>(
        <li key ={idx}>{dat}</li>
      ))}
    </ul>
  </div>
);

const SkillBar = () => {
  
  return (
    <div className="skills">
      <div className="skills-container">
          {(skillData.length > 0)? skillData.map((data, idx) => (
            <SkillItem data={data} key={idx} />
            )):
            "ASUUUUU"
          }
      </div>
    </div>
  );
}

export default SkillBar;