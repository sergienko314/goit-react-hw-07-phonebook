
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';



const Filter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const filterInput = e => dispatch(filterContacts(e.target.value))

    return (<div>
        <h3>Find contact by name</h3>
        <input onChange={(e)=>filterInput(e)} value={filter} type="text" name="" id="" />
    </div> );
}
 
export default Filter;


