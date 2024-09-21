// <--------------Men Product Data---------------->
var data =[
    {image1 :"dist/img/a1.jpg",
        image2 :"dist/img/a2.jpg",
        
    price:"799",
    color:"Red",
    name:"MAX Textured Short Kurta with Patch Pocket"},
    
    {
        image1 :"dist/img/b1.jpg",
        image2 :"dist/img/b2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Printed Full Sleeves Kurta"},
    
    {
        image1 :"dist/img/c1.jpg",
        image2 :"dist/img/c2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Solid Band-Collar Shirt Kurta"},
    
    {
        image1 :"dist/img/d1.jpg",
        image2 :"dist/img/d2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Regular Fit Short Kurta"},
    
    
    {
        image1 :"dist/img/e1.jpg",
        image2 :"dist/img/e2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Full Sleeves Short Kurta"},
    
    
    {
        image1 :"dist/img/f1.jpg",
        image2 :"dist/img/f2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Band Collar Short Kurta"},
    
    
    {
        image1 :"dist/img/g1.jpg",
        image2 :"dist/img/g2.jpg",
    price:"899",
    color:"Red",
    arriv:"new",
    name:"MAX Printed Short Kurta"},
    
    
    {
        image1 :"dist/img/h1.jpg",
        image2 :"dist/img/h2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Straight Kurta"},
    
    
    {
        image1 :"dist/img/i1.jpg",
        image2 :"dist/img/i2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Kurta"},

    {image1 :"dist/img/a1.jpg",
        image2 :"dist/img/a2.jpg",
        
    price:"799",
    color:"Red",
    name:"MAX Textured Short Kurta with Patch Pocket"},
    
    {
        image1 :"dist/img/b1.jpg",
        image2 :"dist/img/b2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Printed Full Sleeves Kurta"},
    
    {
        image1 :"dist/img/c1.jpg",
        image2 :"dist/img/c2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Solid Band-Collar Shirt Kurta"},
    
    {
        image1 :"dist/img/d1.jpg",
        image2 :"dist/img/d2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Regular Fit Short Kurta"},
    
    
    {
        image1 :"dist/img/e1.jpg",
        image2 :"dist/img/e2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Full Sleeves Short Kurta"},
    
    
    {
        image1 :"dist/img/f1.jpg",
        image2 :"dist/img/f2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Band Collar Short Kurta"},
    
    
    {
        image1 :"dist/img/g1.jpg",
        image2 :"dist/img/g2.jpg",
    price:"899",
    color:"Red",
    arriv:"new",
    name:"MAX Printed Short Kurta"},
    
    
    {
        image1 :"dist/img/h1.jpg",
        image2 :"dist/img/h2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Straight Kurta"},
    
    
    {
        image1 :"dist/img/i1.jpg",
        image2 :"dist/img/i2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Kurta"},
    {image1 :"dist/img/a1.jpg",
        image2 :"dist/img/a2.jpg",
        
    price:"799",
    color:"Red",
    name:"MAX Textured Short Kurta with Patch Pocket"},
    
    {
        image1 :"dist/img/b1.jpg",
        image2 :"dist/img/b2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Printed Full Sleeves Kurta"},
    
    {
        image1 :"dist/img/c1.jpg",
        image2 :"dist/img/c2.jpg",
    price:"899",
    color:"Red",
    name:"MAX Solid Band-Collar Shirt Kurta"},
    
    {
        image1 :"dist/img/d1.jpg",
        image2 :"dist/img/d2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Regular Fit Short Kurta"},
    
    
    {
        image1 :"dist/img/e1.jpg",
        image2 :"dist/img/e2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Full Sleeves Short Kurta"},
    
    
    {
        image1 :"dist/img/f1.jpg",
        image2 :"dist/img/f2.jpg",
    price:"999",
    color:"Red",
    name:"MAX Striped Band Collar Short Kurta"},
    
    
    {
        image1 :"dist/img/g1.jpg",
        image2 :"dist/img/g2.jpg",
    price:"899",
    color:"Red",
    arriv:"new",
    name:"MAX Printed Short Kurta"},
    
    
    {
        image1 :"dist/img/h1.jpg",
        image2 :"dist/img/h2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Straight Kurta"},
    
    
    {
        image1 :"dist/img/i1.jpg",
        image2 :"dist/img/i2.jpg",
    price:"799",
    color:"Red",
    name:"MAX Solid Short Kurta"},
    
   
    ]
