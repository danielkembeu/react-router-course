import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilPage() {
    return (
        <div>
            <h3>Page de profil</h3>
            <Link to='/accueil'>Retour</Link>
        </div>
    );
}