import React, { Component } from 'react'


export default class Input extends Component{
  constructor(props) {
    super(props);

    this.state = {
      active: props.active || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label"
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const {item, handleChange, handleSubmit} = this.props  
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active ) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <input
        placeholder="List Title"
          id={1}
          type="text"
          value={item}
          onChange={handleChange}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() =>  this.setState({ active: false })}
          onBlur={() => this.setState({ active: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}
