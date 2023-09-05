import React from "react";

function NavBar() {
  const links = [
    {id: 'home', label: 'home'},
    {id: 'about', label: 'about'},
    {id:'projects', label: 'projects'}
  ];

  const linkElements = links.map((link)=>
  <a key={link.id} href={`#${link.id}`}>
    {link.label}
  </a>)


  return (
  <nav>
    {linkElements}
  </nav>
    
  );
}

export default NavBar;
