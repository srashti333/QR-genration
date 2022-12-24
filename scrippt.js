function genQR(){
    var gapi="https://chart.googleapis.com/chart?cht=qr&&chs=";
    var imgQR=document.getElementById("QR");
    var textQR=document.getElementById("QRtext").value;
    var sizeQR=document.getElementById("size").value;
    if(textQR!==""){
        imgQR.src=gapi+sizeQR+"x"+sizeQR+"&chl="+textQR;
    }els{
        alert("Please enter text")
    }
    console.log(sizeQR);
}