function getData(callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open("GET", "https://quotes.rest/qod.json?category=inspire", true);
  xhr.send();
}
