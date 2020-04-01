import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "name",
      playlistTracks: [
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "id"
        },
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "id"
        },
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "id"
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    alert(`if '${track}' says 'undefined' it's not gonna work`);
    if (
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    } else {
      const newPlaylist = this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: newPlaylist });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
