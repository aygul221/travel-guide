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

const activityDetails = document.querySelector('#activityDetails');
const activityButton = document.querySelector('#activityButton');
const backButtonActivity = document.querySelector('#backButtonActivity');
const activityTitle = document.querySelector('#activityTitle');
const activityList = document.querySelector('#activityList');

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

        { name: "Casnigir Lezzetcibasi Kadiköy", 
        description: "Solche gün Tepsileri, ein Teller 380tl.  5*",
        image: "images/cas.jpg",
        maps: "https://share.google/yH4NpftGTIhMw2I46" },

        { name: "Swievel Cafe & Bakery", 
        description: "Diese runde Baumkuchen mit Schockolade drinne.  4*",
        image: "images/swi.jpg",
        maps: "https://share.google/goaZtwaartZjNbMPt" },

        { name: "Valeria Coffee", 
        description: "Creme Brulee, französische Dessserts und schöne Cafe.  4*",
        image: "images/val.jpg",
        maps: "https://share.google/J6Id7ssYiIfAj3mGF" },

        { name: "Soho Smashburger", 
        description: "Sehr bekannte Burgerladen.  5*",
        image: "images/soho.jpg",
        maps: "https://share.google/swhuMPpysd3ifXpWs" },

        { name: "Halil Lahmacun", 
        description: "Saftige Lahmacuns.  5*",
        image: "images/halil.jpg",
        maps: "https://share.google/yZj9xYt9XBXrwXWP3" },

        { name: "Sliceguy Pizza", 
        description: "Saftige Brot.  5*",
        image: "images/slice.jpg",
        maps: "https://share.google/bELmmRF93bYXQQXdE" },


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

        { name: "Özkan Köfteci", 
        description: "Soll extrem lecker sein, ein Teller 400tl.  5*",
        image: "images/özkan.jpg",
        maps: "https://share.google/NxrUqWswzLWuM91La" },

        { name: "Set Elsam", 
        description: "Syrisches Essen.  4*",
        image: "images/set.jpg",
        maps: "https://share.google/oRvgWvEWbLinsZqEe" },

        { name: "Öz Kilis Kebap & Lahmacun Restaurant", 
        description: "Sollen einer der besten Lahmacuns haben.  5*",
        image: "images/öz.jpg",
        maps: "https://share.google/G2Ru9G7kePfPe4f42" },

        { name: "Barbaros Yogurtcusu", 
        description: "Yoghurt mit Honig und so, soll sehr alt und lecker sein.  3*",
        image: "images/bar.jpg",
        maps: "https://share.google/glijnGpRihKZlxsP1" },

        { name: "Kiztas Muhallebicisi", 
        description: "Leckere Kazandibi zum ausprobieren, 220tl.  4*",
        image: "images/kiz.jpg",
        maps: "https://share.google/JMVao7HeyMxCaotjC" },

        { name: "Kebapci Tevfik Usta", 
        description: "Hatay Dürüm.  4*",
        image: "images/tev.jpg",
        maps: "https://share.google/dc8W3ztj8IHlWkUpR" },

        { name: "Gurmania Misir Casrsisi", 
        description: "Richtig saftige Berliner.  5*",
        image: "images/gur.jpg",
        maps: "https://share.google/GjmbXYlwWNTEorP0f" },

        { name: "Lezzeti Sark", 
        description: "Traditionelles türkisches Essen.  4*",
        image: "images/lez.jpg",
        maps: "https://share.google/dr8bWmyMtMmNsqcRZ" },

        { name: "Süleymaniye Cikolatacisi", 
        description: "Cafe mit viel Schockolade und sehr schöne Umgebung.  5*",
        image: "images/sül.jpg",
        maps: "https://share.google/VP06wwMrYAo9Tz6wl" },

        { name: "Dönerci Sahin Usta", 
        description: "Yaprak Döner, wirklich einfach gehaltenes Dönerfleisch.  5*",
        image: "images/sahin.jpg",
        maps: "https://share.google/unPmNHgbqFLi2aCUI" },

        { name: "Tostcu Kamil", 
        description: "Tost.  5*",
        image: "images/kamil.jpg",
        maps: "https://share.google/xkYRx8TskUVbzUX6e" },




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

        { name: "Pizza Incanto", 
        description: "Traditionelle italienische Pizzen.  3*",
        image: "images/incanto.jpg",
        maps: "https://share.google/FlvoJ8r8jDLp40qfh" },


    ],
    "Ümraniye": [
        { name: "Mio Cesta cafe & Restaurant", 
        description: "Süßes Cafe.  5*",
        image: "images/mio.jpg",
        maps: "https://share.google/RAsMLDoSow80lcYi2" },

        { name: "Asker Usta", 
        description: "Lahmacun, Kebap und mehr.  4*",
        image: "images/usta.jpg",
        maps: "https://share.google/gI9EEEUrhYFcEi8Vz" },


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

        { name: "Como Bakery", 
        description: "Italienische Desserts.  3*",
        image: "images/como.jpg",
        maps: "https://share.google/Q7q19LDezm18hv5dY" },

        { name: "Tostcu Erol", 
        description: "Tost.  5*",
        image: "images/erol.jpg",
        maps: "https://share.google/wiAsE3rBd7MOAZy1v" },

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

        { name: "Karaköy Sokak Dürümcüsü", 
        description: "Sehr saftige Dürüms.  5*",
        image: "images/sok.jpg",
        maps: "https://share.google/nSCfJbHiTBHNyGfyg"},

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

        { name: "Norito Kitchen", 
        description: "Koreanische Küche von diesem Influencer.  4*",
        image: "images/norito.jpg",
        maps: "https://share.google/97nXUsXpAXVfXYGuT" }, 

        { name: "Missvanilaa", 
        description: "Schöne Desserts und saftige Cookies.  4*",
        image: "images/miss.jpg",
        maps: "https://share.google/B8fEIGKYpN1BPQ1Qt" }, 

    ],

    "Zeytinburnu": [
        
        { name: "The Levant Tahinier Fisekhane", 
        description: "Fancy Cafe, aber bissien teuer (cay 150tl, Cappucchino 375tl, Tatilar 700tl).  4*",
        image: "images/levant.jpg",
        maps: "https://share.google/aAQ4hZxpkg2gx6fxX" },
        
        { name: "Jie Fisekhane", 
        description: "Restaurant mit besonderem Konzept, asiatisches Essen (Preise: 850tl).  4*",
        image: "images/levant.jpg",
        maps: "https://share.google/aAQ4hZxpkg2gx6fxX" },


    ],
    "Beyoğlu": [
        { name: "Just Fried Chicken", 
        description: "Saftige Burger (ein Burger 420tl).  4*",
        image: "images/just.jpg",
        maps: "https://share.google/1VACfq7aCqq6dS4EW" }, 

        { name: "Asia Palace - Ramen & Sushi", 
        description: "Die haben noch vieles mehr, sieht saftig aus (Ramen ca. 250tl).  4*",
        image: "images/asiapalace.jpg",
        maps: "https://share.google/Y7Odb7WKgu6S0ryyn" }, 

        { name: "1932 Cihangir Doyum Manti", 
        description: "Manti.  5*",
        image: "images/cih.jpg",
        maps: "https://share.google/fr6IfPynKlpIXB4IV" }, 

        { name: "Kizilkayalar Taksim", 
        description: "Wet Burger.  4*",
        image: "images/taksim.jpg",
        maps: "https://share.google/yRiijvrzGSsH3KTCm" }, 

        { name: "Helvetia", 
        description: "Meze Tabaklari (400.500tl).  4*",
        image: "images/hel.jpg",
        maps: "https://share.google/aN04QnlUcNWTyZPdf" }, 
    ],

    "Sisli": [
        { name: "Mahir Lokantasi", 
        description: "Michelin traditionelle türkische Gerichte aber billiger.  5*",
        image: "images/mahir.jpg",
        maps: "https://share.google/VDgwmgoXaXwNyEizL" }, 

    ],

    "Beykoz": [
        { name: "The Levant Tahinier Fisekhane", 
        description: "Yaprak Döner sehr bekannt.  4*",
        image: "images/bay.jpg",
        maps: "https://share.google/ownWWqILbowcoosnw" }, 

    ],

    "Kücükcekmece": [
        { name: "Sebit Kayseri Mutfagi", 
        description: "Yaglama, muss ich noch mehr sagen (460tl) 5*",
        image: "images/sebit.jpg",
        maps: "https://share.google/glXNODXT01t8PbFXh" }, 


    ],




}

