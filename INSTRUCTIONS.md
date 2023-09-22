
## Stretch Features 


- Add a confirmation dialog to the reset and clear button so that when the user clicks,  they are prompted to confirm whether they *really* want to perform that action. (Check out [Sweet Alerts](https://www.npmjs.com/package/@sweetalert/with-react).)



- Currently, if you typo something, it must be removed and re-added to fix it. An edit feature would be a great enhancement. Add an `Edit` button which will have the existing data show in the input form at the top of the page to allow an easier edit. 

  > Hint: For the edit, add a boolean indicator to the component state to indicate if the item is in view or edit mode. 
----------------------------------------------------------------------
$("tbody").on("click", ".updateBtn", toggleUpdate);

let editMode = false;
let editId = null;


const toggleUpdate = (event) => {
  const buttonData = $(event.target).data();

  editMode = true;
  editId = buttonData.id;

  $("#nameInput").val(buttonData.name);
  $("#descriptionInput").val(buttonData.description);
};


const handleSubmit = (event) => {
  let method = editMode ? "PUT" : "POST";

  $.ajax({
    method,
    url: `/route/${method === "PUT" ? editId : ""}`,
    data: {
      name: $("#nameInput").val(),
      description: $("#descriptionInput").val(),
    },
  })
    .then(() => {
      fetchTasks();
      editId = null;
      editMode = false;
      $("#nameInput").val("");
      $("#descriptionInput").val("");
    })
    .catch((err) => console.log("Err in PUT/POST route", err));
};