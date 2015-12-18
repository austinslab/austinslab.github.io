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
function addConcept (image) {
        
    var src = image[0];
    var title = image[1];

    var box = document.getElementById("thumbBox2");
    var div = document.createElement("div");
    var thumbdiv = document.createElement("div");
    var a = document.createElement("a");
    var img = document.createElement("img");
    var titlediv = document.createElement("div");

    div.setAttribute("class", "col-xs-12 col-md-3 col-md-offset-2");
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
    
function addConcepts (list) {
        
    for (var i = 0; i < list.length; i++) {
        addConcept(list[i]);
        }
}

