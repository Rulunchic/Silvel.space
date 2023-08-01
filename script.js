document.addEventListener('DOMContentLoaded', function() {
    var playSoundText = document.querySelector('.speak');
    var audioPlayer = document.getElementById('audioPlayer');
    var currentSoundIndex = 0;

    playSoundText.addEventListener('click', function() {
        var soundFiles = ['Files/silvel.mp3', 'Files/silvel1.mp3', 'Files/silvel2.mp3', 'Files/silvel3.mp3', 'Files/silvel4.mp3', 'Files/silvel5.mp3'];
        audioPlayer.src = soundFiles[currentSoundIndex];
        audioPlayer.play();
        currentSoundIndex = (currentSoundIndex + 1) % soundFiles.length;
    });


    var aboutUsText = document.querySelector('.about');
    var projectsText = document.querySelector('.projects');
    
    aboutUsText.addEventListener('click', function() {
        var windowHeight = window.innerHeight;
        document.body.scrollTo({
            top: windowHeight,
            behavior: 'smooth'
        });
    });
    
    projectsText.addEventListener('click', function() {
        var windowHeight = window.innerHeight * 2;
        document.body.scrollTo({
            top: windowHeight,
            behavior: 'smooth'
        });
    });
    
    var iElement = document.querySelector('.l');

    iElement.addEventListener('click', function() {
        iElement.classList.toggle('rotated'); // Переключаем класс при каждом клике
    });
});
