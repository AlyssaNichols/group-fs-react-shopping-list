# React Shopping List

Isn't it just the worst when you come back from grocery shopping only to realize you forgot the most important thing! We're going to make a simple shopping list app to solve that problem. 

## Technologies

- *SQL
- *Express
- *React
- *Node

## Create database
 
There is information created for a database in the databse.sql file.
This database contains Items and the quantity, unit, and purchase status of each item.

Each item can have a:

- Name - text, allow up to 80 characters (required)
- Quantity - allow for decimal numbers (required)
- Unit - text, allow up to 20 characters (optional)

## Functionality
When the page first loads, all the existing items are displayed with the quantity & unit combined together for display. Each item also has an option to remove it from the list or mark it as purchased. Once purchased, the buttons are hidden and the item is shown as "Purchased". 

Items initially appear alphabetically, but as items are marked purchased they sort to the end of the list.

The `Reset` button clears the purchased status from all items, allowing the list to be re-used. The `Clear` button removes all items from the list, deleting them from the database.

