// JavaScript Code (script.js)

document.addEventListener('DOMContentLoaded', () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const buttonsContainer = document.getElementById('buttons');

  // Function to stop all sounds
  function stopSounds() {
    sounds.forEach(sound => {
      const audioElement = document.getElementById(sound);
      audioElement.pause();
      audioElement.currentTime = 0;
    });
  }

  // Create a button for each sound
  sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
      stopSounds();
      document.getElementById(sound).play();
    });

    buttonsContainer.appendChild(btn);
  });
});
