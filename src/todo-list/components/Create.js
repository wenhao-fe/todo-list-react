import React, { PureComponent } from "react";

export default class Create extends PureComponent {
	state = {
		val: "",
	};
	render() {
		let { addTodos } = this.props;
		let { val } = this.state;
		return (
			<div id="create-todo">
				<input
					type="text"
					placeholder="请输入待办事项"
					id="new-todo"
					value={val}
					onChange={e => {
						this.setState({
							val: e.target.value,
						});
					}}
					onKeyDown={e => {
						if (e.keyCode === 13) {
							if (!val.trim()) {
								alert("请输入待办事项！");
								return;
							}
							addTodos(val);
							this.setState({
								val: "",
							});
						}
					}}
				/>
			</div>
		);
	}
}
