let cNote = document.getElementsByClassName("c");

cNote[0].addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    console.log('c')
});