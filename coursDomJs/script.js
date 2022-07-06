let p = document.getElementById('paragraphe');
let imgs = document.getElementsByTagName('img')

console.log(p);

imgs[0].src = "arbre.jpg";

imgs[0].alt="un arbre"

// test 

//recuper image random est l'ajouter à chaque <img src="">

for (let i =0; i< 10; i++)
{
    
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://dog.ceo/api/breeds/image/random',true)
    
    xhr.onload = function ()
    {
        if ((xhr.readyState === 4)&&(xhr.status ===200))
        {
            let json = JSON.parse(xhr.responseText).message;
            console.log(json)
            // maintenant j'essaye de crée des <img src="" alt""> à chaque iteration de boucle
            const IMG = document.createElement('img');
            IMG.setAttribute('src',+ json);
            const DIV = document.getElementById('div-img');
            DIV.appendChild(IMG);
            
            imgs[i].src= ''+ json +''
                
        }
    }
    
    xhr.send()
}

const ELEMENT = document.getElementsById('div-img');






