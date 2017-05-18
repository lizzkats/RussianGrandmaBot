const lecture = [
  {lecture: 'Я устала от тебя', translation: 'I am tired of you.'},
  {lecture: 'иди к черту', translation: 'Go to hell!'},
  {lecture: 'Я тебе не хрен с горы!', translation: 'I am not a stranger! Literal: I am not horseradish from the mountains' },
]
let currentLecture = getLecture()
let currentTranslation = currentLecture.translation

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  function getLecture() {
    for (let i = 0; i < lecture.length; i++) {
      return lecture[getRandomInt(0, 3)]
    }
  }

  function lectureMe(){
    return responsiveVoice.speak(currentLecture.lecture, "Russian Female");
  }


$(document).ready(function(){

  $('button').click(function(){
    lectureMe()
  })
  $('.translation').append('<h4>' + currentLecture.translation + '</h1>')
})
