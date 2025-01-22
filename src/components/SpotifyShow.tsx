const SpotifyShow = () => {
	return (
		<div className="display-div">
			<h3 className="display-header">Spotify Recommender</h3>

			<div className="" style={{ height: '100rem' }}>
				<p className="spotify-text">
					As of November 27th, 2024, Spotify has deprecated several key Web API endpoints, including
					those for song previews and recommendations—the core functionalities of this application.
					While it's disappointing to see that the effort and time I invested will no longer result
					in a fully functional experience for users, this project was an invaluable learning
					experience.
				</p>
				<p className="spotify-text">
					{' '}
					Fortunately, I created an application breakdown for an interview, which provides a
					detailed overview of its development and features. I’ll be sharing that instead. Thank you
					for your understanding!
				</p>
				<div id="hold-video">
					<iframe
						src="https://drive.google.com/file/d/1gEEPZDeOr01dZ1lXJCVDXPDh18plbJLO/preview"
						width="800"
						height="480"
						allow="autoplay; encrypted-media"
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
};

export default SpotifyShow;
