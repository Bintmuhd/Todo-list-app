import React, { Component } from 'react';

export class AddTodo extends Component {
        state ={
            title: '', 
        }

        onSubmit = (e) => {
            e.preventDefault();
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        }

        onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 

        


    render() {
        return(
            <form className="form"
                onSubmit={this.onSubmit} style={{display: 'flex', margin: '10px'}}>
                <input type="text" 
                name="title" 
                placeholder="Add Items..." 
                style={{flex: '10', outline: 'none', padding: '5px', backgroundColor: '#ef96c5', height: '40px', maxWidth: '1000px', borderRadius: '25px', border: 'transparent', color: '#040e22' }} 
                value={this.state.title} 
                onChange={this.onChange} />
                

                <input type="submit" 
                value="Add New" 
                className="btn" 
                style={{flex: '1', height: '40px'}} />
            </form>
        )
    }
}

export default AddTodo