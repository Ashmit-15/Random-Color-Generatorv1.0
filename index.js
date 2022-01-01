function newcolor(){
const code='0123456789ABCDEF';
let color='#';
for( let i=0 ; i<6;i++){
    color = color + code[Math.floor(Math.random()*16)];
}
document.body.style.background= color;
document.getElementById("hex-code").innerHTML= color;
document.getElementById('status-div').innerHTML="NOT COPIED";
document.getElementById('copy').addEventListener('click',()=>
{
    change();
    status();
});


function change(){
    navigator.clipboard.writeText(color);
   
}

function status(){
    document.getElementById('status-div').innerHTML='COPIED';
}




}



