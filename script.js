function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "/assets/bio.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) && if (file.status === 200) {  // Makes sure the document is ready to parse and is found
          text = file.responseText;
          document.getElementById("bio").innerHTML = text;
      }
    }
}

window.onLoad = load();
