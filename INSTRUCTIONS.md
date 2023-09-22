
## Stretch Features 


- Add a confirmation dialog to the reset and clear button so that when the user clicks,  they are prompted to confirm whether they *really* want to perform that action. (Check out [Sweet Alerts](https://www.npmjs.com/package/@sweetalert/with-react).)


- Improve the styling of the page
  - When items are purchased, grey them out. 
  - Make the buttons more UX friendly. For example, red for remove, but green or blue for save & buy.
  - Add a icons to improve the display, for example a check mark for purchased, a trash can for remove, etc. (Check out [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).)

- Currently, if you typo something, it must be removed and re-added to fix it. An edit feature would be a great enhancement. Add an `Edit` button which will have the existing data show in the input form at the top of the page to allow an easier edit. 

  > Hint: For the edit, add a boolean indicator to the component state to indicate if the item is in view or edit mode. 
