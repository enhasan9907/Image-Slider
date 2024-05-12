
let slides = document.querySelectorAll('.slider .item');
let slidesImage = document.querySelectorAll('.slider .item img');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let thumbnailContainer = document.querySelector('.thumbnail');
let t = document.querySelector('.thumbnail .item');
let sliderContainer = document.querySelector('.slider-container');

let currentSlide = 0;
let isTransitioning = false; // Flag to indicate slide transition



function toggleActiveSlidenext(n) {

    // Remove active class from all slides
    slides.forEach(slide =>{
        slide.classList.remove('active');

    });

    // Calculate the index of the previous slide
    let prevIndex = (n - 1 + slides.length) % slides.length;

    // Add active class to the current slide and previous slide
    slides[n].classList.add('active');
    slides[prevIndex].classList.add('active-prev');
    setTimeout(() => {
        slides[prevIndex].classList.remove('active-prev');
    }, 2500);
}


function toggleActiveSlideprev(n) {

    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Calculate the index of the previous slide
    let prevIndex = (n + 1 + slides.length) % slides.length;

    // Add active class to the current slide and previous slide
    slides[n].classList.add('active');
    slides[prevIndex].classList.add('active-prev');
    setTimeout(() => {
        
        slides[prevIndex].classList.remove('active-prev');
    }, 2500);
}





slides.forEach((slide, index) => {
    // Clone the image element from the slide
    let image = slide.querySelector('img').cloneNode(true);

    // Clone the title and topic elements from the slide
    let title = slide.querySelector('.title').cloneNode(true);
    let topic = slide.querySelector('.topic').cloneNode(true);

    // Create a new div element for the thumbnail item
    let thumbnailItem = document.createElement('div');
    thumbnailItem.classList.add('item');

    // Create a new div element for the content container
    let content = document.createElement('div');
    content.classList.add('content');

    // Create a new div element for the title and description
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.appendChild(title);

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.appendChild(topic);

    // Append the cloned image and content to the thumbnail item
    content.appendChild(titleDiv);
    content.appendChild(descriptionDiv);
    thumbnailItem.appendChild(image);
    thumbnailItem.appendChild(content);
    

    image.addEventListener('click', function(){
        if (!isTransitioning) {
            clickThumbnail(index);
            
        }
    });
    title.addEventListener('click', function(){
        if (!isTransitioning) {
            clickThumbnail(index);
        }
    });
    topic.addEventListener('click', function(){
        if (!isTransitioning) {
            clickThumbnail(index);
        }
    });

    // Append the thumbnail item to the thumbnail container
    thumbnailContainer.appendChild(thumbnailItem);
});



function goToSlide(n) {
    if (!isTransitioning) {
        isTransitioning = true; // Set transitioning flag to true
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        
        // Set timeout
        setTimeout(function() {
            isTransitioning = false;
            sliderContainer.classList.remove("prev");
            sliderContainer.classList.remove("next");
        }, 2500); 
    }
}

prevBtn.addEventListener('click', function(){
    
    if (!isTransitioning) {
        goToSlide(currentSlide - 1);
        toggleActiveSlideprev(currentSlide);
        sliderContainer.classList.add("prev");
        updateThumbnailPrev(currentSlide);
        
    }
});

nextBtn.addEventListener('click', function(){
    if (!isTransitioning) {
        goToSlide(currentSlide + 1);
        toggleActiveSlidenext(currentSlide);
        sliderContainer.classList.add("next");
        updateThumbnailNext(currentSlide);
        

    }
});

function updateThumbnailNext(index) {
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    thumbnailItems[1].classList.add('active');
    setTimeout(function () {
        thumbnailItems[thumbnailItems.length -1 ].classList.remove('active');
    }, 2500);

    let positionLastItem = thumbnailItems.length - 1;
    thumbnailContainer.appendChild(thumbnailItems[0]);
    sliderContainer.classList.add('next');
    setTimeout(function () {
        isTransitioning = false;
        sliderContainer.classList.remove("next");
    }, 2500); 
}


function updateThumbnailPrev(index) {
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    thumbnailItems[thumbnailItems.length -1 ].classList.add('active');
    setTimeout(function () {
        thumbnailItems[thumbnailItems.length -1 ].classList.remove('active');
    }, 3000);
    let positionLastItem = thumbnailItems.length - 1;
    thumbnailContainer.prepend(thumbnailItems[thumbnailItems.length -1]);
    sliderContainer.classList.add('prev');
    setTimeout(function () {
        isTransitioning = false;
        sliderContainer.classList.remove("prev");
    }, 3000);
}






























// function clickThumbnail(index){
//     let thumbnailItems = document.querySelectorAll('.thumbnail .item');
//     goToSlide(index);
//     let hasan = thumbnailItems[index].cloneNode();
//     thumbnailItems[0] = hasan ;
//     thumbnailItems[index].classList.add('active');
//     setTimeout(function () {
//         thumbnailItems[index ].classList.remove('active');
//     }, 3000);

//     let positionLastItem = thumbnailItems.length - 1;
//     thumbnailContainer.appendChild(thumbnailItems[0]);
//     sliderContainer.classList.add('next');
//     setTimeout(function () {
//         isTransitioning = false;
//         sliderContainer.classList.remove("next");
//     }, 3000);

// }
