import * as _ from "underscore";

var quotes = [
  "'The Way Get Started Is To Quit Talking And Begin Doing.' -Walt Disney",
  "'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' -Winston Churchill",
  "'Don’t Let Yesterday Take Up Too Much Of Today.' -Will Rogers",
  "'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.' - Unknown",
  "'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.' – Inspirational Quote By Vince Lombardi",
  "'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.' - Steve Jobs",
  "'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' - Rob Siltanen",
  "'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.' - Og Mandino",
  "'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. Thats The Classic Entrepreneur.' - Mohnish Pabrai",
  "'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?' - Brian Tracy",
  "'We Generate Fears While We Sit. We Overcome Them By Action.' - Dr. Henry Link",
  "'Whether You Think You Can Or Think You Can’t, You’re Right.' - Henry Ford",
  "'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.' - Helen Keller",
  "'The Man Who Has Confidence In Himself Gains The Confidence Of Others.' - Hasidic Proverb",
  "'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.' - Franklin D. Roosevelt",
  "'Creativity Is Intelligence Having Fun.' - Albert Einstein",
  "'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.' - Don Zimmer",
  "'Do What You Can With All You Have, Wherever You Are.' - Theodore Roosevelt",
  "'Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.' - Brian Tracy",
  "'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.' - C.S. Lewis",
  "'To See What Is Right And Not Do It Is A Lack Of Courage.' - Confucious",
  "'Reading Is To The Mind, As Exercise Is To The Body.' - Brian Tracy",
  "'Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.' - Brian Tracy",
  "'The Future Belongs To The Competent. Get Good, Get Better, Be The Best!' - Brian Tracy"
]

$(document).ready(function() {
  $('#quote').html(_.sample(quotes));
});
