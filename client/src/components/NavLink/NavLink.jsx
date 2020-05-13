import React from 'react';

function NavLink(props) {
  let navLink = {
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: '3px',
    fonSize: '10px',
    margin: '10px',
  };

  return (
    <div style={navLink}>

      <div className="navlink-home">
        HOME
      </div>

      &nbsp;

      <div>
        /
      </div>

      &nbsp;

      <div className="navlink-shop">
        SHOP
      </div>

      &nbsp;

      <div>
        /
      </div>

      &nbsp;

      <div className="navlink-body">
        {props.item.category}
      </div>

      &nbsp;

      <div>
        / {props.item.name}
      </div>

    </div>
  );
}
export default NavLink;
