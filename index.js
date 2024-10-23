var songs = [
    "Music/Mahiya_Ve.mp3", 
    "Music/Sang_Rahiyo.mp3", 
    "Music/Hass_Hass.mp3", 
    "Music/Unakku_Thaan.mp3", 
    "Music/goli.mp3", 
    "Music/Naino_Ki_Baat.mp3", 
    "Music/Bol_Kaffara.mp3"
];

var currentAudio = null; // To keep track of the currently playing audio

for (let i = 0; i < songs.length; i++) {
    document.querySelectorAll(".music")[i].addEventListener("click", function() {
        // Stop the currently playing audio if any
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset playback position
            document.querySelectorAll(".music").forEach(el => el.classList.remove('myClass')); // Remove class from all
        }

        // Create a new audio instance for the clicked song
        currentAudio = new Audio(songs[i]);
        currentAudio.play(); // Play the new audio
        this.classList.add('myClass'); // Add class to the clicked element
    });
}

// Additional event for a specific button
document.querySelector(".music").addEventListener("click", function() {
    document.querySelector("button").classList.add('myClass');
});
