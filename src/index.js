
// console.log(data);

// //You can start simple and just render a single 
// //pokemon card from the first element
// console.log(data[0]);

const cardsList = document.querySelector('.cards');
cardsList.style.listStyle = "none"



function addACard (cardData) {

    for(let i = 0; i < cardData.length; i++) {

        let liEl = document.createElement('li')
        cardsList.append(liEl)
        liEl.className = "card"

        let h2El1 = document.createElement('h2')
        liEl.append(h2El1)
        h2El1.className = "card--title"
        h2El1.innerText = cardData[i].name

        let imgEl1 = document.createElement('img')
        liEl.append(imgEl1)
        imgEl1.className = "card--img"
        imgEl1.style.width = "256"
        imgEl1.src = cardData[i].sprites.other["official-artwork"].front_default

        let ulEl1 = document.createElement('ul')
        liEl.append(ulEl1)
        ulEl1.className = "card--text"
        ulEl1.style.listStyle = "none"

        let liEl6 = document.createElement('li')
        ulEl1.append(liEl6)
        liEl6.innerText = cardData[i].stats[0].stat.name + ": " + cardData[i].stats[0].base_stat

        let liEl1 = document.createElement('li')
        ulEl1.append(liEl1)
        liEl1.innerText = cardData[i].stats[1].stat.name + ": " + cardData[i].stats[1].base_stat

        let liEl2 = document.createElement('li')
        ulEl1.append(liEl2)
        liEl2.innerText = cardData[i].stats[2].stat.name + ": " + cardData[i].stats[2].base_stat

        let liEl3 = document.createElement('li')
        ulEl1.append(liEl3)
        liEl3.innerText = cardData[i].stats[3].stat.name + ": " + cardData[i].stats[3].base_stat

        let liEl4 = document.createElement('li')
        ulEl1.append(liEl4)
        liEl4.innerText = cardData[i].stats[4].stat.name + ": " + cardData[i].stats[4].base_stat

        let liEl5 = document.createElement('li')
        ulEl1.append(liEl5)
        liEl5.innerText = cardData[i].stats[5].stat.name + ": " + cardData[i].stats[5].base_stat




        // click image to get a random sprite function
        imgEl1.addEventListener('click', spriteRandomiser)

        function spriteRandomiser() {

            let nextSprite = null
            let currentSprite = cardData[i].sprites.other["official-artwork"].front_default
            
            while(nextSprite === null || nextSprite === currentSprite) {

                nextSprite = spriteArray[Math.floor(Math.random()*spriteArray.length)]; 
            
            }

            imgEl1.src = nextSprite

        }


        const sprite1 = cardData[i].sprites.back_default
        const sprite2 = cardData[i].sprites.back_female
        const sprite3 = cardData[i].sprites.back_shiny
        const sprite4 = cardData[i].sprites.back_shiny_female
        const sprite5 = cardData[i].sprites.front_default
        const sprite6 = cardData[i].sprites.front_female
        const sprite7 = cardData[i].sprites.front_shiny
        const sprite8 = cardData[i].sprites.front_shiny_female
        const sprite9 = cardData[i].sprites.other.dream_world.front_default
        const sprite10 = cardData[i].sprites.other.dream_world.front_female
        const sprite11 = cardData[i].sprites.other["official-artwork"].front_default


        const spriteArray = [
            sprite1,
            sprite2,
            sprite3,
            sprite4,
            sprite5,
            sprite6,
            sprite7,
            sprite8,
            sprite9,
            sprite10,
            sprite11
        ];

    }
}


addACard(data)