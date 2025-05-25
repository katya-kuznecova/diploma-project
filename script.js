let isVideoOpen = false;
document.getElementById('animatedButton2').style.visibility = 'hidden';
document.getElementById('animatedButton3').style.visibility = 'hidden';

function openVideo() {
  const button = document.getElementById('animatedButton');
  const video = document.getElementById('videoPlayer');
  const overlay = document.getElementById('videoOverlay');

  isVideoOpen = true;
  button.src = "materials/image/button_down.png";
  overlay.style.display = 'flex';
  video.play();
  document.getElementById('background').style.backgroundImage = "url('materials/image/background_1lvl.jpg')";
}

// Закрытие видео
function closeVideo(event) {
  const video = document.getElementById('videoPlayer');
  const overlay = document.getElementById('videoOverlay');
  const button = document.getElementById('animatedButton');

  // Только если клик вне видео
  if (event.target === overlay) {
    video.pause();
    video.currentTime = 0;
    overlay.style.display = 'none';
    button.src = 'button.png';
    isVideoOpen = false;
    button.src = "materials/image/button.png";
    document.getElementById('animatedButton').style.visibility = 'hidden';
    document.getElementById('animatedButton2').style.visibility = 'visible';
  }
}

// Закрытие по клавише ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && isVideoOpen) {
    closeVideo({ target: document.getElementById('videoOverlay') });
  }
});

function openGame_Guess_the_animal() {
    const button = document.getElementById('animatedButton2');
    const game_overlay1 = document.getElementById('overlay_game_Guess_the_animal');
    button.src = "materials/image/button_down.png";
    game_overlay1.style.display = 'flex';
     document.getElementById('background').style.backgroundImage = "url('materials/image/background_2lvl.jpg')";
}

function play_music (id){
    var audio = document.getElementById(id);
    if(audio.paused == true) document.getElementById(id).play();
}

function stop_music (id){
    var audio = document.getElementById(id);
    if (audio.paused == false)
       document.getElementById(id).pause();
}

let live=3;

function check(id, correct_id) {
    if (id!=correct_id) {
        if (document.getElementById('live1').style.visibility != 'hidden'){
            document.getElementById(id).style.filter='brightness(60%)';
            document.getElementById('live1').style.visibility = 'hidden';
            document.getElementById('wrong').play();
        } 
        else {
            if (document.getElementById('live2').style.visibility != 'hidden') {
                document.getElementById(id).style.filter='brightness(60%)';
                document.getElementById('live2').style.visibility = 'hidden';
                document.getElementById('wrong').play();
            }
            else {
                if (document.getElementById('live3').style.visibility != 'hidden') {
                document.getElementById(id).style.filter='brightness(60%)';
                document.getElementById('live3').style.visibility = 'hidden';
                document.getElementById('wrong').play();

                }
            }
        }
    } 
    if (id==correct_id) {
        document.getElementById(id).style.filter = 'hue-rotate(20deg)';
        document.getElementById('right').play();
        fadeOut(document.getElementById('rock'),2000);
        document.querySelector('bird').remove();
    }
}

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

function close_Game(){
    document.getElementById('overlay_game_Guess_the_animal').style.visibility = 'hidden';
    stop_music('cherepacha');
    document.getElementById('animatedButton2').style.visibility = 'hidden';
    document.getElementById('animatedButton3').style.visibility = 'visible';
}