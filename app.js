const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
const morgan = require('morgan');
app.use(morgan('dev'));
const TodoItems = [ 
{
	todoItemId: 0,
	name: 'an item',
	priority: 3,
	completed: false
},
{
	todoItemId: 1,
	name: 'another item',
	priority: 2,
	completed: false
},
{
	todoItemId: 2,
	name: 'a done item',
	priority: 1,
	completed: true
}
];
app.get('/', (req, res) => {
	res.json({status: 'ok'})
})
app.get('/api/TodoItems', (req, res) => {
	res.json(TodoItems);
})
								
 //a single ToDoItem.  If item has a matching ToDoItemID overwrite the existing item .
app.post('/api/TodoItems/', (req, res) => {
	let itemIndex = TodoItems.findIndex(todo => todo.todoItemId == req.body.todoItemId);
	if (itemIndex == -1){
		TodoItems.push(req.body);
	}else{
		TodoItems.splice(itemIndex, 1, req.body);
	}
	res.status(201).json(req.body);
});
app.get('/api/TodoItems', (req, res) =>{
	let itemIndex = TodoItems.findIndex(todo => todo.todoItemId === req.body.todoItemId);
	if(itemIndex == req.body.todoItemId);
	res.status(200).json(req.body);
});
//Look up course to delete
//no course, return 404
//Delete
//return deleted course

app.delete('/api/TodoItems/:id', (req, res) => {
	let {id} = req.params;
	let itemIndex= TodoItems.findIndex((todoItem) => todoItem.todoItemId == id);
		if(itemIndex == -1) {
		res.status(404).json({error: 'User not Found'});
	}else{
		let deletedItem = TodoItems.splice(itemIndex, 1)
		res.status(200).json(deletedItem[0])
	}
})
	
app.get('/api/TodoItems/:id', (req, res) =>{
	console.log(req);
	console.log(req.params);
	let singleTodo = TodoItems.find((todoItem) => todoItem.todoItemId == req.params.id)
	res.status(200).json(singleTodo);
})
	
		
		
	


// add your code here*/

module.exports = app;
