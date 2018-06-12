

document.addEventListener('DOMContentLoaded', function()
{
  console.log(window.location.href)
  if(window.location.href.includes("letra.html"))
  return

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

              sonderTitle.value = newTitle;
              sonderArtist.value = newArtist;
        }

          var id = url.substring(url.lastIndexOf("watch?v=") + "watch?v=".length,url.length);

          if(id.includes("&"))
            id = id.substring(0, id.indexOf("#"));

            boton1.addEventListener('click', function (){

              pageUrl = tab[0].url.replace("- YouTube", "");

              var title = document.getElementById('title').value;
              var artist = document.getElementById('artist').value;

              var json = {
                  title: title.trim(),
                  artist: artist.trim(),
                  sonder: 1,
                  id: id.trim(),
                  page: pageTitle.trim()

              }
              var letraF = buscar(title,artist);
            });

      }
        else{
          document.getElementById("warning").innerHTML += "El URL no pertenece a una cancion de YouTube";
            }
      });
});

  function buscar(title,artist) {

    var sonderArtist = artist.replace(" ", " ").trim();;
    var sonderTitle = title;

    var consulta = "https://orion.apiseeds.com/api/music/lyric/" + sonderArtist + "/" + sonderTitle + "?apikey=VfY50gfnO0n7men6lcciroHRj5KhWayjQMHO3LmnwTLGTVKKFKj79WO3Gvg52bnG";

    var consulta2 = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=8e9bafd865b81c7b344ed928b65cdab9&artist="+sonderArtist+"&track="+sonderTitle+"&format=json";

    fetch(consulta)
    .then((respuesta) =>{
      console.log("Entra al primero");
      return respuesta.json();
    }).then((respuesta) => {
      console.log("Entra al segundo");
      console.log(respuesta.result.track.text);
      buscar2(consulta2);
      document.getElementById('letra').style.display = 'block';
      document.getElementById('ver').style.display = 'none';
      document.getElementById('cover').style.display = 'block';
      document.getElementById('cover').style.align = 'center';

        document.getElementById('lyric').innerHTML = respuesta.result.track.text;
        document.getElementById('artist2').innerHTML = respuesta.result.artist.name;
        document.getElementById('nombre').innerHTML = respuesta.result.track.name;
        document.getElementById("cuerpo").style.width = "200px";
    });

  }

   function buscar2(consulta2) {

      fetch(consulta2)
      .then((respuesta2)=>{
        return respuesta2.json();
      }).then((respuesta2) => {

        console.log(respuesta2.track.album.image[2]['#text']);
         var imagen = document.getElementById('cover');
        imagen.src = respuesta2.track.album.image[2]['#text'];

      });


   }
