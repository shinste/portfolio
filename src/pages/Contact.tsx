import phone from '../logos/Phone.png';
import envelop from '../logos/Envelope.png';
import github from '../logos/GitHub2.png';
import linkedin from '../logos/LinkedIn.png';
import phoneGray from '../logos/PhoneGray.png';
import envelopGray from '../logos/EmailGray.png';
import githubGray from '../logos/GitHubGray.png';
import linkedinGray from '../logos/LinkedInGray.png';
import { Button } from '@mui/material';
import React from 'react';
import useIntersectionAnimation from '../hooks/useAnimate';

interface ContactProps {
	dayTime: boolean;
}

const Contact: React.FC<ContactProps> = ({ dayTime }) => {
	useIntersectionAnimation();
	const panelStyle: React.CSSProperties = {
		backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke',
		height: '20rem',
		width: '20rem',
		margin: '2rem',
		borderRadius: 12,
		minWidth: '15rem'
	};

	const logoStyle: React.CSSProperties = {
		// display: 'block',
		// marginLeft: 'auto',
		// marginRight: 'auto',
		// marginBottom: '5rem'
		height: '100px'
	};
	return (
		<div className="Page-div padding">
			<div className="title-div"></div>
			<div className="Contact-div">
				<div className="contact-hold">
					<p className="contact-header">Get in touch</p>
					<p className="no-margin">360-790-6401</p>
					<p className="no-margin">stephenshin1@hotmail.com</p>
				</div>
				<div className="contact-hold">
					<p className="contact-header">Connect with me</p>

					<a
						href="https://www.linkedin.com/in/stephen-shin-680bb0201/"
						target="_blank"
						style={{ textDecoration: 'none' }}>
						LinkedIn
					</a>
				</div>
				<div className="contact-hold">
					<p className="contact-header">Check out my code</p>
					<a href="https://github.com/shinste/" target="_blank" style={{ textDecoration: 'none' }}>
						GitHub
					</a>
				</div>
			</div>

			{/* <div className="Contact-div animate">
				<div style={{ ...panelStyle }}>
					<img style={{ ...logoStyle }} src={dayTime ? phone : phoneGray} />
					<h3 style={{ textAlign: 'center' }}>360-790-6401</h3>
				</div>
				<div style={{ ...panelStyle }}>
					<img style={{ ...logoStyle }} src={dayTime ? envelop : envelopGray} />
					<h3 style={{ textAlign: 'center' }}>stephenshin1@hotmail.com</h3>
				</div>
				<div style={{ ...panelStyle }}>
					<img style={{ ...logoStyle }} src={dayTime ? github : githubGray} />
					<a href="https://github.com/shinste/" target="_blank" style={{ textDecoration: 'none' }}>
						<Button
							style={{ ...logoStyle }}
							variant="contained"
							sx={{
								backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
								boxShadow: '3px 3px 5px 0px grey'
							}}>
							Visit
						</Button>
					</a>
				</div>
				<div style={{ ...panelStyle }}>
					<img style={{ ...logoStyle }} src={dayTime ? linkedin : linkedinGray} />
					<a
						href="https://www.linkedin.com/in/stephen-shin-680bb0201/"
						target="_blank"
						style={{ textDecoration: 'none' }}>
						<Button
							style={{ ...logoStyle }}
							variant="contained"
							sx={{
								backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
								boxShadow: '3px 3px 5px 0px grey'
							}}>
							Visit
						</Button>
					</a>
				</div>
			</div> */}
		</div>
	);
};

export default Contact;
