import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Label = styled.label`
	width: 80%;
	color: #1ef1c6;
	font-size: 10px;
	text-align: left;
	line-height: 24px;
	box-sizing: border-box;
	padding-left: 4px;
`;
const TextInput = styled.input`
	border: none;
	outline: none;
	width: 50%;
	color: #1ef1c6;
	background-color: transparent;
	border: none;
	box-sizing: border-box;
`;
const ColorInput = styled.input`
	appearance: none;
	border: none;
	border-width: 0px;
	outline: none;
	width: 16px;
	height: 16px;
	margin: 0px;
	border-color: ${(props) => props.backGroundColor};
	background: ${(props) => props.backGroundColor};
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
`;

export default function Input({ type, label, value, onChange }) {
	const [inputValue, setInputValue] = useState(null);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	if (type === 'color') {
		return (
			<Row>
				<ColorInput
					onBlur={() => onChange(inputValue)}
					onChange={(e) => setInputValue(e.target.value)}
					backGroundColor={inputValue}
					type={'color'}
					value={'red'}
				></ColorInput>
				<Label>{inputValue}</Label>
			</Row>
		);
	}
	return (
		<TextInput
			onBlur={() => onChange(inputValue)}
			onChange={(e) => setInputValue(e.target.value)}
			type='text'
			value={inputValue}
		></TextInput>
	);
}
