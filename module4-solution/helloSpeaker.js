(function () {
  var helloSpeaker = {};
  helloSpeaker.speakWord = 'Hello';
  helloSpeaker.speak = function (name) {
    console.log(helloSpeaker.speakWord + ' ' + name);
  };
  global.helloSpeaker = helloSpeaker;
})();