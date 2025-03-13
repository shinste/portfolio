import useIntersectionAnimation from '../hooks/useAnimate';
import travellerLogin from '../logos/traveller-application.png';
import travellerCalendar from '../logos/traveller_calendar.png';
import travellerItinerary from '../logos/traveller_itinerary.png';
const TravellerShow = () => {
	useIntersectionAnimation();
	return (
		<div className="display-div">
			<h3 className="display-header">Travel Planning Application</h3>
			<div className="display-flex">
				<div className="display-left Flex">
					<img src={travellerLogin} className="display-img" />
					<div className="display-text-div animate">
						<p className=" display-sub">Easy Login and Registration</p>
						<p className="w-50">
							Using Google Firebase’s OAuth, this project aims to keep allow joining and logging
							back on as simple as can be.
						</p>
					</div>
				</div>
				<div className="display-right Flex">
					<div className="display-text-div-right animate">
						<p className=" display-sub Right-text">Quickly Edit and Organize Events</p>
						<p className="w-50 Right-text">
							Create events that you can visualize and edit on our calendar. Any creation or edit of
							an event gets updated to the database.
						</p>
					</div>
					<img src={travellerCalendar} className="display-img" />
				</div>
				<div className="display-left Flex">
					<img src={travellerItinerary} className="display-img" />
					<div className="display-text-div animate">
						<p className=" display-sub">Easy Login and Registration</p>
						<p className="w-50">
							Using Google Firebase’s OAuth, this project aims to keep allow joining and logging
							back on as simple as can be.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravellerShow;
