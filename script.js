const neighborhoods = document.querySelectorAll('.neighborhood');

const details = document.querySelector('#neighborhoodDetails');
const title = document.querySelector('#neighborhoodTitle');

const homePage = document.querySelector('#homePage');
const backButton = document.querySelector('#backButton');

const cafeDetails = document.querySelector('#cafeDetails');
const cafeButton = document.querySelector('#cafeButton');
const backButtonCafe = document.querySelector('#backButtonCafe');
const cafeTitle = document.querySelector('#cafeTitle');
const cafeList = document.querySelector('#cafeList');

neighborhoods.forEach(neighborhood =>{
        neighborhood.addEventListener('click', function() {
            const name = neighborhood.dataset.name;
            title.textContent = name;
            homePage.style.display = 'none';
            details.style.display = 'block';
        });
    });


    backButton.addEventListener('click', function() {   
    details.style.display = 'none';
    homePage.style.display = 'block';
});

cafeButton.addEventListener('click', function() {

    cafeList.innerHTML = ''; //alte Cafes entfernen, bevor neue hinzugefügt werden

    //alert('Cafes wurde geklickt');
    details.style.display = 'none';
    cafeDetails.style.display = 'block';

    cafeTitle.textContent = 'Cafes in ' + title.textContent;

    const selectedNeighborhood = title.textContent; //name des ausgewählten Stadtteils
    const selectedCafes = cafes[selectedNeighborhood]; //cafes des ausgewählten Stadtteils herausnehmen 

    selectedCafes.forEach(cafe => {
        const cafeCard = document.createElement('div'); //sagt html erstelle ein neues div element
        cafeCard.classList.add('cafe-card'); //fügt dem div element die klasse cafe-card hinzu
        cafeCard.innerHTML = `
        <img src="${cafe.image}" alt="${cafe.name}">
            <h3>${cafe.name}</h3>
            <p>${cafe.description}</p>
        

            <a href="${cafe.maps}" target="_blank" class="maps-link">Auf Google Maps öffnen</a>
        `;
        cafeList.appendChild(cafeCard); //fügt das div element dem elternteil cafeList hinzu
        
    }); 
});


backButtonCafe.addEventListener('click', function() {
    cafeDetails.style.display = 'none';
    details.style.display = 'block';
});

const cafes = {
    "Kadiköy": [
        { name: "Taico", 
        description: "Matcha Taiyaki Eis.  4*",
        image: "images/taico.jpg",
        maps: "https://share.google/UbvhY29v2Y2Ixny3C" },
        
        { name: "Limon Lokal", 
        description: "Limon Kabugunda Sorbe.  4*",
        image: "images/LimonLokal.jpg",
        maps: "https://share.google/v5wFHb5xz6oc2R0im" },  

        { name: "Miso Korean Restaurant", 
        description: "Tteobokki, Ramyeon (370tl, 390tl).  4*",
        image: "images/misokorean.jpg",
        maps: "https://share.google/effJoD7SsHkStvTms" },

        { name: "Kemal Usta Waffles", 
        description: "Erik Eis.  2*",
        image: "images/kemalusta.jpg",
        maps: "https://share.google/6swK99zRzBW4dwAbS" },

    ],
    "Fatih": [
        { name: "Zafer Uygur Restaurant", 
        description: "Ramen mit frischen Nudeln (199tl).  4*",
        image: "images/zaferuygur.jpg",
        maps: "https://share.google/TtJCTGkGZkXeJnNO0" },

        { name: "Yagami japanese & sushi", 
        description: "Sushi, Ramen, sieht sehr schön aus.  5*",
        image: "images/yagami.jpg",
        maps: "https://share.google/N3lwJyzgkSH1Fvlaq" },


    ],
    "Üsküdar": [
        { name: "Pirin 1960 butik ci'küfte", 
        description: "Cigköfte, sieht sehr saftig aus (810tl für 3 Leute Teller).  5*",
        image: "images/pirin.jpg",
        maps: "https://share.google/8MjLrZn5O1rH2qvDZ" },

        { name: "Suppa Üsküdar Kebapci", 
        description: "Dürüm, Lahmacun (450ß-520tl).  4*",
        image: "images/suppa.jpg",
        maps: "https://share.google/bT5JQz2Gzq7jxyHYx" },

        { name: "Vanilla Üsküdar", 
        description: "Lotuslu Trilice.  3*",
        image: "images/vanilla.jpg",
        maps: "https://share.google/t7ED42edihBHZEyJ9" },

       { name: "Cappadocia Coffee & Bakery ", 
        description: "Cafe mit Kuchen, schöne Ambiance.  4*",
        image: "images/capadocia.jpg",
        maps: "https://share.google/EZxVQaSTEdMdiOyuj" }, 

        { name: "Kebapci Cengiz", 
        description: "Pide (350tl) Kebap (490tl), basic aber gute Preise.  4*",
        image: "images/kebapcicengiz.jpg",
        maps: "https://share.google/UMSN8YPtDlRFwKIKO" }, 

    ],
    "Ümraniye": [
        { name: "Cafe C", 
        description: "A vibrant cafe with live music.",
        maps: "https://maps.google.com/?q=202+Maple+Ave,+Ümraniye" },
    ],
     "Beşiktaş": [
        { name: "Uji", 
        description: "Ube Spaghetti Eis, sieht richtig fancy aus.  5*",
        image: "images/uji.jpg",
        maps: "https://share.google/KzDgdyvooJpfhXNZ1" }, 

        { name: "Ransserie", 
        description: "Bingsu/Koreanische Eis (Mango/Erdbeere 420tl), sieht fruchtig aus.  5*",
        image: "images/ransserie.jpg",
        maps: "https://share.google/Zm3K4GgzRL7WL2ZLc" },

        { name: "Seker Ahmet pasa cay salonu", 
        description: "Tee+Kuchen im Schloss (280-390tl).  5*",
        image: "images/sekerahmet.jpg",
        maps: "https://share.google/y5vTmW66549WNvnDo" },

    ],
     "Karaköy": [
        { name: "Meshur Balikci Mehmet Usta", 
        description: "Fisch Dürüm (300tl).  4*",
        image: "images/balikci.jpg",
        maps: "https://share.google/oJVxtr8dL6U1blB2E" }, 

        { name: "Factory Karaköy", 
        description: "Croissant mit Schockolade & Obst.  5*",
        image: "images/factory.jpg",
        maps: "https://share.google/HTuE8Ty7e6yUeABrQ"},

    ]

}