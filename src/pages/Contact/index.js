import React from 'react';
import Title from '../common/Title';
import './index.scss';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import cf from '../../assets/cf.png';
import hackerrank from '../../assets/hackerrank.png';
import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';

const Contact = () => {
	return (
		<div className='page' id='contact'>
			<Title>Social Accounts</Title>
			<br />
			

			<div className='social-main-div'>
				<a
					href='https://tinyurl.com/svn-cur-location'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={location} alt='' />
						<p className='social-name'>Dhaka, Bangladesh</p>
					</div>
				</a>

				<div className='social-block'>
					<img className='social-logo' src={phone} alt='' />
					<p className='social-name'>+8801952885804</p>
				</div>

				<a
					href='mailto:mainulislam588@gmail.com'
					blank='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={email} alt='' />
						<p className='social-name'>Email</p>
					</div>
				</a>

				<a
					href='https://api.whatsapp.com/send?phone=+8801952885804&amp;text=Hello, are you available?'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={whatsapp} alt='' />
						<p className='social-name'>Whatsapp</p>
					</div>
				</a>

				<a
					href='https://github.com/ShovonCodes'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={github} alt='' />
						<p className='social-name'>Github</p>
					</div>
				</a>

				<a
					href='https://www.linkedin.com/in/mainulislam588/'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={linkedin} alt='' />
						<p className='social-name'>Linkedin</p>
					</div>
				</a>

				<a
					href='https://codeforces.com/profile/shovon588'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={cf} alt='' />
						<p className='social-name'>Codeforces</p>
					</div>
				</a>

				<a
					href='https://www.hackerrank.com/mainulislam588'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={hackerrank} alt='' />
						<p className='social-name'>HackerRank</p>
					</div>
				</a>

				{/* <a
					href='https://toph.co/u/mainulislam588'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={toph} alt='' />
						<p className='social-name'>Toph</p>
					</div>
				</a>

				<a
					href='https://www.stopstalk.com/user/profile/mainulislam588'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='social-block'>
						<img className='social-logo' src={stopstalk} alt='' />
						<p className='social-name'>StopStalk</p>
					</div>
				</a> */}
			</div>
		</div>
	);
};

export default Contact;
