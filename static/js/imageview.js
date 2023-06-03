const imageShowPath = document.getElementById("fullpath").value
const filePath = document.getElementById('path').value
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const imageDiv = document.getElementById("imageDiv")




function init()
{
    const img = new Image()

    img.onload = ()=>{
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        const isImageBig = img.width > 1280 || img.height > 720;
        imageDiv.style.width = (isImageBig ? img.width/2 : img.width) + "px"
        imageDiv.style.height = (isImageBig ? img.height/2 : img.height) + "px"
    }

    img.src = imageShowPath
}


init()