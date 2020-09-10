import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitems extends Component {
	getStyle = () => {
		return {
			padding: '3px',
			background: this.props.todos.completed ? '#0d1e3d' : 'transparent',
			transform: this.props.todos.completed ? 'skewX(20deg)' : 'none',
			textDecoration: this.props.todos.completed
				? 'line-through'
				: 'none',
			border: 'transparent',
			borderRadius: '10px',
			marginTop: '20px',
			overflowX: 'hidden',
			width: '300px',
			fontSize: '15px',
			borderBottom: '3px solid #0d1e3d',
			color: this.props.todos.completed ? '#d3016a' : '#0d1e3d',
			fontStyle: this.props.todos.completed ? 'italic' : 'normal',
		};
	};

	render() {
		const { id, title } = this.props.todos;

		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.check.bind(this, id)}
					/>{' '}
					{title}
					<button
						onClick={this.props.delTodo.bind(this, id)}
						style={delbtn}
					>
						X
					</button>
				</p>
			</div>
		);
	}
}

Todoitems.propTypes = {
	todos: PropTypes.object.isRequired,
};

const delbtn = {
	background: '#d3016a',
	color: '#040e22',
	border: 'none',
	padding: '3px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
	outline: 'none',
	height: '23px',
	width: '23px',
};

export default Todoitems;
