class Banner {
    constructor() {
        this.bannerContainer = document.querySelector('.image-container');
    }
}
const pictures = [
    'featureBora',
    'featureLondon',
    'featureNYC',
    'featurePraga',
    'galeryBoraBora',
    'galleryChina1',
    'galleryChina2',
    'galleryEngland1',
    'galleryEngland2',
    'galleryNYC',
    'galleryParis',
    'galleryPraga',
    'gallerySpain',
    'gallerySpain2'
];
const banner = new Banner();
let iterator = 0;
const appearImage = () => {
    changeImage();
    banner.bannerContainer.classList.add('image-appear');
    banner.bannerContainer.classList.remove('image-disappear');
}
const changeImage = () => {
    banner.bannerContainer.style.backgroundImage = `url('./images/${pictures[iterator]}.jpeg')`;
    banner.bannerContainer.style.backgroundPosition = `center`;
    banner.bannerContainer.style.backgroundRepeat = `no-repeat`;
    banner.bannerContainer.style.backgroundSize = `cover`;
    iterator ++;
    if(iterator === pictures.length) {
        iterator = 0;
    }
}
const disappearImage = () => {
    banner.bannerContainer.classList.add('image-disappear');
    banner.bannerContainer.classList.remove('image-appear');
}
appearImage();
setTimeout(() => {
    disappearImage();
}, 3000);
const interval = setInterval(() => {
    appearImage();
    setTimeout(() => {
        disappearImage();
    }, 3000);
}, 5000);