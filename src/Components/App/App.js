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
          id: "1"
        },
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "2"
        },
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "3"
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    } else {
      const newPlaylist = this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: newPlaylist });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(
      currentTrack => currentTrack.id !== track.id
    );

    this.setState({ playlistTracks: tracks });
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
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
