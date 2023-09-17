let c = document.getElementById("c");
let cSharp = document.getElementById('cSharp');
let d = document.getElementById('d');
let dSharp = document.getElementById('dSharp');
let e = document.getElementById('e');
let f = document.getElementById('f');
let fSharp = document.getElementById('fSharp');
let g = document.getElementById('g');
let gSharp = document.getElementById('gSharp');
let a = document.getElementById('a');
let aSharp = document.getElementById('aSharp');
let b = document.getElementById('b')



c.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
});

cSharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C#4", "8n");
});

d.addEventListener("click", () => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("D4", "8n");
})

dSharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D#4", "8n");
})

e.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
})

f.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
})

fSharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F#4", "8n");
})

g.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
})

gSharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G#4", "8n");
})

a.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
})

aSharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A#4", "8n");
})
b.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
})
