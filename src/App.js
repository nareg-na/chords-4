import React, { useState } from "react";
import ChordSheetJS from 'chordsheetjs';
import { Chord } from 'chordsheetjs';
// import { ChordBox } from 'vexchords';
// import h from 'hyperscript';
// import './styles.css';

function App() {

    const [error, setError] = useState();
    const [key, setKey] = useState(0);
    const [chordInput, setChordInput] = useState(``);
    const [chord, setChord] = useState(`
    {title: Oh Lord You're Beautiful}
    {subtitle: Keith Green}
    {key: C}
    {tempo: 70}
    {time: 4/4}

    {Verse}
    Oh [C]Lord, You're [F]Beauti[G]ful,
    Youre [C]Face is [F]all I [G]seek,
    And [C]when your [F]eyes are [Am]on [G]this [F]child,
    Your [Dm]Grace a[G]bounds to [C]me.

    {chorus}
    I want to [F]take Your [Dm]Word and [G]shine it all a[C]round,
    First help me [F]just [Dm]to live it [G]Lord.
    And when I'm [F]doing [Dm]well help me to [G]never seek a [C]crown,
    For my [Dm]reward is [G]bringing glory to [G]You.`);

    const handleChange = (e) => {
        setKey(e.target.value);
    }
    const handleChord = (e) => {
        e.preventDefault();
        setChordInput(e.target.value);
    }
    const handleChordSubmit = (e) => {
        e.preventDefault();
        let chordSheet2 = chordInput.substring(0);
        let parser2 = new ChordSheetJS.ChordProParser();
        let song2 = parser2.parse(chordSheet2);

        if (chordInput.length == 0) {
            setError("Input field can't be empty");
        } else if (song2.chords.length == 0) {
            setError("No chords found");
        } else if (!song2.metadata.title) {
            setError("No title found");
        } else if (!song2.metadata.subtitle) {
            setError("No subtitle found"); // author
        } else if (!song2.metadata.key) {
            setError("No key found");
        } else {
            setError(null);
            setChord(chordInput);
        }
    }

    const chordSheet = chord.substring(0);
    let parser = new ChordSheetJS.ChordProParser();
    let song = parser.parse(chordSheet);
    let newSong = song.setCapo(key);
    let formatter = new ChordSheetJS.HtmlTableFormatter();
    let disp = formatter.format(newSong);

    function createMarkup() {
        return { __html: disp };
    }

    return (
        <div className="App">
            <form onSubmit={(chordInput) => handleChordSubmit(chordInput)}>
                <label htmlFor="chordInput">Chord:</label>
                <textarea id="chordInput" value={chordInput} onChange={handleChord} />
                <input type="submit" value="Submit" />
                {error && <p>{error}</p>}
            </form>
            <label htmlFor="setCapo">key:</label>
            <select id="setCapo" onChange={(e) => handleChange(e)}>
                <option value="0">Original key: {Chord.parse(song.metadata.key).transpose(0).toString()}</option>
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
            <div id="container">
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default App;