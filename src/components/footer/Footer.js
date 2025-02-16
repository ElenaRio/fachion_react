import styles from './Footer.module.css';
import fImg from './../../img/socials/fb.svg';
import iImg from './../../img/socials/inst.svg';
import lImg from './../../img/socials/in.svg';


function Footer(){
    return(
        <footer>
            <div className='container'>
                <div className={styles.footerWrapper}>
                    <div className={styles.social}>
                        <h3>FASHION</h3>
                        <p>Complete your style with awesome clothes from us.</p>
                        <ul className={styles.footerList}>
                            <li><a href='#!'><img src={fImg} alt='f'/></a></li>
                            <li><a href='#!'><img src={iImg} alt='i'/></a></li>
                            <li><a href='#!'><img src={lImg} alt='l'/></a></li>
                        </ul>
                    </div>
                    <div className={styles.listSocial}>
                        <ul>
                            <li className={styles.listWhite}>Company</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                        <ul>
                            <li className={styles.listWhite}>Quick Link</li>
                            <li>Quick Link</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                        <ul>
                            <li className={styles.listWhite}>Legal</li>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
        
                </div>
            </div>
        </footer>
    )
}

export default Footer;