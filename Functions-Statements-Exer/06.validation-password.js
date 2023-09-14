function validPassword(text){
    const validLength = (a)=> a.length>=6 && a.length <= 10;
    const validChar = (a)=> /^[A-Za-z0-9]+$/g.test(a);
    const validTwoDigits = (a)=> [...a.matchAll(/\d/g)].length>=2;

    let passIsValid = true;

    if(!validLength(text)){
        console.log('Password must be between 6 and 10 characters');
        passIsValid =false;
    }
    if(!validChar(text)){
        console.log('Password must consist only of letters and digits');
        passIsValid = false;
    }
    if(!validTwoDigits(text)){
        console.log("Password must have at least 2 digits");
        passIsValid = false;
    }

    if(passIsValid){
        console.log("Password is valid");
    }
}