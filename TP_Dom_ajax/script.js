"use strict"
// Création du XMLHttpRequest object
//let xhr = new  XMLHttpRequest();

//Gestion de la réponse

// 1 - pouvoir  cliquer sur le bouton "ajouter un chien"
// 2 - au moment ou je clique je veux envoyer ma demande Json et la recevoir 
// 3 - l'afficher la place de mon carré bleu

/*
let btn = document.querySelector('[type=button]');
let divRectangle = document.querySelector('.rectangle')
var url;

btn.addEventListener('click',Click)

function Click(event)
{
    
    switch(event.type)
    {
        case'click':
            console.log("je clique là")
            // Initialiser et Parametrer notre requête 
    //xhr.open('GET','https://randomuser.me/api/', true);
        xhr.open('GET','https://dog.ceo/api/breeds/image/random', true);
            xhr.onload = function ()
            {
                if ((xhr.readyState === 4) && (xhr.status === 200))
                {
                    //Gestion de la réponse
                    url = JSON.parse(xhr.responseText)["message"];
                    
                }
                
            }
            //On envoye la requête
            xhr.send();
            this.style="background-image: url("+url+")";
            break;
            
    }
    
}*/


// CORRECTION ------------

// 1
let button = document.querySelector('button');
let image = document.querySelector('.square');

// 2
button.addEventListener('click',changeImage);

// 3
function changeImage()
{
// Création du XMLHttpRequest object
let xhr = new  XMLHttpRequest();
//Gestion de la réponse
// Initialiser et Parametrer notre requête 
    //xhr.open('GET','https://randomuser.me/api/', true);
    xhr.open('GET','https://dog.ceo/api/breeds/image/random', true);
    xhr.onload = function ()
    {
        if ((xhr.readyState === 4) && (xhr.status === 200))
        {   //Gestion de la répons // marche aussi )['message']
            //endpoint
            const url = JSON.parse(xhr.responseText).message;
           // image.style.backgroundImage = 'url(' +url+ ')'
            image.style.backgroundImage = `url( ${url} )` ;
        }
        
    }
    //On envoye la requêteS
    xhr.send();
};



/* 
1 - Crée un selecteur 'html' qui se nomme "choisir une race" - OK !
2 - avoir 4 nom de races - OK !
    - Akita
    - Bouvier
    - French Bulldog
    - Chihuahua
3 - on va demander à l'utilisateur de choisir une race - OK !
4 - quand il clique sur le bouton on doit afficher la race choisis par l'utilisateur
*/

let selector = document.querySelectorAll('option');

let listRace;

function recupRace(){
let xhr2 = new XMLHttpRequest();

xhr2.open ('GET','https://dog.ceo/api/breeds/list/all', true);

xhr2.onload = function () 
{
    if((xhr2.readyState === 4) && (xhr2.status === 200))
    {
        listRace = JSON.parse(xhr2.responseText)
        console.log(listRace);
    }
    
}

xhr2.send()
}

recupRace()

console.log(selector);












