function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const lecture = ['Я устала от тебя', 'позор тебе', 'иди к черту
']

var random = Math.floor(Math.random()* lecture.length);
var lectureMe = lecture[random]

$('button').click(function(){
responsiveVoice.speak(lectureMe, "Russian Female");

})
