
output= document.getElementById("mostrar")
text1= document.getElementById("f1")
text2= document.getElementById("f2")

exampledata = [
    {
        x:1,
        y:3
    },
    {
        x:4,
        y:9
    },
    {
        x:5,
        y:7
    },
    {
        x:2,
        y:3
    }
]


function hola(){
    factores=generatemulti()
    console.log(factores)
    text1.innerHTML=factores[0]
    text2.innerHTML=factores[1]
    console.log("Hola")
}


function generatemulti(){
    datito=[exampledata[0].x,exampledata[0].y]
    return datito    
}


window.addEventListener('load',(event) =>{
    console.log("Listo")
});