// <--------------------------------------------------->
var mProducts = JSON.parse(localStorage.getItem("menProdData"))
localStorage.setItem("menProdData", JSON.stringify(data))
display(mProducts)
// <----------------------SORT BY PRICE------------------------>
function handlePriceSort(){
 var selected = document.getElementById("sortByPrice").value;
    if (selected =="low"){
      mProducts = mProducts.sort(function (a, b) {
         return a.price-b.price
        });
        display(mProducts);
    }
    else if (selected =="high"){
      mProducts = mProducts.sort(function (a, b) {
         return b.price-a.price
        });
        display(mProducts);
    }else if (selected =="new"){
        mProducts = mProducts.filter(function (el) {
            return el.arriv == "new"
        })
        display(mProducts);
    }
}
// <-----------------Display Products------------------>
function display(mProducts) {
document.querySelector("#menProd").innerHTML="" 
var menProducts = document.getElementById("menProd") 
var i=0; 
mProducts.map(function(el){
    var div =document.createElement("div")
        div.setAttribute("class", `prodSubdiv`)

        div.addEventListener("mouseover", function(){
                   a1.style.display = "block"
                   a2.style.display = "block"
                   div3.style.display = "grid"
        })
        div.addEventListener("mouseleave", function(){
                   a1.style.display = "none"
                   a2.style.display = "none"
                   div3.style.display = "none"
        })
        var div1 = document.createElement("div")
        // <------------------Preview Page------------------>
        var productPreview =[]
        div1.addEventListener("click",function(){
            productPreview.push(el)
            localStorage.setItem("productPreview",JSON.stringify(el))
            window.location.href="productpreviewpage.html"
        })
        // <------------------->
            div1.setAttribute("class", "imgbox")
            
            var img1 = document.createElement("img")
                img1.setAttribute("class", `prodImg imghover${i} `)
                img1.setAttribute("src", el.image1)
                i++
            var heart = document.createElement("i")
                heart.setAttribute("class","far fa-heart heart")
              heart.addEventListener("click", function(e){
                  heart.setAttribute("class","fas fa-heart heart")
                  heart.style.color = "red";
              })
              heart.addEventListener("dblclick", function(e){
                heart.setAttribute("class","far fa-heart heart")
                  heart.style.color = "black";
              })
            var a1 = document.createElement("i")
                a1.setAttribute("class", "fas fa-less-than prev")
                // a1.setAttribute("onclick", "plusSlide(-1)")
            var a2 = document.createElement("i")
                a2.setAttribute("class", "fas fa-greater-than next")
                // a2.setAttribute("onclick", "currentSlide(1)")   
                if(el.arriv == "new"){
                    var arriv = document.createElement("p")
                    arriv.setAttribute("class","new")
                    arriv.textContent= "NEW"
                    div1.append(img1,a1,a2,heart,arriv)
                }else if(el.arriv == undefined) {
                    div1.append(img1,a1,a2,heart)
                }
        var div2 = document.createElement("div")
            div2.setAttribute("class", "textdiv")
            var price = document.createElement("h4")
            price.setAttribute("class", "prodPrice")
            price.textContent = `₹${el.price}`
            var name = document.createElement("h4")
            name.setAttribute("class", "prodName")
            name.textContent = el.name
            var a = document.createElement("a")
            a.setAttribute("href", " ")
            a.append(name.textContent)
        div2.append(price,a)  

        var div3 = document.createElement("div")
            div3.setAttribute("class","div3")
            var color = document.createElement("div")
            color.setAttribute("class","div3b1")
            color.textContent= el.color;
            var size = document.createElement("select")
            size.setAttribute("class","div3b2")
            size.innerHTML=`<option>Select Size</option>,<option>XL</option>,<option>L</option>,,<option>M</option>,<option>S</option>`
   
            var btn = document.createElement("button");
            btn.addEventListener("click",function(){
                additem(el)
            });
            btn.setAttribute("class","div3b3")
            btn.textContent = "ADD TO BASKET";

            div3.append(color,size,btn)
                    
        div.append(div1,div2,div3)
        menProducts.append(div)   
    })
    var arr = JSON.parse(localStorage.getItem("cart")) || [];
    function additem(item){
        arr.push(item);
        localStorage.setItem("cart" , JSON.stringify(arr));
        alert("You've succesfully added 1 product in cart")
    }
}
