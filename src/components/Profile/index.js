import React, { useContext, useState } from 'react';
import { Lightbox } from "react-modal-image"
import './index.scss';
import TypedText from '../TypedText';
import SocialLinks from '../SocialLinks';
import Info from '../Info';
import TopSkills from '../Skills/TopSkills';
import { ThemeContext } from '../../context/ThemeContext';

const IMAGE_URL = 'https://i.ibb.co/19mQnPf/headshot.jpg';

const Profile = () => {
	const [openImage, setOpenImage] = useState(false)

	const { backgroundImage, type } = useContext(ThemeContext);
	return (
		<div className='profile'>
			<div className='profile__banner'>
				<div
					className={`profile__photo`}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				/>
				<img src={IMAGE_URL} alt={type} onClick={() => setOpenImage(true)} />
			</div>
			<div className='profile__content'>
				<div className='profile__title'>Md. Minul Islam Shovon</div>
				<TypedText
					dataText={[
						'Competitive Programmer',
						'Full Stack Developer',
						'Software Development Engineer',
					]}
				/>
				<SocialLinks />
				<Info icon='location'>Dhaka, Bangladesh</Info>

				<TopSkills />
				{/* <MoreSkills /> */}
			</div>
			<div className='profile__contact'>
				<a
					href='http://tinyurl.com/shovon-resume'
					target='_blank'
					rel='noreferrer'>
					<span>Download Resume</span>
				</a>
				<a
					href='mailto:mainulislam588@gmail.com'
					blank='_blank'
					rel='noreferrer'>
					<span>Contact Me</span>
				</a>
			</div>

			{openImage &&
				<Lightbox
					large={IMAGE_URL}
					hideZoom
					onClose={() => setOpenImage(false)}
			/>}

		</div>
	);
};

export default Profile;
