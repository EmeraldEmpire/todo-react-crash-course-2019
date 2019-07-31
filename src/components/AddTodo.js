import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  // dynamically bind input and state properties
  bindInput = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (title, e) => {
    e.preventDefault();
    this.props.addTodo(title);
    this.setState({ title: '' });
  }
  
  render() {
    const { title } = this.state;
    return (
      <form 
        onSubmit={this.onSubmit.bind(this, title)}
        style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add Todo"
          style={{ flex: '10', padding: '5px' }}
          value={title}
          onChange={this.bindInput} />

        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{ flex: '1' }} />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
