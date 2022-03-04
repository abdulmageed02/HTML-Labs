let map_button = document.getElementsByTagName("button")[0];

let coords_button = document.getElementsByTagName("button")[1];
let the_second_div = document.getElementsByClassName("second_div")[0];

coords_button.addEventListener("click", coords_button_function);

function coords_button_function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(get_lat_lon, ()=>{console.log("failed")})
    }
}

function get_lat_lon(){
    let div = document.createElement('div');
    let loooong = arguments[0].coords.longitude;
    let laaaaat = arguments[0].coords.latitude;
    let Accuraccy = arguments[0].coords.accuracy;
    let time = new Date(arguments[0].timestamp);
    the_second_div.innerHTML = '<div style="height:400px; width:600px; background-color: lightpink; margin:20px auto;border-radius: 20px; display:flex;flex-direction: column; align-items: center;justify-content: space-evenly;font-size:24px;color:green"><div>Latitude: <br><input id="lat" name="lat" type="text" value="'+ loooong +'" readonly></div><div>longitude: <br><input id="lat" name="lat" type="text" value="' + laaaaat + '" readonly></div><div>Accuraccy: <br><input id="lat" name="lat" type="text" value="'+Accuraccy+'" readonly></div><div>Date & Time: <br><input style="width:440px"id="lat" name="lat" type="text" value="'+time+'" readonly></div></div>;'
}

map_button.addEventListener("click", map_button_function);

function map_button_function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(get_map, ()=>{console.log("failed")})
    }
}


