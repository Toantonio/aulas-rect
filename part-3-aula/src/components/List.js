import Item from "./Item.js"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='ferrari' ano_Lancamento={1985}/>
            <Item marca='fiat' ano_Lancamento={1952}/>
            <Item marca='renault' ano_Lancamento={1971}/>
        </ul>
        </>
    )
}
export default List