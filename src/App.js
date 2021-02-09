import './App.css';
import React from 'react';
import axios from 'axios';
function App() {
	const auth = async () => {
		try {
			const res = await axios.get('/authenticate', {
				auth: { username: 'admin2', password: '123' },
			});

			if (res.data.screen !== undefined) {
				console.log(res.data.screen);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const readCookie = async () => {
		try {
			const res = await axios.get('/read-cookie');

			if (res.data.screen !== undefined) {
				console.log(res.data.screen);
			}
		} catch (e) {
			console.log('error');
			console.log(e);
		}
	};

	React.useEffect(() => {
		readCookie();

		return () => axios.get('/clear-cookie');
	}, []);
	const [open, setOpen] = React.useState(false);
	return (
		<div className='App'>
			<button className='base' tabIndex='0' onClick={auth}>
				Button
			</button>
			{/* <LottieAnimationToggle
				width={400}
				animationFile={require('./Compmonents/toggleLottie/isometric-smartphone')}
			></LottieAnimationToggle>
			<LottieAnimationLoop
				width={400}
				animationFile={require('./Compmonents/toggleLottie/isometric-smartphone')}
			></LottieAnimationLoop> */}
		</div>
	);
}

export default App;
