import styles from './Download.module.css';
import dowImg from './../../img/images/vouchers-img.png';
import appStoreImg from './../../img/icons/app-store.png';
import goolePlayImg from './../../img/icons/google-play.png'

function Download(){
    return(
        <section className={styles.download}>
        <div className="container">
          <div className={styles.downloadContent}>
            <div className={styles.downloadText}>
              <h2 className={styles.downloadTitle}>
              DOWNLOAD APP & GET THE VOUCHER!
              </h2>
              <p className={styles.downloadDesc}>
              Get 30% off for first transaction using
              Rondovision mobile app for now.
              </p>
              <div className={styles.downloadPlay}>
                <a href='#!'>
                <img src={appStoreImg} alt="appStore"/></a>
                <a href='#!'>
                <img src={goolePlayImg} alt="googlePlay"/></a>
              </div>
            </div>
            <div className={styles.downloadImg}>
              <img src={dowImg} alt="style" />
            </div>
          </div>
        </div>
      </section> 
    )
}

export default Download;