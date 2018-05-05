

document.addEventListener('DOMContentLoaded', function()
{
  // var x = document.getElementById("boton1").onclick = hola;
  //
  // function hola() {
  //   alert("Funcionando...");
  // }


  var sonderBtm = document.getElementById('artista');
    var addBtn = document.getElementById('nombre');



    chrome.tabs.query({ currentWindow: true, active: true }, function (tab)
      {
        var doc = document;
        var url = tab[0].url;
        var ydoc = tab[0].title;

        console.log(ydoc);

        if (url.includes("youtube.com/watch?v"))
        {
          var regex;
          var titleArray = pageTitle.split("-");
          var newTitle = titleArray[1];
          var newArtist = titleArray[0];



        }
        else{
          document.getElementById("warning").innerHTML += "El URL no pertenece a una cancion de YouTube";

            }

      });
});
