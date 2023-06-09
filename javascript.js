const button= document.querySelector('input[type="button"]');
const messageNoMatch = "*Passwords do not match";
const messageDisplay = document.querySelector(".passNoMatch");

let match = true;

button.addEventListener('click',()=>{

    match = true;

    let pass1 = document.querySelector("#password").value;
    let pass2 = document.querySelector("#confirmpassword").value;

    if(pass1.length === pass2.length){

        //Turn password strings to array
        let passA1 = pass1.split('');
        let passA2 = pass2.split('');

        passwordMismatch(passA1,passA2);
    }else{
        match = false;
    }

    //Show message if password not matching
    if(!match){
        messageDisplay.textContent = messageNoMatch;
        messageDisplay.style.display = "block";
    }else{
        messageDisplay.textContent = "";
        messageDisplay.style.display = "none";
    }
});

function passwordMismatch(passA1,passA2){

    /*Loop through every array position.
    If there is a mismatch change value of
    match to false*/
    for(let i=0; i<passA1.length; i++){
        if(passA1[i]!==passA2[i]){
            match = false;
        }
    }
}