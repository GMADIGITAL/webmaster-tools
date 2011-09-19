function shouldset(passon){
if(document.onlinecolor.onlineCodevalue.value.length == 7){setcolor(passon)}
}

function setcolor(elem){
document.onlinecolor.onlineCodevalue.value=elem
     document.onlinecolor.selectcolor.style.backgroundColor=elem
}