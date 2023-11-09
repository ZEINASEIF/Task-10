
var div1= document.querySelector("#div1")
var showPriceBtn = document.querySelector("#show-price")
var allproducts = document.querySelectorAll(".card-body button")
var totpriceh3 = document.querySelector("#final-price")
var cartNum = document.querySelector("#cart-num")
var totalPrice=0
var numItems=0
var itemTitle=""

//////////////////////////////////////////////////////////////////////////////////////////////////////
allproducts.forEach(function(item){
    item.onclick=function(){
        totalPrice += +(item.getAttribute("price"))
        itemTitle = item.getAttribute("title")
        div1.innerHTML+= "<i class='fas fa-arrow-right' fs-5></i>" +" " + itemTitle  +"<br>" 
        numItems++
        cartNum.innerHTML= numItems
        if (div1.innerHTML !== ""){
            showPriceBtn.style.display="block"
        }
       
    }
})



showPriceBtn.onclick=function(){
    
    
    totpriceh3.innerHTML=  totalPrice  +" <span>$</span> " 

}  

    
