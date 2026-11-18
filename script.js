let cartCount = 0;

function addCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    alert("✅ Item added to cart!");
}

// Order Now Button
const orderBtn = document.getElementById("order-btn");

orderBtn.addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
});

// Search Function
const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(function(card){

        let name = card.querySelector("h3").innerText.toLowerCase();

        if(name.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// Category Buttons
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let category = button.innerText.toLowerCase();

        let cards = document.querySelectorAll(".food-card");

        cards.forEach(function(card){

            let name = card.querySelector("h3").innerText.toLowerCase();

            if(category.includes("pizza")){
                card.style.display = name.includes("pizza") ? "block" : "none";
            }

            else if(category.includes("burger")){
                card.style.display = name.includes("burger") ? "block" : "none";
            }

            else if(category.includes("fries")){
                card.style.display = name.includes("fries") ? "block" : "none";
            }

            else if(category.includes("drinks")){
                card.style.display = (name.includes("drink") || name.includes("cold")) ? "block" : "none";
            }

        });

    });

});

// Double-click logo to reset filters
document.querySelector(".logo").addEventListener("dblclick", function(){

    document.getElementById("search").value = "";

    document.querySelectorAll(".food-card").forEach(function(card){
        card.style.display = "block";
    });

});

// Welcome Message
window.onload = function(){

    setTimeout(function(){

        alert("🍔 Welcome to FoodHub!\nEnjoy Delicious Food.");

    },500);

};