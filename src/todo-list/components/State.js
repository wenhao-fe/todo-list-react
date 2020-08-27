import React, { PureComponent } from "react";
export default class State extends PureComponent {
	state = {};
	render() {
		let { data, removeDone } = this.props;
		let Done = data.filter(item => item.done);
		let unDone = data.filter(item => !item.done);
		return (
			<div id="todo-stats">
				<span className="todo-count">
					<span className="number">{unDone.length}</span>
					<span className="word">项未完成</span>
				</span>
				<span className="todo-clear" style={{ display: Done.length === 0 ? "none" : "block" }}>
					<a
						href="#"
						onClick={() => {
							removeDone();
						}}
					>
						删除<span className="number-done"> {Done.length} </span>项已完成
						<span className="word-done">事项</span>
					</a>
				</span>
			</div>
		);
	}
}
