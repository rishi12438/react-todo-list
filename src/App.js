import React, { Component } from 'react'
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Inter']
  }
});

class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			items: [],
			itemsToShow: "all",
			id: uuid(),
			item: '',
			editItem: false,
			input:false
		}
	}

	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleInputOn = () =>{ 
		this.setState({
			input:true
		})

	}
	handlenInputOff = () =>{ 
		this.setState({
			input:false
		})
	}

	
	handleSubmit = event => {
		event.preventDefault()
		var updatedItems = this.state.items
		if(this.state.editItem){ 
			
			const selectedItemIndex = this.state.items.findIndex(item => item.id === this.state.id);
			
			updatedItems[selectedItemIndex].title =  this.state.item
			console.log(this.state.items)
		}
		else { 
			const newItem = {
				id: this.state.id,
				title: this.state.item,
				completed: false
			}
			var updatedItems = [...this.state.items, newItem]	
		}
		

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				editItem: false, 
				input: false
			})
		}
	}

	updateTodosToShow = string => {
		this.setState({
			itemsToShow: string
		});
	};

	handleDoneTask = (id, completed) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

	handleCancel = () =>{ 
		
		this.setState({
				id: uuid(),
				item: '',
				editItem: false,
				input:false
		})
		
	}
	handleDelete = id => {
		console.log("clicked")
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems,
			editItem: false
		})
	}

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		const selectedItem = this.state.items.find(item => item.id === id)
		
		this.setState({
			id: id,
			item: selectedItem.title,
			editItem: true,
			input:true
		})
	}

	handleDeleteDoneTasks = () => {
		const filteredItems = this.state.items.filter(item => item.completed === false)

		this.setState({
			items: filteredItems
		})
	}

	clearList = () => {
		this.setState({
			items: []
		})
	}

	render() {
		let items = []
		items = this.state.items;
		
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleCancel={this.handleCancel}
							handleInputOn={this.handleInputOn}
							currentInput = {this.state.input}
						/>
						<TodoList
							items={items}
							filterDoneTasks={this.filterDoneTasks}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleDoneTask={this.handleDoneTask}
							handleDeleteDoneTasks={this.handleDeleteDoneTasks}
							updateTodosToShow={this.updateTodosToShow}
							currentInput = {this.state.input}
							handleInputOn= {this.handleInputOn}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
