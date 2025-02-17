import cross from './../../img/icons/cross.svg'

function ButtonDelete({ deleteProduct, id }){
    return (
		<button type='button' onClick={()=>{deleteProduct(id);}}>
			<img src={cross} alt='Delete' />
		</button>
	);
}



export default ButtonDelete;