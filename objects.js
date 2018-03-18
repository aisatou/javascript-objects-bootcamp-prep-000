var playlist = { music: "song" };

function updatePlaylist(playlist, artistName, songTitle) {
  
}

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = {artistName: "Gold Digger"}
  delete newPlaylist.artistName;
  return newPlaylist;
}