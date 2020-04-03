let accessToken;
const clientId = "630faa143e39490aa71ef8c84443fbb7";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenStr = window.location.href.match(/access_token=([^&]*)/);
    const expiresInStr = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenStr && expiresInStr) {
      accessToken = accessTokenStr[1];
      const expiresIn = Number(expiresInStr[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          };
        });
      });
  }
};

export default Spotify;
