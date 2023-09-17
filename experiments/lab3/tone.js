let f3 = document.getElementById('f3');
let f3Sharp = document.getElementById('f3Sharp');
let g3 = document.getElementById('g3');
let g3Sharp = document.getElementById('g3Sharp');
let a3 = document.getElementById('a3');
let a3Sharp = document.getElementById('a3Sharp');
let b3 = document.getElementById('b3');
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


f3.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F3", "8n");
});

f3Sharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F#3", "8n");
});

g3.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G3", "8n");
});

g3Sharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G#3", "8n");
});

a3.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A3", "8n");
});

a3Sharp.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A#3", "8n");
});

b3.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B3", "8n");
});

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
