document.addEventListener("DOMContentLoaded", function() {
    navBarTabs=["HOME", "ABOUT","SERVICES","CONTACT"];
    
    const images = [
        { src: 'images/hero.png', title: '', description: '' },
        { src: 'images/2.png', title: 'HIIT TRAINING', description: 'Boost your cardiovascular fitness and push your limits!' },
        { src: 'images/3.png', title: 'WEIGHTLIFTING', description: 'Build strength and improve your overall fitness!' },
        { src: 'images/4.png', title: 'CROSSFIT', description: 'Push your limits with many dynamic movements!' },
        { src: 'images/5.png', title: 'EQUIPMENT', description: 'Our top-of-the-line equipment is built to last and designed to help you reach your fitness goals faster and more efficiently than ever before, with cutting-edge features, user-friendly interfaces, and sleek, modern designs that will elevate any home gym or commercial fitness facility.' },
        { src: 'images/6.png', title: 'COACHING', description: 'Discover a wide variety of fitness classes tailored to your needs, interests, and fitness level, led by expert instructors who will guide you through challenging and engaging workouts that will help you build strength, endurance, and confidence, while having fun and connecting with an active and highly supportive community of fitness fanatics.' },
        { src: 'images/7.png', title: 'LOCATIONS', description: 'Our gym locator tool is the perfect solution to find the nearest and most convenient gym location for you, with a simple and user-friendly interface that allows you to search for gyms by location, amenities, and more, so you can easily compare options and choose the gym that best suits your fitness needs.' }
      ];
   
    initNavBar(navBarTabs);
    initClassesSection(images);
    alternatingSections(images);
    footer(navBarTabs);

    window.addEventListener('resize', function(){
        this.location.reload();
    });

});

// Initialize navbar
function initNavBar(navBarTabs){
    const navBar = document.querySelector('.navbar-nav');

    for(i=0; i<navBarTabs.length; i++){
    
        var tabs = document.createElement("li");
        tabs.classList.add("nav-item");
       
        var anchor = document.createElement("a");
        anchor.classList.add("nav-link");
        
        anchor.href="#" + navBarTabs[i];
        anchor.innerHTML = navBarTabs[i];
        
        tabs.appendChild(anchor);
        navBar.appendChild(tabs);
    }
}

function initClassesSection(images){
   
    const row = document.querySelector('.row');

    for(i=1; i<=3;i++){

    var highlight = document.createElement("div");
    highlight.classList.add("col-lg-4","my-4");

    const img = document.createElement('img');
    img.src= images[i].src;
    img.alt = images[i].description;

    var h2 = document.createElement("h2");
    h2.textContent = images[i].title;

    var p = document.createElement("p");
    p.classList.add("px-5");
    p.textContent = images[i].description;
  
    const btn = document.createElement('button');
    btn.classList.add('custom-button');
    btn.textContent = 'SIGN UP';

    highlight.appendChild(img);
    highlight.appendChild(h2);
    highlight.appendChild(p);
    highlight.appendChild(btn);
   
    row.appendChild(highlight);

   }
}

function alternatingSections(images){
  
    for(i=4;i<images.length;i++){
        const altSection = document.querySelector(".alt-sections .row")
    
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("col-12", "col-md-6","my-auto");
        
        const rightDiv = document.createElement("div");
    
        rightDiv.classList.add("img-div");
        rightDiv.classList.add("col-12", "my-5","col-md-6","d-flex", "flex-column", "align-items-center");
    
        var title = document.createElement("h1");
        title.classList.add("text-center");
        title.textContent = images[i].title;
    
        var desc = document.createElement("p");
        desc.classList.add("text-left", "mx-5");
        desc.textContent = images[i].description;
    
        const btn = document.createElement('button');
        btn.classList.add("custom-button");
        btn.textContent = 'Learn More';
        
        const img = document.createElement('img');
        const imgSquare = document.createElement('div');
        const imgSquareDiv = document.createElement('div');
        imgSquareDiv.classList.add("col-6", "d-flex","justify-content-end");
     

        imgSquare.classList.add("img-square");
   
        img.onload = function(){
            imgSquareDiv.style.height = `${img.clientHeight + 2 * 2 * 16}px`;
            imgSquareDiv.style.width = `${img.clientWidth + 2 * 2 * 16}px`;
            imgSquareDiv.style.position = 'absolute';
            imgSquareDiv.style.zIndex=(-1);

            console.log(`${img.clientHeight}px`);
            const totalHeight = img.clientHeight;
            imgSquare.style.height = `${totalHeight + 2 * 2 * 16}px`;
            imgSquare.style.width = `${img.clientWidth/2 + 2 * 2 * 16}px`;
            imgSquare.style.padding = '2em';
            img.style.marginTop = '2em';
        };

        img.alt = images[i].title;
        img.src = images[i].src;
        

        imgSquareDiv.appendChild(imgSquare);
        leftDiv.appendChild(title);
        leftDiv.appendChild(desc);
        leftDiv.appendChild(btn);
        
        rightDiv.appendChild(img);
        rightDiv.appendChild(imgSquareDiv);

        if(i%2){
            altSection.appendChild(rightDiv);
            altSection.appendChild(leftDiv);
         
        }else{
            altSection.appendChild(leftDiv);
            altSection.appendChild(rightDiv);
        }
    }
}

function footer(navBarTabs){
    homeTabs=["Our Team", "Privacy Policy","Terms of Service"];
    aboutTabs=["Our Coaches", "Schedule a Meet", "FAQ"];
    equipmentTabs=["Browse Now", "On Sale"];
    locationTabs=["Locator Tool", "Our Headquarters"];

    const footer = document.querySelector(".footer");

    var i=0;
    for(;i < navBarTabs.length;i++){
    const listItem = document.createElement("li");
    listItem.classList.add("list-inline-item","m-4","text-start", "heading", "align-top");

    listItem.textContent = navBarTabs[i];

    var array = locationTabs;
    if(i===0){array=homeTabs}
    else if(i===1){array=aboutTabs}
    else if (i===2){array=equipmentTabs}

    for(j=0; j< array.length; j++){
        const tabs = document.createElement("li");
        tabs.textContent = array[j];
        tabs.classList.add("listItem-bullet", "li");
        listItem.appendChild(tabs);
    }

    footer.insertBefore(listItem, document.querySelector(".footer .container"));
    }
}