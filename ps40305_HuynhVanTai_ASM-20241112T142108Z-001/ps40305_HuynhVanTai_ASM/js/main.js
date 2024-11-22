var img_count = 0;
var img = ['img/banner3.webp','img/banner2.webp','img/banner.webp'];
function doihinh(){
    let x = document.getElementById('doihinh');
    x.src = img[img_count];
    img_count++;
    if(img_count==img.length){
        img_count=0;
    }
}
setInterval(doihinh, 2000);