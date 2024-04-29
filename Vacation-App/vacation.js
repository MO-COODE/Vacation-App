
const detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit );

function handleFormSubmit(e) {
    e.preventDefault();


    const destName = e.target.elements['name'].value;
    const destLocation = e.target.elements['location'].value;
    const destPhoto = e.target.elements['photo'].value;
    const destDescription = e.target.elements['description'].value;

    for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    };


    //generating HTML for card
    let destinationCard = generateDestinationCard(destName, destLocation, destPhoto, destDescription)

    const listContainer = document.getElementById('destination_container');
    const title = document.getElementById('title');

    if(listContainer.children.length === 0){
        title.innerHTML = 'My Wish list';
    };

    //add card
    document.querySelector('#destination_container').appendChild(destinationCard)


};

function generateDestinationCard(name, location, photoURL, description) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);

    const constantPhotoURL = '/images/image1.jpg';

    if(photoURL.length === 0) {
        img.setAttribute('src', constantPhotoURL)
    } else {
        img.setAttribute('src', photoURL)
    }

    card.appendChild(img)

    let cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardbody.appendChild(cardTitle);


    let cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardbody.appendChild(cardSubTitle);

    if(description.length !== 0){
        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardbody.appendChild(cardText);
    };

    let cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardbody.appendChild(cardDeleteBtn);

    card.appendChild(cardbody);

    return card;

};

//remove card
function removeDestination(e) {
    let card = e.target.parentElement.parentElement;
    card.remove();
};

