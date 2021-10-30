window.addEventListener('load', function () {
    console.log('Page is loded');
})

//hide all images first
let everything = document.getElementsByClassName('button-content');
for (let a = 0; a < everything.length; a++) {
    everything[a].style.display = "none";
}

//hide all warnings first
let allWarns = document.getElementsByClassName('warnings')
for (let b = 0; b < allWarns.length; b++) {
    allWarns[b].style.display = "none";
}

//multi click codes
onload = init;

// Buttons Initialization code
function init() {
    //BUTTON ONE
    let onclick1 = clickUpdates1();
    let btn1 = document.getElementById("fun-button-one");
    btn1.addEventListener("click", onclick1, false);

    //BUTTON TWO
    let onclick2 = clickUpdates2();
    let btn2 = document.getElementById("fun-button-two");
    btn2.addEventListener("click", onclick2, false);

    //BUTTON THREE
    let onclick3 = clickUpdates3();
    let btn3 = document.getElementById("fun-button-three");
    btn3.addEventListener("click", onclick3, false);

    //BUTTON FOUR
    let onclick4 = clickUpdates4();
    let btn4 = document.getElementById("fun-button-four");
    btn4.addEventListener("click", onclick4, false);
}

//Button one code
function clickUpdates1() {
    let count = 0;
    let next = function () {
        switch (count) {
            case 0:
                // function click 1 here


                //Play audio for second click
                // $(document).ready(function() {

                //     let audiox= new Audio('Assets/Never.mp3');
                //     $("#fun-button-one").mousedown(function() {
                //         audiox.load();
                //         audiox.play();
                //       });

                // });

                function playAudio(url) {
                    new Audio(url).play();
                  }


                //HIDE EVERTHING AT BEGINNING
                let uniText = document.getElementsByClassName('warnings');
                for (let u = 0; u < uniText.length; u++) {
                    uniText[u].style.display = "none";
                }

                let uniImg = document.getElementsByClassName('button-content');
                for (let w = 0; w < uniImg.length; w++) {
                    uniImg[w].style.display = "none";
                }

                //shoW first warning
                let showWarninng = document.getElementById("first-warn");
                showWarninng.style.display = "block",
                    //hide default image
                    $("#default-sprite").hide();

                //show first image
                let showImg = document.getElementById("pika-apple-one");
                showImg.style.display = "block",

                    console.log("First Click: first warning & normal pickachu noise.");
                break;
            case 1:
                // function click 2 here

                //Hide all of the warnings first
                let allContent = document.getElementsByClassName('warnings');
                for (let j = 0; j < allContent.length; j++) {
                    allContent[j].style.display = "none";
                }

                //Hide all the images first
                let everything = document.getElementsByClassName('button-content');
                for (let a = 0; a < everything.length; a++) {
                    everything[a].style.display = "none";
                }

                //Show second warning
                let showWarninng2 = document.getElementById("second-warn");
                showWarninng2.style.display = "block";

                //Show second image
                let showImg2 = document.getElementById("pika-apple-two");
                showImg2.style.display = "block",
                    console.log("Second Click: second warning & google voice of never");
                break;

            case 2:
                // function click 3 here

                //Hide all of the warnings first
                let allContent2 = document.getElementsByClassName('warnings');
                for (let h = 0; h < allContent2.length; h++) {
                    allContent2[h].style.display = "none";
                }

                //Hide all images first
                let everything2 = document.getElementsByClassName('button-content');
                for (let a = 0; a < everything2.length; a++) {
                    everything2[a].style.display = "none";
                }

                //Hide pikachu box
                let hidBox = document.getElementById("pikachu-box");
                hidBox.style.display = "none";

                //show third warning
                let showWarninng3 = document.getElementById("third-warn");
                showWarninng3.style.display = "block";

                //Show the video
                let videoBox = document.getElementById("FUN-VIDEO");
                videoBox.style.display = "block";


                console.log("third Click: title & videos.");
                break;

            case 3:
            default:
                // function click 4 here

                //hide reaction sprite
                $("#reaction-sprite").hide();

                //hide warning info
                let allContent3 = document.getElementsByClassName('warnings');
                for (let z = 0; z < allContent3.length; z++) {
                    allContent3[z].style.display = "none";
                }

                //hide video
                let hidVid = document.getElementById("FUN-VIDEO");
                hidVid.style.display = "none";

                //show default sprite
                let showBox = document.getElementById("pikachu-box");
                showBox.style.display = "block";
                $("#default-sprite").show();
                console.log("Back to Deafult");
                break;




        }
        count = count < 3 ? count + 1 : 3;
    }

    return next;
}


