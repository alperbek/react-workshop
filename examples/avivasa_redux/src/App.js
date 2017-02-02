import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function TodoHeader() {

    return <header id="header">
	<h1>todos</h1>
	<input id="new-todo" placeholder="What needs to be done?" autoFocus=""/>
	</header>
}

function TodoFooter(props) {

    return 	    <footer id="footer" style={{ display: 'block'}}>
	<span id="todo-count"><strong>{props.count}</strong> items left</span>
	<ul id="filters">
	<li>
	<a className={props.activeFilter == 'All' ? "selected" : ""} href="#/">All</a>
	</li>
	<li>
	<a className={props.activeFilter == 'Active' ? "selected" : ""} href="#/active">Active</a>
	</li>
	<li>
	<a className={props.activeFilter == 'Completed' ? "selected" : ""}href="#/completed">Completed</a>
	</li>
	</ul>

    </footer>;

}

function TodoListItem(props) {
    return <li>
	<div className="view">
	<input className="toggle" type="checkbox" checked={props.item.completed}/>
	<label>{props.item.description}</label>
	<button className="destroy"></button>
	</div>
	<input className="edit" value={props.item.description}/>
	</li>;

}
function TodoList(props) {


    return  <ul id="todo-list">

    {props.items.filter(function (item) {
	if (props.activeFilter == 'All') {
	    return true;
	}

	if (props.activeFilter == 'Active') {
	    if (item.completed) {
		return false;
	    } else {
		return true;
	    }

	}

	if (props.activeFilter == 'Completed') {
	    if (item.completed) {
		return true;
	    } else {
		return false;
	    }

	}


    }).map(item => <TodoListItem item={item}/>)}
    </ul>;
}

    export default class TodoApp extends Component {

	constructor() {
	    super();
	    this.state = {
		activeFilter: 'All',
		items: [
		    {description: 'Buy tomato', completed: false},
		    {description: 'Buy potato', completed: false},
		    {description: 'Fatura ode', completed: false},
		    {description: 'Buy apple', completed: false},
		    {description: 'Wash the dishes', completed: true}]
	    };
	}

	render() {


	    return <section id="todoapp">


		<TodoHeader/>
		<section id="main" style={ { display: 'block'}     }>
		<input id="toggle-all" type="checkbox"/>
		<label htmlFor="toggle-all">Mark all as complete</label>
		<TodoList
	    activeFilter={this.state.activeFilter}
items={this.state.items}/>
		</section>

		<TodoFooter
	    activeFilter={this.state.activeFilter}
	    count={this.state.items.filter(item => !item.completed).length}/>
		</section>;

	}
    }
