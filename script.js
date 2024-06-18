console.log("Welcome to Spotify");
let prev=0;
let audEle=new Audio("songs/1.mp3");
let pl=document.getElementById('play');
let pa=document.getElementById('pause');
let progbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let foot=document.getElementById("song_name_display");
let fb=document.getElementById("forward");
let bw=document.getElementById("backward");
let songs=[
    {sName:"Legion", fPath:"songs/1.mp3"},
    {sName:"Trap", fPath:"songs/2.mp3"},
    {sName:"They Mad", fPath:"songs/3.mp3"},
    {sName:"Plug Walk", fPath:"songs/4.mp3"},
    {sName:"XYZ", fPath:"songs/5.mp3"},
    {sName:"Safety Dance", fPath:"songs/6.mp3"},
    {sName:"Back It Up", fPath:"songs/7.mp3"},
    {sName:"ABC", fPath:"songs/8.mp3"},
    {sName:"MNO", fPath:"songs/9.mp3"},
    {sName:"True Love", fPath:"songs/10.mp3"},
    {sName:"Eclipse", fPath:"songs/11.mp3"}
];
document.querySelectorAll(".song_entries > div").forEach((ele,i) => {
    ele.addEventListener("click",()=>{ 
        audEle.src=null;
        gif.style.opacity=0;
        let song2bplayed=songs[i];
        audEle.src=song2bplayed.fPath; 
        audEle.play();
        gif.style.opacity=1;
        foot.innerHTML=song2bplayed.sName;
        pl.addEventListener("click",()=>{
                audEle.play();  
                gif.style.opacity=1;
        });
        pa.addEventListener("click",()=>{
            audEle.pause();  
            gif.style.opacity=0;
        });
        audEle.addEventListener('timeupdate',()=>{
            prog=parseInt((audEle.currentTime/audEle.duration)*100);
            progbar.value=prog;
            if(audEle.currentTime>=audEle.duration){
                gif.style.opacity=0;
                progbar.value=0;
            }
        }); 
        progbar.addEventListener("change",()=>{
            audEle.currentTime=(progbar.value*audEle.duration)/100;
        });
        fb.addEventListener("click",()=>{
            audEle.src=songs[(i+1)%11].fPath;
            audEle.play();
            gif.style.opacity=1;
            foot.innerHTML=songs[(i+1)%11].sName;
            i++;
        });
        bw.addEventListener("click",()=>{
            if(i==0)    i=11;
            audEle.src=songs[i-1].fPath;
            audEle.play();
            gif.style.opacity=1;
            foot.innerHTML=songs[i-1].sName;
            i--;
        });
    })
});

