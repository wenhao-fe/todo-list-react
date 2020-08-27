import React, { PureComponent } from "react";
import "./index.css";
import Title from "./components/Title";
import Create from "./components/Create";
import Todos from "./components/Todos";
import State from "./components/State";

export default class app extends PureComponent {
	state = {
		data: [],
	};
	changeCheck = (id, done) => {
		let { data } = this.state;
		data.map(item => {
			if (item.id === id) {
				item.done = done;
			}
		});
		this.setState({
			data: data.map(item => ({ ...item })),
		});
	};
	addTodos = text => {
		let { data } = this.state;
		data.unshift({
			id: data.length + 1,
			text,
			done: false,
		});
		this.setState({
			data: [...data],
		});
	};
	editText = (id, text) => {
		let { data } = this.state;
		data.map(item => {
			if (item.id === id) {
				item.text = text;
			}
		});
		this.setState({
			data: data.map(item => ({ ...item })),
		});
	};
	remove = id => {
		let { data } = this.state;
		data = data.filter(item => item.id !== id);
		this.setState({
			data,
		});
	};
	removeDone = () => {
		let { data } = this.state;
		data = data.filter(item => !item.done);
		this.setState({
			data,
		});
	};
	render() {
		let { data } = this.state;
		return (
			<div id="todoapp">
				<Title />
				<div className="content">
					<Create addTodos={this.addTodos} />
					{data.length === 0 ? "" : [<Todos key="a" listData={data} changeCheck={this.changeCheck} editText={this.editText} remove={this.remove} />, <State key="b" data={data} removeDone={this.removeDone} />]}
				</div>
			</div>
		);
	}
}
