import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

export function Navbar(){

    const {switchTheme, theme} = useContext(ThemeContext);

    return(
        <div className={theme === 'light' ? 'container-fluid navbar-shadow ' : 'container-fluid navbar-shadow bg-lightdark text-white'}>
            <div className='container'>
                <nav className="navbar py-3">
                    <h3 className="fw-bold">Where in the world?</h3>
                    <div onClick={switchTheme} className='theme-toggle'>
                    {theme === 'light' ? <div className='d-flex gap-3'><FontAwesomeIcon icon={farMoon} className='fs-4' />
                    <p>Dark Mode</p></div> :  <div className='d-flex gap-3'><FontAwesomeIcon icon={faMoon} className='fs-4' style={{}} />
                    <p>Dark Mode</p></div>}
                    </div>
                </nav>
            </div>
        </div>
    );
}