activityButton.addEventListener('click', function() {

    activityList.innerHTML = ''; //alte aktivitäten entfernen, bevor neue hinzugefügt werden

    //alert('Aktivität wurde geklickt');
    details.style.display = 'none';
    activityDetails.style.display = 'block';

    activityTitle.textContent = 'Aktivitäten in ' + title.textContent;

    const selectedNeighborhood = title.textContent; //name des ausgewählten Stadtteils
    const selectedActivityies = activities[selectedNeighborhood]; //cafes des ausgewählten Stadtteils herausnehmen 

    selectedActivityies.forEach(activity => {
        const activityCard = document.createElement('div'); //sagt html erstelle ein neues div element
        activityCard.classList.add('activity-card'); //fügt dem div element die klasse cafe-card hinzu
        activityCard.innerHTML = `
        <img src="${activity.image}" alt="${activity.name}">

            <div class="activity-content">
            <h3>${activity.name}</h3>
            <p>${activity.description}</p>
        

            <a href="${activity.maps}" target="_blank" class="maps-link">Auf Google Maps öffnen</a>

            </div>
        `;
        activityList.appendChild(activityCard); //fügt das div element dem elternteil cafeList hinzu
        
    }); 
});


backButtonActivity.addEventListener('click', function() {
    activityDetails.style.display = 'none';
    details.style.display = 'block';
});

