import './App.css';
import LottieAnimationToggle from './Compmonents/toggleLottie';
import LottieAnimationLoop from './Compmonents/loopLottie';

function App() {
	return (
		<div className='App'>
			app
			<LottieAnimationToggle
				width={400}
				animationFile={require('./Compmonents/toggleLottie/isometric-smartphone')}
			></LottieAnimationToggle>
			<LottieAnimationLoop
				width={400}
				animationFile={require('./Compmonents/toggleLottie/isometric-smartphone')}
			></LottieAnimationLoop>
		</div>
	);
}

export default App;
