import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Nav.scss';
function Nav() {
    return (
    <nav class="nav">
    <div class="tabs">
    <NavLink className="tab" to="/meet">
                    <div className="tab__title">Hello!</div>
                    <div className="tab__subtitle">Meet the Cryptids</div>
                </NavLink>
               <NavLink className="tab" to="/book">
                    <div className="tab__title">The Book!</div>
                    <div className="tab__subtitle">Availability and Events</div>
                </NavLink>
                <NavLink className="tab" to="/media">
                    <div className="tab__title">Media</div>
                    <div className="tab__subtitle">Games, Coloring Pages and more</div>
                </NavLink>
                <NavLink className="tab" to="/involve">
                    <div className="tab__title">Foster or Adopt!</div>
                    <div className="tab__subtitle">Get Involved</div>
                </NavLink>
 

    </div>
</nav> );
}

export default Nav;