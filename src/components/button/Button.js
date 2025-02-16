import styles from './Button.module.css'
import { NavLink } from 'react-router-dom';

function Button({className, withBefore}){
    return(
      <div className={`${styles.promoBtnWrapper} ${withBefore ? styles.withBefore : ''} ${className || ''}`}>
              
              <NavLink to="/catalogue" className={styles.promoBtn}> Shop Now</NavLink>
              
            </div>

    )
}
 export default Button;