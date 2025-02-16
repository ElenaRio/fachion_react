import styles from './Contact.module.css';
import Title from '../title/Title';

function Contact(){
    return(
        <section className={styles.contact}>
            <div className='container'>
                <Title title="Contact Us"/>
                <p className={styles.contactDesc}>We’re here to help! Whether you have questions about our products, need help with an order, or just want to say hello – feel free to reach out.</p>
                <div className={styles.wrapper}>
                    <div className={styles.contactSection}>
                        <h3>📍 Our Address:</h3>
                        <ul>
                            <li>FashionTrend Store</li>
                            <li>123 Style Avenue,</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                    <div className={styles.contactSection}>
                    <h3>📞 Phone:</h3>
                        <ul>
                            <li>+1 (123) 456-7890</li>
                        </ul>
                    </div>
                    <div className={styles.contactSection}>
                    <h3>📧 Email:</h3>
                        <ul>
                            <li>support@fashiontrend.com</li>
                        </ul>
                    </div>
                    <div className={styles.contactSection}>
                    <h3>🕒 Working Hours:</h3>
                        <ul>
                            <li>Monday – Friday: 9:00 AM – 8:00 PM</li>
                            <li>Saturday – Sunday: 10:00 AM – 6:00 PM</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;