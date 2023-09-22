import React, { useState } from 'react';

export default function InputForm( { handleClear, resetList, addItem, itemName, setItemName, itemUnit, setItemUnit, itemQuantity, setItemQuantity} ){

  // function deleteSwal(event) {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, this list will be gone forever!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((confirm) => {
  //     console.log(confirm);
  //     if (confirm) {
  //       handleClear(event);
  //       console.log("testing delete swal!");
  //       swal("The List Item has been removed", {
  //         icon: "success",
  //       });
  //     } else {
  //       swal("You can still shop for this one in the future!");
  //     }
  //   });
  // }
return(<>
<div className="form">
<h2>Add a New Item</h2>
      <form onSubmit={addItem}>
        <label>Item </label>
        <input
        required
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <br />
        <label>Quantity </label>
        <input
        required
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.value)}
        />
        <br />
        <label>Unit </label>
        <input
          type="text"
          placeholder="Unit"
          value={itemUnit}
          onChange={(event) => setItemUnit(event.target.value)}
        />
        <br />
        <button className="submit" type="submit">Add Item</button>
        </form>
        <h2> Shopping List </h2>

        <button className="resetButton" onClick={() => resetList()}>Reset</button>
        <button className="clearButton" onClick={() => handleClear()}>Clear</button>
</div>

 </>)
}
