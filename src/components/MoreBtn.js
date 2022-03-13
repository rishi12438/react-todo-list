import React, { Component } from 'react'
import {ReactComponent as ReactEdit} from '../assets/item_edit.svg';
import {ReactComponent as ReactMore} from '../assets/more.svg';
import {ReactComponent as ReactMoreClicked} from '../assets/clicked_more.svg';
import {ReactComponent as ReactDel} from '../assets/del.svg';

export default class MoreBtn extends Component {
    
    state = {
        clickedOutside: false, 
        currently_on: false 
      };
    
      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
    
      myRef = React.createRef();
    
      handleClickOutside = e => {
        if (!this.myRef.current.contains(e.target)) {
          this.setState({ clickedOutside: true });
          this.setState({ currently_on: false });
        }
        else{ 
            this.setState({ clickedOutside: false });
            this.setState({ currently_on: true});
        }
      };
      handleClickInside = () => this.setState({ clickedOutside: false });

    render() {
        console.log("click outside",this.state.currently_on)
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed} = this.props
        var reactMoreVal = this.state.currently_on ? <ReactMoreClicked/>:<ReactMore/> ; 
        return (
            
            <div ref={this.myRef} >
            <div className="dropdown-container" tabindex="-1">
            <div className="three-dots" >
            {reactMoreVal}
            </div>
            <div className={this.state.currently_on ? 'dropdown' : 'dropdown hidden'} >
                <div className='dropdown_elements' onClick={handleEdit}>
                    <div className='inline dropdown_image'>
                        <ReactEdit/>
                    </div>
                    Edit
                </div>
               <div className='dropdown_elements ' onClick={handleDelete}> 
                    Delete
                    <div className='inline dropdown_image'>
                        <ReactDel/>
                    </div>
                </div>
                
            </div>
            </div>
            <div className={` popup ${this.props.overFlowMenuActive
                ? "expand"
                : "close"}`}>
                <div key="1">
                    
                    </div>
                </div>
            </div>
        )
    }
}
