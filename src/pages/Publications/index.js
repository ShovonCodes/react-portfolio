import React from 'react';
import Title from '../common/Title';
import PublicationItem from './Item';

const Publications = () => {
	return (
		<div className='page' id='publications'>
			<Title>Publications</Title>

			<PublicationItem
				date={'November 5, 2023'}
				title={
					'BanMANI: A Dataset to Identify Manipulated Social Media News in Bangla'
				}
				company={'Publisher: BUCC 2023, 16th Workshop on Building and Using Comparable Corpora'}
				url='https://arxiv.org/abs/2311.02570' />
			
			<PublicationItem
				date={'September 16, 2023'}
				title={
					'Investigating Subtler Biases in LLMs: Ageism, Beauty, Institutional, and Nationality Bias in Generative Models'
				}
				company={'Publisher: BUCC 2023, 16th Workshop on Building and Using Comparable Corpora'}
				url='https://arxiv.org/abs/2309.08902' />
			
			<PublicationItem
				date={'September 8, 2021'}
				title={
					'An Intense Investigation on Deep and Traditional Machine Learning Approaches for Better Sentiment Classification'
				}
				company={'Publisher: IEEE, International Conference on Automation, Control and Mechatronics'}
				url='https://ieeexplore.ieee.org/document/9528217' />

			<PublicationItem
				date={'June 7, 2020'}
				title={
					'RECOGNITION OF HANDWRITTEN BANGLA NUMBER USING MULTI LAYER CONVOLUTIONAL NEURAL NETWORK'
				}
				company={'Publisher: IEEE, Tensymp 2020'}
				url='https://ieeexplore.ieee.org/abstract/document/9230703' />
		</div>
	);
};

export default Publications;