//button two code
function clickUpdates2() {
    let count = 0;
    let next = function () {
        switch (count) {
            case 0:
                // function click 1 here
                //HIDE EVERTHING AT BEGINNING
                let uniText2 = document.getElementsByClassName('warnings');
                for (let i1 = 0; i1 < uniText2.length; i1++) {
                    uniText2[i1].style.display = "none";
                }

                let uniImg2 = document.getElementsByClassName('button-content');
                for (let i2 = 0; i2 < uniImg2.length; i2++) {
                    uniImg2[i2].style.display = "none";
                }


                //show first warning
                let showWarninng = document.getElementById("first-warn");
                showWarninng.style.display = "block",
                    //hide default image
                    $("#default-sprite").hide();

                //show first image
                let dspImg = document.getElementById("pika-berry-one");
                dspImg.style.display = "block",
                    console.log("First Click: first warning & normal pickachu noise.");
                break;
            case 1:
                // function click 2 here

                //Hide all of the warnigs first
                let everyContent = document.getElementsByClassName('warnings');
                for (let j = 0; j < everyContent.length; j++) {
                    everyContent[j].style.display = "none";
                }

                //Hide all of the imgs
                let allImgs = document.getElementsByClassName('button-content');
                for (let b = 0; b < allImgs.length; b++) {
                    allImgs[b].style.display = "none";
                }

                //Show second warning
                let showWarninng2 = document.getElementById("second-warn");
                showWarninng2.style.display = "block";

                //Shoe second Imgs
                let dspImg2 = document.getElementById("pika-berry-two");
                dspImg2.style.display = "block",

                    console.log("Second Click: second warning & google voice of never");
                break;

            case 2:
                // function click 3 here

                //Hide all of the warnings first
                let everyContent2 = document.getElementsByClassName('warnings');
                for (let h = 0; h < everyContent2.length; h++) {
                    everyContent2[h].style.display = "none";
                }

                //Hide all of the imgs first
                let allImgs2 = document.getElementsByClassName('button-content');
                for (let c = 0; c < allImgs2.length; c++) {
                    allImgs2[c].style.display = "none";
                }

                //Hide pikachu box
                let hidBox2 = document.getElementById("pikachu-box");
                hidBox2.style.display = "none";

                //show third warning
                let showWarninng3 = document.getElementById("third-warn");
                showWarninng3.style.display = "block";

                //Show the video
                let videoBox2 = document.getElementById("FUN-VIDEO");
                videoBox2.style.display = "block";


                console.log("third Click: title & videos.");
                break;

            case 3:
            default:
                // function click 4 here

                //hide reaction sprite
                $("#reaction-sprite").hide();

                //hide warning info
                let everyContent3 = document.getElementsByClassName('warnings');
                for (let z = 0; z < everyContent3.length; z++) {
                    everyContent3[z].style.display = "none";
                }


                //hide video
                let hidVid4 = document.getElementById("FUN-VIDEO");
                hidVid4.style.display = "none";

                //show default sprite
                let showBox2 = document.getElementById("pikachu-box");
                showBox2.style.display = "block";
                $("#default-sprite").show();
                console.log("Back to Deafult");
                break;


        }
        count = count < 3 ? count + 1 : 3;
    }

    return next;
}

function clickUpdates3() {
    let count = 0;
    let next = function () {
        switch (count) {
            case 0:
                // function click 1 here
                //HIDE EVERTHING AT BEGINNING
                let uniText3 = document.getElementsByClassName('warnings');
                for (let u = 0; u < uniText3.length; u++) {
                    uniText3[u].style.display = "none";
                }

                let uniImg3 = document.getElementsByClassName('button-content');
                for (let w = 0; w < uniImg3.length; w++) {
                    uniImg3[w].style.display = "none";
                }
                //show first warning
                let showWarninng = document.getElementById("first-warn");
                showWarninng.style.display = "block",

                    //hide default image
                    $("#default-sprite").hide();

                //show first image
                let pikaImg = document.getElementById("pika-pet-one");
                pikaImg.style.display = "block",
                    console.log("First Click: first warning & normal pickachu noise.");
                break;
                console.log("First Click: first warning & normal pickachu noise.");
                break;
            case 1:
                // function click 2 here

                //Hide all of the warnings first
                let wholeContent = document.getElementsByClassName('warnings');
                for (let j = 0; j < wholeContent.length; j++) {
                    wholeContent[j].style.display = "none";
                }

                //Hide all of the imgs first
                let evryImgs = document.getElementsByClassName('button-content');
                for (let d = 0; d < evryImgs.length; d++) {
                    evryImgs[d].style.display = "none";
                }

                //Show second warning
                let showWarninng2 = document.getElementById("second-warn");
                showWarninng2.style.display = "block";

                //Shoe second Img
                let pikaImg2 = document.getElementById("pika-pet-two");
                pikaImg2.style.display = "block",
                    console.log("Second Click: second warning & google voice of never");
                break;

            case 2:
                // function click 3 here

                //Hide all of the warnings first
                let wholeContent2 = document.getElementsByClassName('warnings');
                for (let h = 0; h < wholeContent2.length; h++) {
                    wholeContent2[h].style.display = "none";
                }
                //hide all the images first
                let evryImgs2 = document.getElementsByClassName('button-content');
                for (let e = 0; e < evryImgs2.length; e++) {
                    evryImgs2[e].style.display = "none";
                }

                //Hide pikachu box
                let hidBox3 = document.getElementById("pikachu-box");
                hidBox3.style.display = "none";

                //show third warning
                let showWarninng3 = document.getElementById("third-warn");
                showWarninng3.style.display = "block"

                //Show the video
                let videoBox3 = document.getElementById("FUN-VIDEO");
                videoBox3.style.display = "block";

                console.log("third Click: title & videos.");
                break;

            case 3:
            default:
                // function click 4 here

                //hide reaction sprite
                $("#reaction-sprite").hide();

                //hide warning info
                let wholeContent3 = document.getElementsByClassName('warnings');
                for (let z = 0; z < wholeContent3.length; z++) {
                    wholeContent3[z].style.display = "none";
                }


                //hide video
                let hidVid2 = document.getElementById("FUN-VIDEO");
                hidVid2.style.display = "none";

                //show default sprite
                let showBox3 = document.getElementById("pikachu-box");
                showBox3.style.display = "block";
                $("#default-sprite").show();
                console.log("Back to Deafult");
                break;


        }
        count = count < 3 ? count + 1 : 3;
    }

    return next;
}

