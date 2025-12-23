# Ex.07 Design of Interactive Image Gallery
## Date:23.12.2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
igallery.html

<html>
    <head>
        <title>Gallery</title>
        <link rel="stylesheet" href="styles.css">
        <script src="scripts.js"></script>
    </head>
    <body>
        <div class="Title">
            <h2>IGALLERY</h2> 
        </div>
        <div class="page">
        <div class="pic">
        <img src="Jaguar.avif" id="imgid" width="300" height="250">
        </div>
        <h3 id="captid"></h3>
        <div class="button">
        <button onclick="prev()">Prev</button>
        <button onclick="next()">Next</button>
        </div>
        </div>
        <footer>&copy; V Suruthika(25000884)</footer>
    </body>
</html>

styles.css

body{
    background-color: rgb(42, 50, 50);
}
.Title{
    text-align: center;
    font-size: 32;
    font-weight: bold;
    background-color: rgb(245, 150, 150);

}
.page{
    border: solid 3px rgb(245, 150, 150);
    border-radius: 5px;
    height: 350px;
    width: 350px;
    background-color: rgb(135, 135, 169);
    margin-top: 200px;
    margin-left: 800px;
}
.button{
    display: flex;
    justify-content: space-around;
}
h3{
    display: flex;
    justify-content: center;
}
.pic{
    margin-left: 25px;
    margin-top: 15px;
}
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgb(245, 150, 150);
    text-align: center;
    left: 0;
}


scripts.js

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

```

## OUTPUT:
![alt text](<Screenshot (50).png>)
![alt text](<Screenshot (45).png>)
![alt text](<Screenshot (46).png>)
![alt text](<Screenshot (47).png>)
![alt text](<Screenshot (48).png>)
![alt text](<Screenshot (49).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
