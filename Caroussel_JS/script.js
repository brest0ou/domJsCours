"use strict"
/*pour le site
 1 - cree mon titre 'Carousel JS'
 2 - tout placer au milieu 
 
  pour l'évenement changer une image au clique
  1- je vais afficher une image sur le site
  2- je vais crée un evenement pour cliquer sur cet image 
  3- quand je clique sur cet image elle doit passer à la suivante 
  4- donc à chaque clique je change d'image 

  Futur problème
  L'évènement clique doit s'activer uniquement sur l'image
  lorsque l'on arrive à la 5eme image : on revient au départ

  Pour le style 
  1- je crée une petite bordure noir au passage de la souris  sur mon images

  Outil :
  addEventListener()
  querySelector()
  Fonctions
  Boucles????
  Tableau ( pour stocker les images): la sources

*/


// CODE 

//cibler les éléments

let carousel = document.querySelector('.carousel');

let images = ['espace.jpg',
              'galaxyViolette.jpg',
              'nasa.jpg',
              'souseau.jpg',
              'volcan.jpg' ]

let index = 0
//Ajouter l'écouteur d'event
carousel.addEventListener('click',changeUrl)

function changeUrl() {
  
  index++;
  if (index == images.length)
   {
      index=0;
   }
  carousel.style.backgroundImage =`url(./images/${images[index]})`;
  console.log(images[index]);

  
}