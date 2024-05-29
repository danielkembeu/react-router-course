import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='container'>
      <h2>COURS SUR REACT ROUTER</h2>
      <section>

        {/* Page d'accueil */}
        <Link style={{ color: '#444' }} to='/accueil' className='route'>
          <div className='image_1' />
          <h4>Page d'accueil</h4>
          <p>Découvrez tous nos services en détail.</p>
        </Link>

        {/* Page de profil */}
        <Link style={{ color: '#444' }} to='/profil' className='route'>
          <div className='image_2' />
          <h4>Page de profil</h4>
          <p>Apprenez à nous connaître ainsi que nos activités.</p>
        </Link>
      </section>
    </div>
  )
}
