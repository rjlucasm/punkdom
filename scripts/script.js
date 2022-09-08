const leaf = document.getElementById('leaf');
leaf.style.display = "none";
const head = document.getElementById('head');
const eyes = document.getElementById('eyes');
const mouth = document.getElementById('mouth');
const leafArea = document.getElementById('leaf-area');
const headArea = document.getElementById('head-area');
const eyesArea = document.getElementById('eyes-area');
const mouthArea = document.getElementById('mouth-area');
const button = document.getElementById('button');
const audioElement = new Audio('Punk.mp3')
audioElement.loop = true;
let counter = 0;
let counter2 = 0;
let counter3 = 0;
const headAssets = [
    "other/NONE.png",
    "head/CROWN_BTCFLOWER_BLACK.png",
    "head/CROWN_BTCFLOWER_GOLD.png",
    "head/HEADBAND_1_GOLD.png",
    "head/HEADBAND_1_SILVER.png",
    "head/HEADPHONES_GOLD.png",
    "head/POLICE_CAP_GOLD.png",
    "head/VISOR_BLACK.png",
    "head/VISOR_GOLD.png",
    "head/BARBEDWIRES_CROWN_GOLD.png",
];

const eyesAssets = [
    "other/NONE.png",
    "eyes/BIO_EYES_GOLD.png",
    "eyes/BIO_EYES_SILVER.png",
    "eyes/BIO_GLASSES_V1_BASE_BLACK.png",
    "eyes/BIO_GLASSES_V1_GOLD.png",
    "eyes/EYE_PATCH.png",
    "eyes/GOGGLES_BASE_BLACK.png",
    "eyes/GOGGLES_BASE_GOLD.png",
    "eyes/LASER_EYE.png",
    "eyes/PIERCING_EYEBROW_GOLD.png",
    "eyes/SUNGLASSES_BLACK.png",
    "eyes/SUNGLASSES_GOLD.png",
];

const mouthAssets = [
    "other/NONE.png",
    "mouth/CIGARETTE_1.png",
    "mouth/CIGARETTEe_1.png",
    "mouth/FLAG_GOLD.png",
    "mouth/MASK1_BTCFLOWER_BLACK.png",
    "mouth/MASK1_BTCFLOWER_GOLD.png",
    "mouth/MASK2_BLACK.png",
    "mouth/MASK2_GOLD.png",
    "mouth/ROSE_BLACK.png",
    "mouth/ROSE_GOLD.png",
    "mouth/ROSE_SILVER.png",
];

function toogleLeaf() {
    if (leaf.style.display === "none") {
        leaf.style.display = "block";
    } else {
        leaf.style.display = "none";
    }
}

function changeHead() {
    counter += 1;
    if (counter > headAssets.length -1) {
        counter = 0;
    }
    head.style.background = "url(" + headAssets[counter] + ")";
    head.style.backgroundSize = 'cover';
}

function changeEyes() {
    counter2 += 1;
    if (counter2 > eyesAssets.length -1) {
        counter2 = 0;
    }
    eyes.style.background = "url(" + eyesAssets[counter2] + ")";
    eyes.style.backgroundSize = 'cover';
}

function changeMouth() {
    counter3 += 1;
    if (counter3 > mouthAssets.length -1) {
        counter3 = 0;
    }
    mouth.style.background = "url(" + mouthAssets[counter3] + ")";
    mouth.style.backgroundSize = 'cover';
}

window.addEventListener('load', (event) => {
    leafArea.addEventListener('click', toogleLeaf);
    headArea.addEventListener('click', changeHead);
    eyesArea.addEventListener('click', changeEyes);
    mouthArea.addEventListener('click', changeMouth);

    counter -= 1;
    counter2 -= 1;
    counter3 -= 1;
    changeHead();
    changeEyes();
    changeMouth();

    window.addEventListener('click', function() {
        audioElement.play();
    });
    console.log('Page loaded');
});

button.addEventListener("click", function() {
	html2canvas(document.getElementById("box")).then(function (canvas) {
        let anchorTag = document.createElement("a");
        anchorTag.download = "dominicPunk.png";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
});