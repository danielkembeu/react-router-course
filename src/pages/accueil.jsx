import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function AccueilPage() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Link to='/profil'>Aller vers page profil</Link>
      </header>
    </div>
  );
}

export default AccueilPage;
