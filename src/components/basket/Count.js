import styles from './Count.module.css';
import upIcon from './../../img/icons/icon-up.svg';
import downIcon from './../../img/icons/icon-down.svg';

function Count({ count, increase, decrease, changeValue, id }){
    return (
		<div className={styles.countContainer}>
			<div className={styles.box}>
				<input onChange={(e)=>{changeValue(id, +e.target.value)}} type='number' className={styles.countInput} min='1' max='100' value={count} />
			</div>
			<div className={styles.controls}>
				<button type='button' className={styles.countUP} onClick={()=>{increase(id)}}>
					<img src={upIcon} alt='Increase' />
				</button>
				<button type='button' className={styles.countDOWN} onClick={()=>{decrease(id)}}>
					<img src={downIcon} alt='Decrease' />
				</button>
			</div>
		</div>
	);
}
export default Count;