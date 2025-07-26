//import PropTypes from 'prop-types';

/*function List(props){
    
    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); ALPHA
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); REVERSE ALPHA
    //fruits.sort((a,b)=> a.cal - b.cal); NUMERIC
    //fruits.sort((a,b)=> b.cal - a.cal);  REVERSE NUMERIC
    //const lowCal=fruits.filter(fruit=>fruit.cal<30);
    const itemList=props.items;


    const listItems=itemList.map((item)=> 
        <li key={item.id}>{item.name} &nbsp;
        <b>{item.cal}</b></li>
    );
    return <>
           <h2>{props.category}</h2>
           <ol>{listItems}</ol>
           </>


}

List.defaultProps={
    items:[],
    category:"Category",

};

List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        cal: PropTypes.number

    })),
}
export default List
*/