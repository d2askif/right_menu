/* eslint-disable no-labels */
import React, { Component } from 'react';
import Lottie from 'lottie-web';
import toggleAnimation from './isometric-smartphone.json';

export default class LottieAnimation extends Component {
	state = {};

	constructor(props) {
		super(props);
		// eslint-disable-next-line no-undef
		this.state = { isToggled: false, isStopped: false };
		this._lottieHeartRef = React.createRef();
	}
	onRefLottie = (ref) => {
		this._lottieHeartRef = ref;

		if (ref) {
			this._lottieHeartRef.play();
		}
	};

	onMouseEnter = () => {
		//this._lottieHeartRef && this._lottieHeartRef.current.play();
		console.log('animate');
		//this.setState((state) => ({ ...state, isStopped: false }));
		//this._lottieHeartRef.current.play();
	};

	onMouseLeave = () => {
		//this._lottieHeartRef && this._lottieHeartRef.current.pause();
		console.log('stop');
		this.setState((state) => ({ ...state, isStopped: true }));
	};
	componentDidMount() {
		Lottie.loadAnimation({
			container: document.getElementById('#conteiner-lottie'),
			path: toggleAnimation,
			loop: true,
			autoplay: true,
		});
	}

	render() {
		return (
			<div id='conteiner-lottie'>
				{/* <Lottie
					height={200}
					direction={this.state.isToggled ? 1 : -1}
					options={{
						animationData: toggleAnimation,
						loop: true,
						autoplay: true,
					}}
					ariaLabel='button'
					ref={this.onRefLottie}
				/> */}

				<lottie-interactive
					path='toggleAnimation'
					interaction='click'
				></lottie-interactive>
			</div>
		);
	}
}
