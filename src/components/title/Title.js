import styles from './Title.module.css';

function Title({title}) {
  return (
    <>
      <h2 className={styles.headerTitle}>
        <span className={styles.highlight}>{title}</span>
      </h2>
    </>
  );
}
export default Title;
