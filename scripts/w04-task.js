/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Lucas Mercau",
    photo : "images/profilepicture.png",
    favoriteFoods : [
        "Burger", 
        "Lemon Pie", 
        "Pizza", 
        "Ice Cream",
        "Milanesas"
    ],
    hobies : [
        "Read books",
        "Camping",
        "Take pictures"
    ],
    placesLived : []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : "Chacras, Mendoza",
        length : "18 years"
    },
    {
        place : "Rancagua, Chile",
        length : "2 years"
    },
    {
        place : "Capital, Mendoza",
        length : "2 years"
    },
    {
        place : "Chacras, Mendoza",
        length : "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile["photo"]);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach( (food) => {
    let li = document.createElement("li"); // Here we one create <li>
    li.textContent = food; // Inside li = <li></li> we put a string of FavoriteFoods
    document.querySelector("#favorite-foods").appendChild(li); //We append <li>food<li> to <ul id=favorite-foods></ul>
});

/* Hobbies List */
myProfile.hobies.forEach( (hobbie) => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((i) => {
    let dt = document.createElement("dt");
    dt.textContent = i.place;
    let dd = document.createElement("dd");
    dd.textContent = i.length;
    document.querySelector("#places-lived").append(dt, dd);
})
