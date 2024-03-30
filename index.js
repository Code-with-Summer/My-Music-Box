var songs= ["Music/Mahiya_Ve.mp3", "Music/Sang_Rahiyo.mp3", "Music/Hass_Hass.mp3", "Music/Unakku_Thaan.mp3", "Music/Naino_Ki_Baat.mp3", "Music/Bol_Kaffara.mp3" ];

var flag = 0;

for(i=0; i< songs.length; i++){
    document.querySelectorAll(".music")[i].addEventListener("click", function(){
        key = this.id;
        switch (key) {
            case "0":
                var gaana = new Audio(songs[0]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');

            break;

            case "1":
                var gaana = new Audio(songs[1]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');
                
            break;

            case "2":
                var gaana = new Audio(songs[2]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');
            break;

            case "3":
                var gaana = new Audio(songs[3]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');
            break;

            case "4":
                var gaana = new Audio(songs[4]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');
            break;

            case "5":
                var gaana = new Audio(songs[5]);
                gaana.play();
                document.getElementById(key).classList.add('myClass');
            break;
        
            default:
            break;
        }         
    });    
}

document.querySelector(".music").addEventListener("click", function(){
    document.querySelector("button").classList.add('myClass');
} )

