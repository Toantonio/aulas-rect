import PropsTypes from 'prop-types'

function Item({marca, ano_Lancamento}){
    return(
        <>
        <li>
            {marca} - {ano_Lancamento}
        </li>
        </>
    )
}

Item.propsTypes = {
    marca: PropsTypes.string,
}
export default Item