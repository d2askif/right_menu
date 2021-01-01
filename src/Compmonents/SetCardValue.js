import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './style.css';
import icon from './arrow-down.png';
import Input from './Input';

const leftInset = 15;

const Header = styled.div`
	padding: 16px 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	color: #858d9b;
	font-size: 11px;
`;
const Icon = styled.img`
	src: './arrow-down.png';
	height: 16px;
	width: 16px;
`;
const Title = styled.div`
	width: 80%;
	text-align: left;
`;
const TextRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	padding-left: ${leftInset}%;
`;
const Label = styled.label`
	width: 35%;
	color: #fff;
	font-size: 10px;
	text-align: left;
	line-height: 24px;
`;
const IconHolder = styled.div`
	width: ${leftInset}%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: ${(props) => (props.expanded ? 'rotate(0)deg' : 'rotate(-90)deg')};
`;

const SetCardValue = ({ title }) => {
	const [expanded, setExpanded] = useState(true);

	const handleToggle = () => {
		setExpanded(!expanded);
	};
	const handleOnChange = (value) => {
		console.log('value', value);
	};

	const expandedView = () => {
		return (
			<TextRow>
				<Label>label</Label>
				<Input onChange={handleOnChange} type={'color'} value={'#000'}></Input>
			</TextRow>
		);
	};

	return (
		<div className='container'>
			<Header>
				<IconHolder expanded={expanded} onClick={handleToggle}>
					<Icon src={icon}></Icon>
				</IconHolder>
				<Title>{title}</Title>
			</Header>
			{expanded ? expandedView() : null}
		</div>
	);
};

SetCardValue.propTypes = {};

export default SetCardValue;
