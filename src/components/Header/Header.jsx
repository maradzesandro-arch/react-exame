import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import useToggle from '../Toggle/UseToggle';
import { UserContext } from '../../context/UserContext';

export default function Header() {

    const { user } = useContext(UserContext);

    const [show, toggle] = useToggle()

    return (
        <header className="site-header">
            <h1 className="site-title">წიგნების კატალოგი</h1>
            <h2>მკითხველი {user}</h2>
            <nav className="main-nav">
                <Link className="nav-link" to="/">მთავარი</Link>
                <Link className="nav-link" to="/books">წიგნები</Link>
                <Link className="nav-link" to="/contact">კონტაქტი</Link>
            </nav>


            {show && <p>კეთილი იყოს თქვენი მობრძანება ბიბლიოთეკაში</p>}

            <button onClick={() => toggle()}> დააჭირე </button>


        </header>
    )

}