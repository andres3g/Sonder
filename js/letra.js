
document.addEventListener('DOMContentLoaded', function()
{
  var sonderTitle = document.getElementById('title');
  var sonderArtist = document.getElementById('artist');

  var consulta = "https://orion.apiseeds.com/api/music/lyric/" + sonderArtist + "/" + sonderTitle + "?apikey=VfY50gfnO0n7men6lcciroHRj5KhWayjQMHO3LmnwTLGTVKKFKj79WO3Gvg52bnG";
  console.log(consulta);

}
