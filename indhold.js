function shownext() {
    console.log("next clicked");
    let img=document.getElementById("billede");
    let Number=parseInt(img.className);
    img.classList.remove(img.className);
    if (Number===6) Number=0;
    img.classList.add(Number+1);
    img.src="billeder/for"+(Number+1)+".png";
    let lightbox=document.getElementById("orale");
    lightbox.style.cssText="background-image: url(billeder/for"+(Number+1)+".png)";

}


function shownext2() {
    console.log("next clicked");
    let img=document.getElementById("billede2");
    let Number=parseInt(img.className);
    img.classList.remove(img.className);
    if (Number===6) Number=0;
    img.classList.add(Number+1);
    img.src="billeder/efter"+(Number+1)+".jpg";
    let lightbox=document.getElementById("orale2");
    lightbox.style.cssText="background-image: url(billeder/efter"+(Number+1)+".jpg)";
}


