//driver function used for display and passing values.
function checkAnagram() {

     //grab the two strings from the ui. no need to change
     //clear the results
     document.getElementById("results").innerHTML = "";

    stringA = document.getElementById("wordOne").value;
    stringB = document.getElementById("wordTwo").value;

    if (stringA == '' || stringB == '') {
        alert("Please enter two words or phrases.");
        return;
    }

   
    //implement the isAnagram function
    let anagram = isAnagram(stringA, stringB);

    
    //used for display no need to change.
    let msg = "";

    if (anagram == true) {
        msg = 'The two strings ARE anagrams';
    } else {
        msg = 'The two strings ARE NOT anagrams';
    }

    document.getElementById("results").innerHTML = msg
}

//takes an two strings and determines if the are anagarms
//returns true or false
function isAnagram(stringA, stringB) {
    //remove whitespace 
    stringA = stringA.replace(/\s+/g, '');
    stringB = stringB.replace(/\s+/g, '');

    //check to see if they are the same length. 
    if (stringA.length != stringB.length){
        return false;
    }

    //convert to lower case 
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    //sort items 
    //split turns it into an array, sort sorts it, join adds it back 
    stringA = stringA.split('').sort().join('');
    stringB = stringB.split('').sort().join('');

    //are the strings equal? This is an expression, meaning it will return true or false
    return (stringA == stringB);
}