//video tut01 for javascript steps starts at 23:18


const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //sounds data retrieval for application action
    const sounds = document.querySelectorAll('.sound-picker button');

    //Time-Display data retrieval
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');

    //Get length of circle around play button to animate
    const outlineLength = outline.getTotalLength() ;
    
    //Program default duration times of song chosen by user
    let fakeDuration = 600; //default duration

    /* this  style element code allows for the circle around play button to have an animated start point and end point that symbols when song starts and will end.*/
    outline.style.strokeDasharray = outlineLength;

    /* Animate the offset of the back white circle to make the circle look like it filled up completely and stopped the song */
    outline.style.strokeDashoffset = outlineLength;

    //Pick Different Sound Choices and video that goes along with sound
    sounds.forEach(sound => {
        sound.addEventListener('click', function(){
           song.src = this.getAttribute('data-sound');
           video.src = this.getAttribute('data-video');
           checkPlaying(song);   
        });
    });

    //This function listens for mouse click to play or stop song
    play.addEventListener('click', () => {
        checkPlaying(song);         
    });

    //Select Sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration % 60)}`; 
        });             
    });

    //Create function to stop and play songs
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = './svg/pause.svg';            
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';  
        }
    };

    // Animate The Circle in reaction to user input
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
         let seconds = Math.floor(elapsed % 60);
         let minutes = Math.floor(elapsed / 60);

         // Animate the Circle play bar
         let progress = outlineLength - currentTime / fakeDuration * outlineLength;
         outline.style.strokeDashoffset = progress;

         //animate the time display text
         timeDisplay.textContent = `${minutes}:${seconds}`;
         
         if(currentTime >= fakeDuration){
             song.pause();
             song.currentTime = 0;
             play.src = './svg/play.svg';
             video.pause();     
         }
    };            
};

app();