const activities = {
    "Kadiköy": [

        { name: "Cilek Sokak", 
        description: "Straße mit vielen Läden und Märkten.",
        image: "images/cilek.jpg",
        maps: "https://share.google/12xjbRDADlaEMc1JZ" }, 
        
    ],

    "Fatih": [

        { name: "Topkapi Sarayi", 
        description: "Altes Schloss + Museum.",
        image: "images/topkapi.jpg",
        maps: "https://share.google/GHqOG2byq7RfyX8uq" }, 

        { name: "Isikli Kano", 
        description: "Kano Nachts mit Belichtung, 20.45 Uhr.",
        image: "images/kano.jpg",
        maps: "https://isiklikano.com/" }, 

        { name: "Boncuk Pasaji", 
        description: "Basar mit voller Armbänder und Schmuck.",
        image: "images/pasaj.jpg",
        maps: "https://share.google/k3ha0FbUmuP5kPVCs" }, 
        
        { name: "Pertevniyal Valide Sultan Cami", 
        description: "Sehr schöne Moschee.",
        image: "images/pvc.jpg",
        maps: "https://share.google/s2veahi8U6XO90yZT" }, 
    ],

    "Üsküdar": [

        { name: "Capitol Spectrum Cineplex", 
        description: "Liegend Kinofilm gucken (Preis: 750tl)",
        image: "images/capitol.jpg",
        maps: "https://share.google/NaXJ5zceYrvOIVG9O" },
        
    ],

    "Ümraniye": [
        
    ],

    "Beşiktaş": [

        { name: "Dolmabahce Sarayi", 
        description: "Altes Schloss + Museum.",
        image: "images/dolma.jpg",
        maps: "https://share.google/gKDRTi2Znk5gX6g78" }, 

        { name: "Feriye acik hava Sinemalari (12.10)", 
        description: "Open-Air-Kino mit Blick auf den Bosporus. Tickets über Biletial. Eat Pray Love (Komedie/Romanze).",
        image: "images/feriye.jpg",
        maps: "https://biletinial.com/tr-tr/etkinlikleri/feriye-acik-hava-sinemalari" }, 

        { name: "Lifestudio Besiktas", 
        description: "Studio für koreanische FotoBoots(Passfotos).",
        image: "images/life.jpg",
        maps: "https://share.google/I5tJjRNT7fzjiXDym" }, 

        { name: "Assk Kahve", 
        description: "Verstecktes Cafe direkt am Meer.",
        image: "images/assk.jpg",
        maps: "https://share.google/sJa5BJbZ6dDgz23zJ" }, 

        { name: "Kedi Müzesi", 
        description: "Katzenmuseum mit Beleuchtung.",
        image: "images/kedi.jpg",
        maps: "https://share.google/615cA5CmHDYtxsq11" },

        { name: "Cave Game Zone", 
        description: "Interaktiver Bereich mit riesigem, beleuchtetem Boden.",
        image: "images/cave.jpg",
        maps: "https://share.google/5QTjZiAt8QMpkBki0"},

        
    ],

    "Karaköy": [
        
    ],

    "Sirkeci": [
        
    ],

    "Galataport": [

        { name: "Galataport Deniz Dolmus", 
        description: "Kleine Fähre mit Aussicht(Verbindungen: 1. Bebek-Ortaköy-Galataport 2. Kadiköy-Üsküdar-Galataport Preis: 250tl).",
        image: "images/dolmus.jpg",
        maps: "https://galataport.com/en/getting-here/sea-shuttle" }, 
        
    ],

    "Bakirköy": [

        { name: "Ata Beach", 
        description: "Restaurant direkt am Meer. Schöne Atmophäre, aber Hygiene und Geschmack müssen noch verbessert werden",
        image: "images/ata.jpg",
        maps: "https://share.google/AOqq1I4KDRmqk411K" },
        
    ],

    "Zeytinburnu": [
        
    ],

    "Beyoğlu": [
        
    ],

    "Sisli": [
        
    ],

    "Beykoz": [
        
    ],

    "Sariyer": [

        { name: "SoTepe", 
        description: "Aussichtspunkt mit Blick auf die Brücke, Picknickplätzen, Cafes und einer Zipline (Eintritt frei). Preise: Heiß-/Kaltgetränke 160-250tl, Sandwiches 180-230tl",
        image: "images/sotepe.jpg",
        maps: "https://share.google/A3NtsLwPc1pB1hqfK" },
        
    ],

    "Bahcelievler": [

        { name: "Saym Coffee", 
        description: "Cafe im Höhlenkonzept mit Zwergziegen und kostenlosen Brettspielen",
        image: "images/saym.jpg",
        maps: "https://share.google/xjg15SXEqgYx91rZF" },
        
    ],

    "Sancaktepe": [

        { name: "Sultanbeyli Nefes Orman Dag Kizagi", 
        description: "Diese Fahrding auf dem Gleis im Wald, sieht richtig cool aus. (Preis: 500tl)",
        image: "images/dag.jpg",
        maps: "https://etkinlik.nefesorman.com/" },
        
    ],
};