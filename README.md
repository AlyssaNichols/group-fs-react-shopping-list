# React Shopping List

Isn't it just the worst when you come back from grocery shopping only to realize you forgot the most important thing! We're going to make a simple shopping list app to solve that problem. 

## Technologies

- *SQL
- *Express
- *React
- *Node

## Create database

We want to store a list of items to buy in a database, so we can build up our list over a period of time and then go shopping. 

There should be a form at the top of the page where we can add new items to the list.

Each item can have a:

- Name - text, allow up to 80 characters (required)
- Quantity - allow for decimal numbers (required)
- Unit - text, allow up to 20 characters (optional)

When the page first loads, all the existing items should be displayed with the quantity & unit combined together for display. Each item should also have an option to remove it from the list or mark it as purchased. Once purchased, the buttons should be hidden and the item should show as "Purchased". 

Items should initially appear alphabetically, but as items are marked purchased they should sort to the end of the list.

The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. The `Clear` button should remove all items from the list, deleting them from the database.

#### Hint for Marking as purchased/removing item
>> If you've set up your components as we have shown, you should have an `Item` Component. That item should have access to every property of the item *object* -- this will be critical to successfully calling a PUT or DELETE route with the id (`/:id`). 

### Sample Wireframe

![wireframe](wireframe.jpg)

### Tips for Teams