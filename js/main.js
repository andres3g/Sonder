

document.addEventListener('DOMContentLoaded', function()
{

  var sonderBtm = document.getElementById('artista');
    var addBtn = document.getElementById('nombre');



    chrome.tabs.query({ currentWindow: true, active: true }, function (tab)
      {
        var doc = document;
        var url = tab[0].url;
        var ydoc = tab[0].title;

        console.log(ydoc);

        if (url.includes("youtube.com/watch?v")) {

          var sonderTitle = document.getElementById('title');
          var sonderArtist = document.getElementById('artist');
          

          var pageUrl = tab[0].url;
          var pageTitle = tab[0].title;

        if (url.includes("youtube.com/watch?v"))
        {
          var regex;
          var titleArray = pageTitle.split("-");
          var newTitle = titleArray[1];
          var newArtist = titleArray[0];

          if(pageTitle.indexOf(')')>-1){
            regex = / *\([^)]*\) */g;
            newTitle = newTitle.replace(regex, " ").trim();
            newArtist = newArtist.replace(regex, " ").trim();
          }
          if(pageTitle.indexOf('[')>-1)
          {
              regex = / *\[[^)]*\] */g;
              newTitle = newTitle.replace(regex, " ").trim();
              newArtist = newArtist.replace(regex, " ").trim();
          }

          regex = /"/g
          if(newTitle.indexOf('"')>-1)
              newTitle = newTitle.replace(regex,"").trim();

          if(newArtist.indexOf('"')>-1)
              newArtist = newTitle.replace(regex,"").trim();

              //aqui voy
              sonderTitle.value = newTitle;
              sonderArtist.value = newArtist;


        }else
          //falta

          var id = url.substring(url.lastIndexOf("watch?v=") + "watch?v=".length,url.length);

          if(id.includes("&"))
            id = id.substring(0, id.indexOf("#"));

            sonderBtm.addEventListener('click', function (){

              pageUrl = tab[0].url.replace("- YouTube", "");

              var title = document.getElementById('title').value;
              var artist = document.getElementById('artist').value;
              var album = document.getElementById('album').value;
              var playlist = document.getElementById("playlist").value;

              var json = {
                  title: title.trim(),
                  artist: artist.trim(),
                  album: album.trim(),
                  playlist: playlist.trim(),
                  sonder: 1,
                  id: id.trim(),
                  page: pageTitle.trim()

              }

              sendData(json);
            });

      }
        else{
          document.getElementById("warning").innerHTML += "El URL no pertenece a una cancion de YouTube";

            }


            function buscar() {

              var sonderArtist = document.getElementById('artist').value;
              var sonderTitle = document.getElementById('title').value;

              var consulta = "https://orion.apiseeds.com/api/music/lyric/" + sonderArtist + "/" + sonderTitle + "?apikey=VfY50gfnO0n7men6lcciroHRj5KhWayjQMHO3LmnwTLGTVKKFKj79WO3Gvg52bnG";

              fetch(consulta)
              .then((respuesta) =>{
                return respuesta.json();
              }).then((respuesta) => {
                document.getElementById('lyric').innerHTML += respuesta.result.track.text;
                document.getElementById('artist2').innerHTML += respuesta.result.artist.name;
                console.log(respuesta.result.artist.name)
              }


               )

            }


      });
});
