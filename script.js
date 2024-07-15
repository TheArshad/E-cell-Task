console.log("hee haa hoo")

let songIndex = 0;
let playIt = document.getElementById('playIt')
let Seekbar = document.getElementById('seekbar')
let SongName = document.getElementById('song-Name')
let SingerName = document.getElementById('singer-name')
let songItems = Array.from(document.getElementsByClassName('songList'));



let songs = [
    {
        songName:"Never Ending Story",
        singerName:"Dustin",
        filePath:"./songs/1.mp3",
        coverPath:"./covers/1.png"
    },
    {
        songName:"Until I found her",
        singerName:"Stephen Sanchez",
        filePath:"./songs/2.mp3",
        coverPath:"./covers/1.png"
    },
    {
        songName:"Heat waves",
        singerName:"Glass Animals",
        filePath:"./songs/3.mp3",
        coverPath:"./covers/1.png"
    },
    {
        songName:"No lie",
        singerName:"Dua lipa",
        filePath:"./songs/4.mp3",
        coverPath:"./covers/1.png"
    },
]


let audioElement = new Audio('1.mp3')
// audioElement.play()

// play / pose ...
playIt.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playIt.classList.remove('fa-play-circle');
        playIt.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        playIt.classList.remove('fa-circle-pause');
        playIt.classList.add('fa-play-circle');
    }
})

//  Events
audioElement.addEventListener('timeupdate', ()=>{ 
    //Seekbar updating
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    Seekbar.value = progress;
})

Seekbar.addEventListener('change', ()=>{
    audioElement.currentTime = Seekbar.value * audioElement.duration/100;
})
