var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro")
var canvas_cinco = document.getElementById("lienzo-cinco")


if(canvas_tres.getContext){
    console.log("si se soporta la propiedad getcontext");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.filRect(10,10,55,10);

    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.filRect(10,10,55,10);

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.filRect(10,10,55,10);


}else{
console.log("no se soporta la propiedad");

}

if(canvas_cuatro.getContext){
    console.log("si se soporta la propiedad getcontext");

    var ctx_4 = canvas_cuatro.getContext("2d");
    ctx_4.beginPath();
    ctx_4.moveTo(5,5);
    ctx_4.LineTo(125,125);
    ctx_4.strokeStyle = "#FFFFFF";
    ctx_4.stroke();



}else{
    console.log("no se soporta la propiedad")
    
    }

if(canvas_cinco.getContext){
  
    var ctx_5 = canvas_cuatro.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15])
    ctx_5.moveTo(0,40);
    ctx_5.LineTo(150,40);
    ctx_5.strokeStyle = "#FFFFFF"
    ctx_5.stroke();

}else{
        console.log("no se soporta la propiedad")
        
        }