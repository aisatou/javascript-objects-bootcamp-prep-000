var playlist = { music: "song" };

function updatePlaylist(playlist, artistName, songTitle) {
  var music = {artistName: songTitle}
  music.artistName = "Phil Ochs"
  music.songTitle = "Here's to the State of Mississippi"
  return music;
}

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = {artistName: "Gold Digger"}
  delete newPlaylist.artistName;
  return newPlaylist;
}