var quotes = [
	"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. - Dr.Seuss",
	"This too, shall pass. - Anonymous",
	"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself. - Harvey Fierstein",
	"Life's too mysterious to take too serious. - Mary Engelbreit",
	"There isn't a way things should be. There's just what happens, and what we do. - Terry Pratchett, A Hat Full of Sky",
	"What we think, we become. -Buddha",
	"Keep your face to the sunshine and your cannot see a shadow. -Helen Keller",
	"This is our job as leaders; to offer positive solution and empower people. Our duty is to tackle our problems before they tackle us. -Paul Ryan",
	"Love yourself. It is important to stay positive because beauty comes from the inside out. -Jenn Proske",
	"For me, life is about being positive and hopeful, choosing to be joyful, choosing to be encouraging, choosing to be empoering. -Billy Porter",
	"The best preparation for tomorrow is doing your best today -H.Jackson Brown, Jr.",
	"It's easy for me to be kind to others. It's much harder to be kind to myself. And it's hardest to realize that's not healthy. -Sanjana Mendu",
	"Music can change the world because it can change people -Bono",
	"Music is moonlight in the gloomy night of life -Jean Paul",
	"Nothing is impossible, the word itself says 'I'm possible'!",
	"Try to be a rainbow in someone's cloud -Maya Angelou",
	"It is during our darkest moment that we must focus to see the light -Aristotle"



];

function newQuote() {
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}