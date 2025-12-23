let Index=0;
var Images=[
    {source: "jaguar.avif",caption:"Jaguar E-Type (Classic Elegance)"},
    {source: "mustang.jpg",caption:"Ford Mustang (Muscle & Freedom)"},
    {source: "ferrari.jpg",caption:"Ferrari F40 (Raw Supercar Power)"},
    {source: "mclaren.jpeg",caption: "McLaren F1 (Engineering Marvel)"},
    {source: "nevera.avif",caption: "Rimac Nevera (Electric Future)"},
    {source: "porsche.jpg",caption: "Porsche 911 (Perpetual Icon)"}

];
function display()
{
    document.getElementById("imgid").src=Images[Index].source;
    document.getElementById("captid").innerHTML=Images[Index].caption;
}
function display()
{
    document.getElementById("imgid").src=Images[Index].source;
    document.getElementById("captid").innerHTML=Images[Index].caption;
}
function prev()
{
    Index--;
    if(Index<0)
        Index=Images.length-1;
    display();
}
function next()
{
    Index++;
    display();
    if(Index>=Images.length-1)
        Index=0;
    
}



