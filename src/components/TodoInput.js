import React, { Component } from 'react'
import dp from '../assets/profile.png';
import AddList from './AddList'
import {ReactComponent as ReactEdit} from '../assets/edit.svg';
export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, handleCancel,handleInputOn,currentInput} = this.props  
        var toRender = <div className="bigBox bigBox-body my-3">
                
                        
                        <div className='header_container'>
                            <i
                                style={{
                                borderRadius: "50%",
                                width: 40,
                                height: 40,
                                display: "block",
                                background: `url(${dp})`,
                                backgroundPosition: "center",
                                backgroundSize: "auto 40px"
                                }}
                                className="inline"
                            />
                            <div className="ListText inline">Lists</div>
                            <div className='imageBox inline' onClick={handleInputOn}>
                                <ReactEdit />
                            </div> 
                        </div>
                        

                        

                    </div>
        if(currentInput){ 
            toRender = <AddList item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}/>

        }
        return (
            
            toRender
        )
    }
}
