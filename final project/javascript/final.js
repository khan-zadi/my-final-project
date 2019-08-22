function link(){
    location.assign("https://www.facebook.com");
}
function link2(){
    location.assign("https://www.instagram.com");
}
function link3(){
    location.assign("https://twitter.com");
}
function link4(){
    location.assign("https://en.wikipedia.org/wiki/Coffee");
}
function logo(){
    location.assign("C:/Users/aaa/Desktop/final project/index.html/final.html");
}
function about(){
    location.assign("C:/Users/aaa/Desktop/final project/index.html/final about.html");
}
function menu(){
    location.assign("C:/Users/aaa/Desktop/final project/index.html/final menu.html");
}
function gallery(){
    location.assign("C:/Users/aaa/Desktop/final project/index.html/final gallery.html");
}
function contact(){
    location.assign("C:/Users/aaa/Desktop/final project/index.html/final contact.html");
}
//contact us//
function fun(a){
    a.style.backgroundColor="orange";
}
function funn(a){
    a.style.backgroundColor="white";
}
//MENU//
pname=[];
quantity=[];
price=[];

function addItem(){
    pname.push(document.getElementById("pro").value);
    quantity.push(parseInt(document.getElementById("qun").value));
    price.push(parseInt(document.getElementById("rupee").value));
    displayCart();
}
function displayCart(){
    cartdata="<table><tr><th>Coffee Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>";
    total=0;
    for(i=0;i<pname.length;i++){
        total+=quantity[i] * price[i]
        cartdata+="<tr><td>" + pname[i] + "</td><td>" + quantity[i] + "</td><td>" + price[i] + "</td><td>"
        + quantity[i] * price[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
    }
    cartdata += "<tr><td></td><td></td><td></td><td>" + total + "</td></tr></table>" 

    document.getElementById("card").innerHTML = cartdata;
}
function delElement(x){
    pname.splice(x, 1);
    quantity.splice(x, 1);
    price.splice(x, 1);
    displayCart();
}
const openModalButtons=document.querySelectorAll('[data-modal-target]');
const closeModalButtons=document.querySelectorAll('[data-close-button]');
const overlay=document.getElementById("overlay");
      
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal=document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        })
    });   
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal=button.closest('.modal')
            closeModal(modal);
        })
    });
    overlay.addEventListener("click",() => {
        const modal=document.querySelectorAll(".modal.active")
        modal.forEach(modal=>{
            closeModal(modal);
        })
    })
    function openModal(modal){
        if(modal==null) return
        modal.classList.add('active');
        overlay.classList.add("active");
    }
    function closeModal(modal){
        if(modal==null) return
        modal.classList.remove('active');
        overlay.classList.remove("active");
}
function showCartItems(){
    var theCartItems=document.getElementById('cartItemImages');
    var theImagesNodeList=theCartItems.getElementsByTagName('div');
    for(i=0;i<theImagesNodeList.length;i++){
        theImagesNodeList[i].style.position="absolute";
        theImagesNodeList[i].style.top=(10*i)+"px";
    }
}
function findIfIdExits(obj, id){
    var theNodeList=obj.getElementsByTagName("div");
    for(NodeNumber=0; NodeNumber<theNodeList.length;NodeNumber++){
        if(theNodeList[NodeNumber].id===id){
            return NodeNumber+1;
        }
    }
    return 0;
}
function ContinueShopping(){
document.getElementById("products").style.visibility="visible";
document.getElementById("TheCart").style.visibility="hidden";
}
function AddToCart(itemToAdd){
var TheCartItemImages=document.getElementById('cartItemImages');
var foundNodeCount=findIfIdExits(TheCartItemImages,"cartItem"+itemToAdd);
showCartItems();
document.getElementById("products").style.visibility="hidden";
document.getElementById("TheCart").style.visibility="visible";
}
