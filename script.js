let findlove=true;
let loveScore = 0;

document.getElementById("btn").addEventListener("click",() => {
    // event.preventDefault();
    findLove();
});

function findLove() {
    if(findlove){
        const name1=document.getElementById("name1").value;
        const name2=document.getElementById("name2").value;
        if (name1 === "" || name2 === "") {
            return;
        }
        let sum1 = 0, sum2 = 0;
        for (let i = 0; i < name1.length; i++) {
            let charCode = name1.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) ||(charCode >= 97) && charCode <= 122){
                charCode = charCode <= 90 ? charCode + 32 : charCode;
            }
            sum1 += charCode;
        }
        for (let i = 0; i < name2.length; i++) {
            let charCode = name2.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) ||(charCode >= 97) && charCode <= 122){
                charCode = charCode <= 90 ? charCode + 32 : charCode;
            }
            sum2 += charCode;
        }
        loveScore = Math.floor((sum1 + sum2) / 2) % 101;
        document.getElementById("result").innerHTML = `Love Score: ${loveScore}%`;
        document.getElementById("btn").innerHTML = "Reset";
        findlove = false;
    }
    else {
        document.getElementById("result").innerHTML = "Love Matcher";
        document.getElementById("name1").value = "";
        document.getElementById("name2").value = "";
        document.getElementById("btn").innerHTML = "Calculate Love Score";
        findlove = true;
    }
}

if(findlove){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfsrmL1mmLFXMfXPjHZIj2eDXOWJHMS9epGsonrrbsCbDBlO_t2PMM7wOENFzxBDMO/exec'
    const form = document.forms['submit-to-google-sheet']
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
}
