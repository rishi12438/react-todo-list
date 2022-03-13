import React, { Component } from 'react'
import {ReactComponent as ReactEdit} from '../assets/item_edit.svg';
import {ReactComponent as ReactMore} from '../assets/more.svg';
import {ReactComponent as ReactDel} from '../assets/del.svg';
import {ReactComponent as ReactAdd} from '../assets/add.svg';
import MoreBtn from './MoreBtn'
export default class TodoItem extends Component {
    state = {
        overFlowMenuActive: false,
      };
  
      toggleOverflowMenu = () => {
        this.setState((prevState) => ({ overFlowMenuActive: 
           !prevState.overFlowMenuActive }));
      };
  
      closeOverflowMenu = () => {
          this.setState({ overFlowMenuActive: false });
      };
      alert_t = () =>{ 
          alert("hj")
      }
      clickedTrue = () => { 
        this.setState({ clicked: true });        
      }
      myRef2 = React.createRef();
    
      handleClickOutside = e => {
        if (!this.myRef2.current.contains(e.target)) {
            console.log("clicjked list")
          this.setState({ clicked: false });
        }
        else{ 
            this.setState({ clicked: true });
        }
      };
      handleClickInside = () => this.setState({ clicked: false });


      
    render() {
        console.log("hi1ii1i1",this.state.clicked)
        var {id , title, handleDelete, handleEdit, handleDoneTask, completed,blank,handleInputOn} = this.props
        var more_button  = <MoreBtn  overFlowMenuActive={this.state.overFlowMenuActive} 
                                
                        key={id}
                        id={id}
                        title={title}
                        completed={completed}
                        handleDelete={() => handleDelete(id)}
                        handleEdit={() => handleEdit(id)}
                        handleDoneTask={handleDoneTask}
                    />
        if(blank){ 
            title = "Create a list"
            more_button = <div onClick={handleInputOn}><ReactAdd /></div>
       
        }
        
        return (
            <li onClick={this.clickedTrue}  className={this.state.clicked? "list-group-item list_clicked d-flex  list_margin" :"list-group-item d-flex list-checkhover  list_margin"}>
                <div className="inline li_title" >
                    <h6 className={` mb-0 align-middle ListBodyText`}>
                        {title}
                    </h6>
                </div>
                <div className=" listImageBox inline" data_id={id}>                    
                                
                        {more_button}
                    
                </div>
            </li>
        )
    }
}
