import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar_con">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label className="logo">Watch Vault</label>
        <ul className="navbar_link">
          <li className="navbar_hom">
            <Link className="active" to="/home">
              Home
            </Link>
          </li>
          <li className="navbar_ab">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar_fea">
            <Link to="/list">Watches</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
