import "./ShoppingList.css";
import ListItem from "../ListItem/ListItem"

export default function ShoppingList ({ itemList, handleDelete, updateItem, editMode, setEditMode}) {

    return(
        <div className="container">
            {itemList.map(item => 
                 <ListItem key= {item.id} editMode={editMode} setEditMode={setEditMode} item={item} handleDelete={handleDelete} updateItem={updateItem} />
            )}
       </div>
    )
}// end of return


