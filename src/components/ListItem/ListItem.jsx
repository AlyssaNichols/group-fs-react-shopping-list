export default function ListItem({ item, updateItem, handleDelete, editMode, setEditMode}) {

  const handleEdit = () => {
    console.log(item.id)
        };

  return ( 
    <div className="card">
      <p>{item.name}</p>
      <p>{item.quantity} {item.unit}</p>
      <button className="editButton" onClick={() => handleEdit(item.id)}>Edit</button>
      <br />
      <div>
      {item.purchased ? (
        <span style={{backgroundColor:"slategrey", borderRadius:"3px"}}>Purchased</span>
      ) : (
        <div>
          <button className="buyBtn" onClick={() => updateItem(item.id)}>Buy</button>
          <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Remove</button>
        </div>)}
    </div>
    </div>
  );
  
}

