var img_count = 0;
var img = ['img/anhdangnhap1.webp','img/anhdangnhap2.webp','img/anhdangnhap3.webp','img/anhdangnhap4.webp'];
function doihinh2(){
    let x = document.getElementById('doihinh2');
    x.src = img[img_count];
    img_count++;
    if(img_count==img.length){
        img_count=0;
    }
}
setInterval(doihinh2, 2000);