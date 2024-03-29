console.log("This is a test from test-script")

const pluralize=(word, number)=>{
    console.log("hello from pluralize")
    // Some basic pluralization rules
    if (word.endsWith("y")) {
        return word.slice(0, -1) + "ies"; // Replace 'y' with 'ies'
    } 
    
    // Check for ordinal suffixes
    switch (number) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
        case 4:
        case 5:
            return number + "th";
        default:
            return number;
    }
  }

    
  