function clickUpdates4() {
    let count = 0;
    let next = function () {
        switch (count) {
            case 0:
                // function click 1 here
                //HIDE EVERTHING AT BEGINNING
                let uniText4 = document.getElementsByClassName('warnings');
                for (let u = 0; u < uniText4.length; u++) {
                    uniText4[u].style.display = "none";
                }

                let uniImg4 = document.getElementsByClassName('button-content');
                for (let w = 0; w < uniImg4.length; w++) {
                    uniImg4[w].style.display = "none";
                }
                //show first warning
                let showWarninng = document.getElementById("first-warn");
                showWarninng.style.display = "block";

                //hide default image
                $("#default-sprite").hide();

                //show first image
                let pImg = document.getElementById("pika-tail-one");
                pImg.style.display = "block",
                    console.log("First Click: first warning & normal pickachu noise.");
                break;
            case 1:
                // function click 2 here

                //Hide all of the warnings first
                let fullContent = document.getElementsByClassName('warnings');
                for (let j = 0; j < fullContent.length; j++) {
                    fullContent[j].style.display = "none";
                }

                //Hide all of the images first
                let evImg = document.getElementsByClassName('button-content');
                for (let g = 0; g < evImg.length; g++) {
                    evImg[g].style.display = "none";
                }

                //Show second warning
                let showWarninng2 = document.getElementById("second-warn");
                showWarninng2.style.display = "block";


                //Show Second Img
                let pImg2 = document.getElementById("pika-tail-two");
                pImg2.style.display = "block";

                console.log("Second Click: second warning & google voice of never");
                break;

            case 2:
                // function click 3 here

                //Hide all of the warnings first
                let fullContent2 = document.getElementsByClassName('warnings');
                for (let h = 0; h < fullContent2.length; h++) {
                    fullContent2[h].style.display = "none";
                }

                //Hide all of the images first
                let evImg2 = document.getElementsByClassName('button-content');
                for (let x = 0; x < evImg2.length; x++) {
                    evImg2[x].style.display = "none";
                }

                // //Hide pikachu box
                let hidBox4 = document.getElementById("pikachu-box");
                hidBox4.style.display = "none";

                //show third warning
                let showWarninng3 = document.getElementById("third-warn");
                showWarninng3.style.display = "block"

                //Show the video
                let videoBox3 = document.getElementById("FUN-VIDEO");
                videoBox3.style.display = "block";

                console.log("third Click: title & videos.");
                break;

            case 3:
            default:
                // function click 4 here

                //hide reaction sprite
                $("#reaction-sprite").hide();

                //hide warning info
                let fullContent3 = document.getElementsByClassName('warnings');
                for (let z = 0; z < fullContent3.length; z++) {
                    fullContent3[z].style.display = "none";
                }


                //hide video
                let hidVid3 = document.getElementById("FUN-VIDEO");
                hidVid3.style.display = "none";

                //show default sprite
                let showBox4 = document.getElementById("pikachu-box");
                showBox4.style.display = "block";
                $("#default-sprite").show();
                console.log("Back to Deafult");
                break;


        }
        count = count < 3 ? count + 1 : 3;
    }

    return next;
}

// button sound effect test
$(document).ready(function () {

    
    let audio2 = new Audio('Assets/Pika-1-1.mp3');
    let audio3 = new Audio('Assets/Pika-2-1.mp3');
    let audio4 = new Audio('Assets/Pika-3-1.mp3');
    let audio5 = new Audio('Assets/Pika-4-1.mp3')
    let audio6 = new Audio('Assets/')

    $("#fun-button-one").mousedown(function() {
        audio2.load();
        audio2.play();
      });


    $("#fun-button-two").mousedown(function () {
        audio3.load();
        audio3.play();
    });

    $("#fun-button-three").mousedown(function () {
        audio4.load();
        audio4.play();
    });

    $("#fun-button-four").mousedown(function () {
        audio5.load();
        audio5.play();
    });



   
});