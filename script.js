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

            <div class="cafe-content">
            <h3>${cafe.name}</h3>
            <p>${cafe.description}</p>
        

            <a href="${cafe.maps}" target="_blank" class="maps-link">Auf Google Maps öffnen</a>

            </div>
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

        { name: "Hane cikolata ve Kahve", 
        description: "Sieht sehr ansprechend aus, gbit es auch in Üsküdar(an sehr vielen Orten).  4*",
        image: "images/hanecikolata.jpg",
        maps: "https://hanecikolatavekahve.com/subeler/" },

        { name: "Amata", 
        description: "Cafe aber auch Frühstück(sieht sehr lecker aus), auch Obst mit Schockolade.  4*",
        image: "images/amata.jpg",
        maps: "https://share.google/y7BIdehUOn3lfkUAx" },

        { name: "Sushirap", 
        description: "Sushi Dürüm zum mitnehmen.  5*",
        image: "images/rap.jpg",
        maps: "https://share.google/NHm8no9ifoDHsvgpz" },

        { name: "Kizil Sakal", 
        description: "Sandwich mit Soßen, vielleicht gut für bissien mehr basic und Portmonnaie.  3*",
        image: "images/kizil.jpg",
        maps: "https://share.google/mARQYKDzwO4qfQUBD" },

        { name: "Moda da nata", 
        description: "Portugiesische mini Torten. Wenn wir nicht dorthin gehen können dann sollen die hierherkommen.  5*",
        image: "images/moda.jpg",
        maps: "https://share.google/GzmQvRm4Jg4fYxQ0Q" },

         { name: "Hello Fries", 
        description: "Pommes wie in Amsterdam, basic aber gut.  3*",
        image: "images/fries.jpg",
        maps: "https://share.google/oX1VrqLCC1ZhoLZXa" },

        { name: "Kuki'n more", 
        description: "Saftige Cookies mit so Soßen und mehr(Pflicht dorthin zu gehen).  5*",
        image: "images/kukin.jpg",
        maps: "https://share.google/7FcbG1RtfcTeBv9jA" },

        { name: "Mr.Dumpling", 
        description: "Mantis 480-560tl.  4*",
        image: "images/mr.jpg",
        maps: "https://share.google/v1X61RW9m6NBfNVxG" },

        { name: "Feline Magnolia Shop", 
        description: "Tiramisu im Becher(Muss man probieren).  5*",
        image: "images/feline.jpg",
        maps: "https://share.google/Nk079LPAYtMOqLxjD" },

        { name: "Baobao", 
        description: "Süße Baobaos.  5*",
        image: "images/baobao.jpg",
        maps: "https://share.google/cGNKkfz3rI5JqsK4f" },

        { name: "The Chicken Club", 
        description: "Sehr bekannte Burgerladen, ein Menü 380tl.  5*",
        image: "images/club.jpg",
        maps: "https://share.google/K2JTyYz2PfyRXc414" },

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

        { name: "Sarayburnu Aile cay bahcesi", 
        description: "Direkt am Meeer, schöne Aussicht für so am Abend.  5*",
        image: "images/sarayburnu.jpg",
        maps: "https://share.google/Iv5ISLwhZhBxiVFUu" },


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
        description: "Lotuslu Trilice, alle Kuchen 250tl.  4*",
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

        { name: "Lema Tatli ve Kahve", 
        description: "Solche bowls mit Obst und Schockolade und so.  4*",
        image: "images/lema.jpg",
        maps: "https://share.google/4jE6YkDpGWIPD9ZEb" }, 

        { name: "NevMekan Kandilli", 
        description: "Sosyal Tesis, etwas billiger und schöne Ort.  3*",
        image: "images/nevmekan.jpg",
        maps: "https://share.google/zDpBGPpSzXMl9ttVI" }, 

        { name: "La Respiro", 
        description: "Ev yapimi yemekler, sarma, manti und gözleme.  5*",
        image: "images/lar.jpg",
        maps: "https://share.google/AoDDrbf3q14fLhyAw" },

        { name: "Cim's Artisan Patisserie", 
        description: "Französische Kuchen und Gebäck (Kahve 140-250tl und Tatlilar 345-430tl).  5*",
        image: "images/cims.jpg",
        maps: "https://share.google/6Ji0EBCEdE5h0WPGv" },

        { name: "Leticia Patissierie and more", 
        description: "Schöne Desserts.  4*",
        image: "images/leticia.jpg",
        maps: "https://share.google/q7FLewalzoxrmGWBF" },

        { name: "Fast and Fresh", 
        description: "Bowls für guten Preis 200tl.  3*",
        image: "images/fast.jpg",
        maps: "https://share.google/fNuaSAyFrm7QPc7ef" },

        { name: "Alti Üstü Köfte", 
        description: "Sehr saftige Köfte und bekannt.  4*",
        image: "images/alt.jpg",
        maps: "https://share.google/wVyLtYyUVdasgxEcD" },

        { name: "Loco Taqueria", 
        description: "Dicke Burritos und Tacos.  4*",
        image: "images/loco2.jpg",
        maps: "https://share.google/bCvMdSqGTNZcNfoDI" },



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

        { name: "Shabby", 
        description: "Saftige Schockokuchen und solche bowls.  4*",
        image: "images/shabby.jpg",
        maps: "https://share.google/dh4ruedMrGzHHEvoi" },

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

    ],
    "Bakirköy": [
        { name: "ChuChat", 
        description: "Asiatische Getränke, solche neue.  4*",
        image: "images/chuchat.jpg",
        maps: "https://share.google/AB773DcdZ96gpzzM8" },
        
        { name: "PufPuf", 
        description: "Japanische Pancake und Getränke(sehr schöne Laden diesmal).  4*",
        image: "images/puf.jpg",
        maps: "https://share.google/qQBUKWul6RvwHzMRV" }, 

    ],

    "Zeytinburnu": [
        { name: "The Levant Tahinier Fisekhane", 
        description: "Fancy Cafe, aber bissien teuer (cay 150tl, Cappucchino 375tl, Tatilar 700tl).  4*",
        image: "images/levant.jpg",
        maps: "https://share.google/aAQ4hZxpkg2gx6fxX" }, 


    ],
    "Beyoğlu": [
        { name: "Just Fried Chicken", 
        description: "Saftige Burger (ein Burger 420tl).  4*",
        image: "images/just.jpg",
        maps: "https://share.google/1VACfq7aCqq6dS4EW" }, 

    ],





}