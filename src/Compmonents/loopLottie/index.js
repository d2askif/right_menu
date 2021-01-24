import lottie from 'lottie-web';
const React = require('react');

class LottieToggleIcon extends React.Component {
	componentDidMount() {
		const { animationData, rendererSettings = {} } = this.props;

		this.setState(
			{
				options: {
					container: this.el,
					renderer: 'svg',
					loop: true,
					autoplay: true,
					segments: true,
					animationData,
					rendererSettings,
				},
				hasChanged: false,
			},
			() => {
				this.anim = lottie.loadAnimation(this.state.options);
				this.playSegments();
				this.addEventListener();
			}
		);
	}
	addEventListener() {}

	playSegments() {
		this.anim.play();
	}

	render() {
		return <div ref={(el) => (this.el = el)} />;
	}
}

class LottieLoopComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			direction: -1,
		};
	}

	toggleDirection = () => {
		const nextDirection = this.state.direction < 0 ? 1 : -1;
		this.setState({
			direction: nextDirection,
		});
	};

	render() {
		const { direction } = this.state;
		const { height, width, animationFile } = this.props;
		return (
			<div
				style={{ width, height, background: 'black', color: 'white' }}
				onClick={this.toggleDirection}
			>
				<LottieToggleIcon animationData={animationFile} direction={direction} />
			</div>
		);
	}
}

export default LottieLoopComponent;
