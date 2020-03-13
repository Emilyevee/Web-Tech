var tweetinput;
var maxtweetlength=10;


function main() {
    
    console.info("loaded");
    tweetinput = document.getElementById("tweetinput");
    tweetinput.addEventListener('keydown',handlekeydown);
    document.addEventListener('keydown', handlebodykd);

}

function handlebodykd() {
    console.log(e.code);

    if (e.code == "enter" && (tweetinput.value.length > 1 && tweetinput.value.length <maxtweetlength ) ) {
        tweets.push(tweetinput.value);
        console,log(tweets);
    }


    var tweet
    
}



function handlekeydown() {
    console.warn("this has fired")
    var length = tweetinput.value.length;
    var tweetlength = document.getElementById("tweetlength").innerHTML = tweetinput.value.length;
    if (tweetlength >= maxtweetlength ) {
        maxtweetlength.style.color= "red"
    } else {
        maxtweetlength.style.color="green"
    }

}


