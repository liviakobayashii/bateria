document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLocaleLowerCase())
})

document.querySelector(".composer button").addEventListener("click", () => {
    const song = document.querySelector("#input").value

    if(song != "") {
        const songArray = song.split("")
        playComposition(songArray)
    }
})

const playSound = (sound) => {
    const audioElement = document.querySelector(`#s_${sound}`)
    const keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0
        audioElement.play() //função pronta do js
    }

    if(keyElement) {
        keyElement.classList.add("active")

        setTimeout(() => {
            keyElement.classList.remove("active")
        },300) //esta removendo a classe
    }
}

const playComposition = (songArray) => {

    let wait = 0

    songArray.forEach(songItem => {

        setTimeout(() => {
            playSound(`key${songItem}`)
        },wait)

        wait += 200
    });
}