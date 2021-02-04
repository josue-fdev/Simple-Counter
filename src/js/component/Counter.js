import React from "react";

export class Counter extends React.Component {
	constructor() {
		super();
		this.state = { time: {}, seconds: 0 };
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countUp = this.countUp.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));
		let hora1 = Math.floor10(hours, 1);
		let hora2 = hours - Math.floor10(hours, 1);

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);
		let min1 = Math.floor10(minutes, 1);
		let min2 = minutes - Math.floor10(minutes, 1);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);
		let sec1 = Math.floor10(seconds, 1);
		let sec2 = seconds - Math.floor10(seconds, 1);

		let tiempo = {
			h1: hora1,
			h2: hora2,
			m1: min1,
			m2: min2,
			s1: sec1,
			s2: sec2
		};
		return tiempo;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		this.timer = setInterval(this.countUp, 1000);
	}

	countUp() {
		let seconds = this.state.seconds + 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds
		});
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div className="d-flex justify-content-center flex-wrap mt-15">
				m: {this.state.time.m} s: {this.state.time.s}
				<div style={estiloCaja1}>{this.state.time.h1}</div>
				<div style={estiloCaja1}>{this.state.time.h2}</div>
				<div style={estiloCaja2}>H</div>
				<div style={estiloCaja1}>{this.state.time.m1}</div>
				<div style={estiloCaja1}>{this.state.time.m2}</div>
				<div style={estiloCaja2}>M</div>
				<div style={estiloCaja1}>{this.state.time.s1}</div>
				<div style={estiloCaja1}>{this.state.time.s2}</div>
				<div style={estiloCaja2}>S</div>
				<button onClick={this.startTimer}>Start</button>
				<button onClick={this.stopTimer}>Stop</button>
			</div>
		);
	}
}

const estiloCaja1 = {
	boxShadow: "0px 0px 5px gray",
	border: "1px solid gray",
	color: "white",
	borderRadius: "10px",
	height: "15vh",
	width: "15vh",
	margin: "5px",
	fontSize: "12vh",
	padding: "0px",
	textAlign: "center"
};
const estiloCaja2 = {
	color: "white",
	height: "15vh",
	width: "12vh",
	margin: "5px",
	fontSize: "12vh",
	padding: "0px",
	textAlign: "center"
};
