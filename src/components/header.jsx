import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="column1">
        <section className="imagewrapper">
          <Link to="/profile">
            <figure>
              <img className="image" src="image/victor.jpg" />
            </figure>
          </Link>
        </section>
        <section>
          <h1>Chats</h1>
        </section>
      </div>
      <div className="column2">
        <Link to="/camera">
          <i class="fas fa-camera"></i>
        </Link>
        <Link to="/camera">
          <i class="fas fa-camera"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
