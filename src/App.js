import React, { useState } from "react";
import ChordSheetJS from 'chordsheetjs';
import { Chord } from 'chordsheetjs';
// import { ChordBox } from 'vexchords';
// import h from 'hyperscript';
// import './styles.css';

function App() {

    const [key, setKey] = useState(0);

    const handleChange = (e) => {
        setKey(e.target.value);
    }

    const chordSheet = `
    {title: Oh Lord You're Beautiful}
    {subtitle: Keith Green}
    {key: C}
    {Verse}
    Oh [C]Lord, You're [F]Beauti[G]ful,
    Youre [C]Face is [F]all I [G]seek,
    And [C]when your [F]eyes are [Am]on [G]this [F]child,
    Your [Dm]Grace a[G]bounds to [C]me.
    {Chorus}
    I want to [F]take Your [Dm]Word and [G]shine it all a[C]round,
    First help me [F]just [Dm]to live it [G]Lord.
    And when I'm [F]doing [Dm]well help me to [G]never seek a [C]crown,
    For my [Dm]reward is [G]bringing glory to [G]You.`.substring(1);
    let parser = new ChordSheetJS.ChordProParser();
    let song = parser.parse(chordSheet);
    let newSong = song.setCapo(key);
    let formatter = new ChordSheetJS.HtmlTableFormatter();
    let disp = formatter.format(newSong);

    function createMarkup() {
        return { __html: disp };
    }

    // function toChord(numstr, translFrets = 0) {
    //     if (numstr.length !== 6) throw new Error('wrong length!')
    //     const fingers = numstr
    //         .split('')
    //         .reverse()
    //         .map(f => (f === 'x' ? 'x' : Number(f)))
    //     const min = Math.min(...fingers.filter(f => f !== 'x'))
    //     if (min === 0) return { chord: fingers.map((s, i) => [i + 1, s]) }
    //     else
    //         return {
    //             position: min + translFrets,
    //             chord: fingers
    //                 .map((s, i) => [i + 1, s])
    //                 .filter(([j, s]) => s !== min)
    //                 .map(([j, s]) => [j, s - min + 1]),
    //             barres: [{ fromString: 6, toString: 1, fret: 1 }],
    //         }
    // }

    // const notes = {
    //     C: 'x32010',
    //     D: 'xx0232',
    //     E: '022100',
    //     F: '133211',
    //     // 'F#': ('133211', 1),
    //     // G: ('133211', 2),
    //     G: '320003',
    //     A: '02220x',

    //     Cm: 'x31013',
    //     Dm: 'xx0231',
    //     Em: '022000',
    //     Fm: '133211',
    //     Gm: '320033',
    //     Am: '02210x',

    //     'C/G': '332010',
    //     'C/E': '032013',
    // }

    // function draw(k, el = document.body) {
    //     const container = el.appendChild(
    //         h('div', {
    //             className: `chord-container chord-${k}`,
    //         }),
    //     )

        // const dim = { w: 45, h: 55 }
        // new ChordBox(container, {
        //     width: dim.w,
        //     height: dim.h,
        //     showTuning: false,
        //     numFrets: 4,
        //     defaultColor: 'black',
        // }).draw(toChord(notes[k]))

        // const s = container.querySelector('svg')
        // s.setAttribute('height', dim.h - 15)
        // s.setAttribute('viewBox', `2 5 ${dim.w} ${dim.h - 15}`)

        // container.appendChild(document.createTextNode(k))

        // return container
    // }

    // document.querySelectorAll('.chord').forEach(chord => {
    //     const k = chord.innerText.trim()
    //     const row = chord.parentNode.parentNode
    //     if (notes[k]) {
    //         chord.classList.add('clickable')

    //         chord.addEventListener('click', () => {
    //             if (chord.displayedChord) {
    //                 chord.displayedChord.parentNode.removeChild(chord.displayedChord)
    //                 chord.displayedChord = null
    //             } else {
    //                 chord.displayedChord = draw(k, row)
    //             }
    //         })
    //     }
    // })



    return (
        <div className="App">
            <label>
                key:
                <select onChange={(e) => handleChange(e)}>
                    <option value="0">{Chord.parse(song.metadata.key).transpose(0).toString()}</option>
                    <option value="11">{Chord.parse(song.metadata.key).transpose(1).toString()}</option>
                    <option value="10">{Chord.parse(song.metadata.key).transpose(2).toString()}</option>
                    <option value="9">{Chord.parse(song.metadata.key).transpose(3).toString()}</option>
                    <option value="8">{Chord.parse(song.metadata.key).transpose(4).toString()}</option>
                    <option value="7">{Chord.parse(song.metadata.key).transpose(5).toString()}</option>
                    <option value="6">{Chord.parse(song.metadata.key).transpose(6).toString()}</option>
                    <option value="5">{Chord.parse(song.metadata.key).transpose(7).toString()}</option>
                    <option value="4">{Chord.parse(song.metadata.key).transpose(8).toString()}</option>
                    <option value="3">{Chord.parse(song.metadata.key).transpose(9).toString()}</option>
                    <option value="2">{Chord.parse(song.metadata.key).transpose(10).toString()}</option>
                    <option value="1">{Chord.parse(song.metadata.key).transpose(11).toString()}</option>
                </select>
            </label>
            <div id="container">
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default App;