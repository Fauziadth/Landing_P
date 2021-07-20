import React from 'react';
import { Link } from 'react-router-dom';


const navData = [
  {
      id: 'about',
      value: 'About',
      path: '/'
   },
   {
       id: 'portofolio',
       value: 'Portofolio',
       path: 'portofolio'
    },
    {
        id: 'catalogue',
        value: 'Catalogue',
        path: 'catalogue'
     },
     {
         id: 'Porto',
         value: 'Contact Us',
         path: 'contact'
      },
]

const navDataTop = {
    id: 'Welcome',
    value: 'PA',
    path: '/'
}

export default function NavBar (){
    return (
        <div className='inner'>

            <ul>
                <NavItem data = {navDataTop} key={navDataTop.value}/>
            </ul>

            <ul className="content">
                {navData.map((data,idx)=>(
                    <NavItem data={data} key={idx}/>    
                ))}
            </ul>
        </div>
    )
}

const NavItem = ({ data }) => (
    <li>
        <Link to={data.path}>
            {data.value}
        </Link>
    </li>
);
