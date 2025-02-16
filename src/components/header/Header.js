import styles from './Header.module.css';
import logoImg from '../../img/icons/logo.svg';
import Nav from '../navigation/Nav.js';

function Header(){
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerRow}>
                    <div className={styles.headerLogo}>
                        <img src={logoImg} alt='Logo'/>
                        <span className={styles.logoText}>FASHION</span>
                    </div>
                    <nav >
                        <Nav/>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header;