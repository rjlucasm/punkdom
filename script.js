var head = document.getElementById('head');
var eyes = document.getElementById('eyes');
var mouth = document.getElementById('mouth');
var headArea = document.getElementById('head-area');
var eyesArea = document.getElementById('eyes-area');
var mouthArea = document.getElementById('mouth-area');
var button = document.getElementById("button");
var audioElement = new Audio('Punk.mp3')
audioElement.loop = true;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var headAssets = [
    "NONE.png",
    "head/CROWN_BTCFLOWER_BLACK.png",
    "head/CROWN_BTCFLOWER_GOLD.png",
    "head/HEADBAND_1_GOLD.png",
    "head/HEADBAND_1_SILVER.png",
    "head/HEADPHONES_GOLD.png",
    "head/POLICE_CAP_GOLD.png",
    "head/VISOR_BLACK.png",
    "head/VISOR_GOLD.png",
];

var eyesAssets = [
    "NONE.png",
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

var mouthAssets = [
    "NONE.png",
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

button.addEventListener("click", function() {
	html2canvas(document.getElementById("box")).then(function (canvas) {			
        var anchorTag = document.createElement("a");
        anchorTag.download = "dominicPunk.png";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
 });