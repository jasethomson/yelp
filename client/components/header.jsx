import React from 'react';

function Header(props){
  return (
    <div className="container pt-4">
      <div className="row d-flex justify-content-between">
        <ul className="px-0">
          <button className="btn btn-link text-white">Write a Review</button>
          <button className="btn btn-link text-white">Events</button>
          <button className="btn btn-link text-white">Talk</button>
        </ul>
        <ul>
          <button className="btn btn-link text-white">Log In</button>
          <button className="btn btn-outline-light">Sign Up</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;
