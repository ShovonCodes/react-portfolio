import React from 'react';
import Title from '../common/Title';
import './index.scss';
import ResumeItem from './Item';

const Education = () => {
	return (
		<div className='page' id='education'>
			<Title>Education Details</Title>

			<ResumeItem
				date={'2016 – 2021'}
				title={'Rajshahi University of Engineering & Technlogy'}
				company={'Rajshahi, Bangladesh'}
				result="CGPA - 3.12 (3.47 in last 60 credits)">
				<p
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: 'black',
					}}>
					Bachelor of Science, Electrical & Computer Engineering
				</p>
			</ResumeItem>

			<ResumeItem
				date={'2013 – 2015'}
				title={'Govt. Bangabandhu College'}
				company={'Rupsha, Khulna'}
				result="GPA - 5.00">
				<p
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: 'black',
					}}>
					Higher Secondary Certificate
				</p>
			</ResumeItem>

			<ResumeItem
				date={'2011 – 2013'}
				title={'Ajagarah High School'}
				company={'Rupsha, Khulna'}
				result="GPA - 5.00">
				<p
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: 'black',
					}}>
					Secondary School Certificate
				</p>
			</ResumeItem>
		</div>
	);
};

export default Education;
