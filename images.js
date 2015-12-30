//ADD ILLUSTRATIONS 
function addIllustration (image) {
        
    var src = image[0];
    var title = image[1];

    var box = document.getElementById("thumbBox2");
    var div = document.createElement("div");
    var thumbdiv = document.createElement("div");
    var a = document.createElement("a");
    var img = document.createElement("img");
    var titlediv = document.createElement("div");

    div.setAttribute("class", "col-xs-12 col-md-8 col-md-offset-2");
    thumbdiv.setAttribute("class", "");
    a.setAttribute("href", src);
    a.setAttribute("class", "thumbnail");
    img.setAttribute("src", src);
    img.setAttribute("title", title);
    titlediv.setAttribute("class", "caption text-center h3");

    box.appendChild(div);
    div.appendChild(thumbdiv);
    thumbdiv.appendChild(a);
    thumbdiv.appendChild(titlediv);
    a.appendChild(img);

    titlediv.appendChild(document.createTextNode(title));
}
    
function addIllustrations (list) {
        
    for (var i = 0; i < list.length; i++) {
        addIllustration(list[i]);
        }
}


//ADD CONCEPTS
function addConcept (image, img_num) {
        
  var src = image[0];
  var title = image[1];
  var box = document.getElementById("thumb-box");
  var div = document.createElement("div");
  var thumbdiv = document.createElement("div");
  var a = document.createElement("a");
  var img = document.createElement("img");
  var titlediv = document.createElement("div");
  var untarget = document.createElement("a")

  div.setAttribute("class", "col-xs-12 col-md-6 col-lg-4 img");
  div.setAttribute("id", "img" + img_num);
  thumbdiv.setAttribute("class", "thumbnail");
  a.setAttribute("href", "#img" + img_num);
  a.setAttribute("class", "thumbnail");
  img.setAttribute("src", src);
  img.setAttribute("title", title);
  titlediv.setAttribute("class", "caption text-center h3");
  untarget.setAttribute("href", "#imgs");
  untarget.setAttribute("class", "thumbnail untarget");

  box.appendChild(div);
  div.appendChild(a); 
  a.appendChild(img);
  div.appendChild(untarget);

  titlediv.appendChild(document.createTextNode(title));
}
    
function addConcepts (list) {
        
    for (var i = 0; i < list.length; i++) {
        addConcept(list[i], i);
        console.log(i);
        }
}

