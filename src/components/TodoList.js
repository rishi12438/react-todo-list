import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks,
            currentInput, 
            handleInputOn
        } = this.props

        return (
            <Fragment>
                {
                currentInput ? "" : items.length  === 0 ? 
                <div className="bigBox bigBox-body my-3">
                <div className='header_container'>
                   <ul className="list-group my-5">
                            <TodoItem
                                key={null}
                                id={null}
                                title={null}
                                completed={null}
                                blank = {true}
                                handleDelete={() => handleDelete(null)}
                                handleEdit={() => handleEdit(null)}
                                handleDoneTask={null}
                                handleInputOn = {handleInputOn}
                            />

                       
                   </ul>

               </div>
           </div> :
                <div className="bigBox bigBox-body my-3">
                     <div className='header_container'>
                        <ul className="list-group my-5">
                            {
                                items.map(item => {
                                    return (
                                        <TodoItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            completed={item.completed}
                                            blank = {false}
                                            handleDelete={() => handleDelete(item.id)}
                                            handleEdit={() => handleEdit(item.id)}
                                            handleDoneTask={handleDoneTask}
                                            handleInputOn = {handleInputOn}
                                        />
                                    )
                                })
                            }

                            
                        </ul>

                    </div>
                </div>
                }
            </Fragment>
        )
    }
}
