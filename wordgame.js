let replaceButton= document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);
function replaceIt() {
let storyDiv = document.getElementById("story");
let adj1= "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";
let verbIng= "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
let roomInHouse= "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
let color= "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
let pluralNoun= "<span class='replacement'>"+ document.getElementById("pluralNoun").value + "</span>";
let verbPastTense= "<span class='replacement'>"+ document.getElementById("verbPastTense").value + "</span>";
let beverage= "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
let typeOfMusic= "<span class='replacement'>"+ document.getElementById("typeOfMusic").value + "</span>";
let diffRoom= "<span class='replacement'>"+ document.getElementById("diffRoom").value + "</span>";
let exclamation= "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
let verbPstTns= "<span class='replacement'>"+ document.getElementById("verbPstTns").value + "</span>";
let adj2= "<span class='replacement'>"+ document.getElementById("adj2").value + "</span>";
let nameOfAnimal= "<span class='replacement'>"+ document.getElementById("nameOfAnimal").value + "</span>";
let nameOfCity= "<span class='replacement'>"+ document.getElementById("nameOfCity").value + "</span>";
let Verb= "<span class='replacement'>"+ document.getElementById("Verb").value + "</span>";
/*Instert mote variable definitions here*/
let theStory;
theStory= "<h1>Douglas's Dance Party</h1>";
theStory += "One "+ adj1 + " day,";
theStory += "Douglas was "+ verbIng;
theStory += "in his"+ roomInHouse;
theStory += ", reading a book about "+ color + pluralNoun + ".";
theStory += "As he"+ verbPastTense + "his" + beverage + ",";
theStory += "he heard"+ typeOfMusic;
theStory += "music playing in the"+ diffRoom + ".";
theStory += exclamation + "!";
theStory += "he exclaimed, as he"+ verbPstTns;
theStory += "down the stairs to join the"+ adj2 + "party";
theStory += "Douglas danced the"+ nameOfAnimal + "Dance";
theStory += "the"+ nameOfCity + "twist, and took the prize for dancing the best electric" + Verb;
/*Put the rest of the story here, using the += operator */
storyDiv.innerHTML = theStory;
}