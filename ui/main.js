console.log('Loaded!');

//Change the text of main-text div
var element = document.getElementById("main-text"
);

element.innerhtml="New Value";

//Move the image
var img = document.getElementById('madi');
img.onclick = function()
{
    img.style.marginLeft='100px';
};
 