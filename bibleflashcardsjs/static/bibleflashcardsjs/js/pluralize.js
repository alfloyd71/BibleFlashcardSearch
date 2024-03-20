function pluralize(number, count) {
    // Check if count is not 1, then pluralize the word
    if (count !== 1) {
        // Some basic pluralization rules
        if (number.endsWith("y")) {
            return number.slice(0, -1) + "ies"; // Replace 'y' with 'ies'
        
        } 

        if (number == 1) {
          return number + "st";
        } else if (number == 2){
          return number + "nd";
        } else if (number == 3) {
          return number + "rd"
        } else if (number == 4 || number == 5) {
          return number + "th"
        } else {
          return number + "s";
        }
    }
    // Return the word as it is if count is 1
    return number;
}