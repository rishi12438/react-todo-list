import React, { Component } from 'react'

import Input from './Input'
import  {ReactComponent as ReactBack} from '../assets/back.svg';

import {ReactComponent as ReactEdit} from '../assets/edit.svg';

export default class AddList extends Component {
    render() {
        const {item, handleChange, handleSubmit,handleCancel} = this.props  
        
        return (
            <div className="bigBox bigBox-body my-3">
                
                
                <div className='header_container'>
                    
                    <div className="AddListText inline" onClick={handleCancel}>
                        <ReactBack />
                        <div className='cancelText'>Cancel</div> 
                    </div>
                    <div className='AddListDone inline' onClick={handleSubmit}>
                        Done
                    </div> 
                </div>
                <div className='header_container'> 
                    <Input id={1}
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    label="Field label"
                    active={false}/>    
                </div>
       
            </div>
        )
    }
}
