
// console.log(data);

// //You can start simple and just render a single 
// //pokemon card from the first element
// console.log(data[0]);

const cardsClass = document.querySelector('.cards');



function addACard (cardData) {

for(let i = 0; i < cardData.length; i++) {

    let liEl = document.createElement('li')
    cardsClass.append(liEl)
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

    }
}



addACard(data)