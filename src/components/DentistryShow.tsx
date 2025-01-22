import dentistryHomepage from '../logos/pfd-application.png';
import dentistryContact from '../logos/pfd-contact.png';
import dentistryAbout from '../logos/pfd-about.png';
const DentistryShow = () => {
	return (
		<div className="display-div">
			<h3 className="display-header">Dentistry Website</h3>
			<div className="display-flex">
				<div className="display-left Flex">
					<img src={dentistryHomepage} className="display-img" />
					<div className="display-text-div">
						<p className=" display-sub">SEO and Best Practices</p>
						<p className="w-50">
							Optimizing internal structure and prioritizing the correct information leads to high
							SEO rankings that will help this website flourish in google ratings
						</p>
					</div>
				</div>
				<div className="display-right Flex">
					<div className="display-text-div-right">
						<p className=" display-sub Right-text">Functional and Reliable Components</p>
						<p className="w-50 Right-text">
							Providing functional and easy-to-use contact forms can cultivate great user experience
							and encourage action on the website.
						</p>
					</div>
					<img src={dentistryContact} className="display-img" />
				</div>
				<div className="display-left Flex">
					<img src={dentistryAbout} className="display-img" />
					<div className="display-text-div">
						<p className=" display-sub">APIs and Navigation</p>
						<p className="w-50">
							API handling can help create many utilities for the user, while simplified navigation
							can push users to find them.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DentistryShow;
