let my_video = document.getElementsByTagName("video")[0];
let the_sub = document.getElementsByTagName("track")[0];
flag = 0;

function Change_source(e){
    array= e.src.split("/")
    console.log(array[array.length-1])
    let name = array[array.length-1].split(".")[0];
    my_video.src="Videos/"+name+".mp4";
    
}

my_video.addEventListener("click", ()=>{
    if(my_video.paused)
    {
        my_video.play()
    }
    else{
        my_video.pause();
    }});
my_video.addEventListener("dblclick", ()=>{my_video.requestFullscreen()});

my_video.addEventListener("mouseover", ()=>{
    my_video.style.width = "100%";
    my_video.style.height = "100%";
    my_video.style.margin= "0px auto";
});

my_video.addEventListener("mouseleave", ()=>{
    if(flag == 0){
        my_video.style.width = "50%";
        my_video.style.height = "50%";
        my_video.style.margin= "50px auto";
    }
    
});

document.getElementById("play").addEventListener("click", ()=>{
    if(my_video.paused)
        my_video.play();
})

document.getElementById("pause").addEventListener("click", ()=>{
    if(!(my_video.paused))
        my_video.pause();
})

document.getElementById("scale").addEventListener("click", ()=>{
    my_video.style.width = "100%";
    my_video.style.height = "100%";
    my_video.style.margin= "0px auto";
    flag=1;
})

document.getElementById("descale").addEventListener("click", ()=>{
    my_video.style.width = "50%";
    my_video.style.height = "50%";
    my_video.style.margin= "50px auto";
    flag=0;
})

document.getElementById("full_screen").addEventListener("click", ()=>{
    my_video.requestFullscreen();
})

document.getElementById("mute").addEventListener("click", ()=>{
    my_video.volume = 0;
})

document.getElementById("unmute").addEventListener("click", ()=>{
    my_video.volume = 1;
})