const textarray = ["USD $","BTC","Rupees"];
const typingdelay = 200;
const earasingdelay = 100;
const newtextdelay = 2000;
let textarrayindex = 0;
let charindex = 0;

function type(){
    if(charindex < textarray[textarrayindex].length){
        document.querySelector(".typedtext").textContent += textarray[textarrayindex].charAt(charindex);
        charindex++;
        setTimeout(type,typingdelay);
    }
    else{
        setTimeout(erase,newtextdelay);
    }
}

function erase(){
    if(charindex > 0){
        document.querySelector(".typedtext").textContent = textarray[textarrayindex].substring(0,charindex-1);
        charindex--;
        setTimeout(erase,earasingdelay);
    }
    else{
        textarrayindex++;
        if(textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textarray.length) setTimeout(type, newtextdelay + 250);
        });

// var images = new Array();
//     images[0] = "images/btc-1.png";
//     images[1] = "images/lte-1.png";
//     images[2] = "images/eth-1.png";
//     var currentIndex = 0;
//     function changeImage() {    
//         if (currentIndex >= images.length){
//             currentIndex = 0;
//         }
//         $(document).ready(function(){
//             $('#front-img').fadedIn(3000);
//         })
//         var img = document.getElementById("front-img");
//         img.src = images[currentIndex];

//         currentIndex = currentIndex + 1 ;
//     }
//     setInterval(changeImage, 2000);


