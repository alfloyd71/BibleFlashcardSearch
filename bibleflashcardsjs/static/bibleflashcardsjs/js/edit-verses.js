let editVersesGlobalsInstance;
let flashCardGlobalsInstance;
function runEditVersesMain(){
  const changeThemeButton = document.querySelector('#change-theme')
   changeThemeButton.addEventListener('pointerup',()=>{
     setTheme();
     editVersesGlobalsInstance.pageReloaded=false;
     editVersesGlobalsInstance.themeToggle=!editVersesGlobalsInstance.themeToggle
     localStorage.setItem('themeUsed', editVersesGlobalsInstance.themeUsed);
   })
  
   function handleSave(event) {
    event.preventDefault();
    saveToLocalStorage();
    window.location.reload();
  }
  
  function handleRemove(event) {
    event.preventDefault();
    clearLocS();

    window.location.reload();
  }
  
  const saveBtn = document.querySelector('#button-save-verse');
  const removeBtn = document.querySelector('#button-remove-verses');
  
  saveBtn.addEventListener('pointerup', handleSave);
  removeBtn.addEventListener('pointerup', handleRemove);
  

  let mycards
  const preloadQuestions=()=>{
    mycards = [
      {question:"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
      answer:"Revelation 21:4", box:1},
      {question:"I can do all things through Christ which strengtheneth me.",
      answer:"Philippians 4:13 KJV", box:4},
      {question:"Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      answer:"Proverbs 3:5 KJV", box:4},
      

  ];
}

const capitalizeWords=(inputString)=>{
  return inputString.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
});
}

window.onload = function () {
preloadQuestions()

editVersesGlobalsInstance.inputArea=document.getElementById('questions-input-area')
verseText=document.getElementById('verse-text').innerHTML
editVersesGlobalsInstance.reference=document.getElementById('versereference').innerHTML

editVersesGlobalsInstance.versesToAppend=[{'question':'And I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads \
 and ten horns, and upon his horns ten crowns, and upon his heads the name of blasphemy.','answer':'Revelation 13:1'},
 {'question':'test question','answer':'answered question',   }]


editVersesGlobalsInstance.versesToAppend=JSON.parse(localStorage.getItem('bible-flash-cards')) || []
mycards=editVersesGlobalsInstance.versesToAppend

editVersesGlobalsInstance.parsedVerses=editVersesGlobalsInstance.versesToAppend// converts editVersesGlobalsInstance.versesToAppend from a string to an array

tallyBoxes(mycards)



// Using a for loop to iterate over the array
try{
  for (let i = 0; i < editVersesGlobalsInstance.parsedVerses.length; i++) {
    // no need to delcare .question and .answer just reference editVersesGlobalsInstance.parsedVerses[i]
    // Accessing each element using the index i
    editVersesGlobalsInstance.strmyFlashCards=JSON.stringify(mycards)
    if(editVersesGlobalsInstance.strmyFlashCards.includes(editVersesGlobalsInstance.parsedVerses[i].answer)){
      console.log('verse already exists in mycards')
    }
    else{
      mycards.push(editVersesGlobalsInstance.parsedVerses[i])
      console.log('not in mycards appending')
    }
    
    }
 }
 catch (error){
  console.error("An error occurred:", error.message);
 }
  

  
}

function clearLocS(){
  const confirmRemoveAll=window.confirm("Would you like to remove all of the verses from your flashcards?")
  if(confirmRemoveAll){
    let themeUsed = localStorage.getItem('themeUsed')
    if (!themeUsed || themeUsed === "undefined" || themeUsed === "null") {
     themeUsed = "default";
   }
    console.log("Before clearing:", themeUsed);

    localStorage.clear();
    localStorage.setItem('themeUsed', themeUsed);  
    window.alert("All flashcards have been removed from your web browser")
    console.log("After restoring:", themeUsed);
  }
}

function saveToLocalStorage(){
  let match=false
  try{
    editVersesGlobalsInstance.reference=capitalizeWords(editVersesGlobalsInstance.reference)
    for (let i=0;i<editVersesGlobalsInstance.parsedVerses.length;i++){
      if(editVersesGlobalsInstance.parsedVerses[i].answer===editVersesGlobalsInstance.reference){
        match=true
      }
     }
  } 
  catch (error){
    console.error("An error occurred:", error.message);
  }
  finally {
    // Code that will always be executed
    console.log("This will be executed no matter what.");
  }

  if(match===false){
    const confirmSaveVerse = window.confirm(`Would you like to save ${editVersesGlobalsInstance.reference} to your flashcards list?`) 
    if(confirmSaveVerse){
      mycards.push({'question':verseText,'answer':editVersesGlobalsInstance.reference,'box':1})
      window.alert(`${editVersesGlobalsInstance.reference} has been added to your flashcards list.`)
    }
   
  }
  else{
    window.alert(`${editVersesGlobalsInstance.reference} has already been added to your flashcards list.`)        
  }

  // localStorage.clear() clears everything stored in the localStorage for the current domain.
  localStorage.setItem('bible-flash-cards',JSON.stringify(mycards))//convert mycards  back into a string


// end saveToLocalStorage()
}

const btnFindVerse = document.querySelector('#button-find-verse')
const buttonSaveVerse = document.querySelector('#button-save-verse')
const btnRemoveVerses = document.querySelector('#button-remove-verses')
btnFindVerse.setAttribute('data-button-text', btnFindVerse.textContent)
buttonSaveVerse.setAttribute('data-button-text', buttonSaveVerse.textContent)
btnRemoveVerses.setAttribute('data-button-text', btnRemoveVerses.textContent)
}

function setTheme(){
  const mainStreamTitle = document.querySelector('#main-stream-title')
  const defaultTitle = document.querySelector('#default-title')
  const styles1 = document.querySelector('#styles1')
  const styles2 = document.querySelector('#styles2')

  function setDefaultTheme(){
    mainStreamTitle.style.display='none'
    defaultTitle.style.display='block'
    styles1.href = 'https://cdn.simplecss.org/simple.min.css'
    styles2.href = '/static/biblefs/css/android-app-styles.css'
  }

  function setMainStreamTheme(){
    mainStreamTitle.style.display='block'
    defaultTitle.style.display='none'
    styles1.href = '/static/biblefs/css/main-stream-styles.css'
    styles2.href = '/static/biblefs/css/index-styles.css' 
  }
  if(editVersesGlobalsInstance.pageReloaded){
    if(editVersesGlobalsInstance.themeUsed==='default') setDefaultTheme();
    else if(editVersesGlobalsInstance.themeUsed==='mainstream') setMainStreamTheme();
  }
  else{
    if(editVersesGlobalsInstance.themeUsed==='mainstream'){
      setDefaultTheme();
      editVersesGlobalsInstance.themeUsed='default'
    } 
    else if(editVersesGlobalsInstance.themeUsed==='default')
     {
       setMainStreamTheme(); 
       editVersesGlobalsInstance.themeUsed='mainstream'
     }  
    
  }

// end setTheme()
}

document.addEventListener('DOMContentLoaded', () =>{
 flashCardGlobalsInstance = new FlashCardGlobals();
 editVersesGlobalsInstance = new EditVersesGlobals();
 const storedTheme = localStorage.getItem('themeUsed') || editVersesGlobalsInstance.themeUsed;

 editVersesGlobalsInstance.themeUsed = storedTheme ? storedTheme : editVersesGlobalsInstance.themeUsed;
 editVersesGlobalsInstance.pageReloaded = true;
 setTheme();
 runEditVersesMain();
 
//end DOMContentLoaded event listener
})