let flashCardGlobalsInstance;

function showRandomVerse(box){
 flashCardGlobalsInstance.boxnum.innerHTML+=`<h3>${pluralize('st', parseInt(box))} Box</h3>`

 flashCardGlobalsInstance.cardQuestion.innerHTML = flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['question']
 flashCardGlobalsInstance.cardAnswer.innerHTML = flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['answer']
 flashCardGlobalsInstance.hyperlinkCheck.href=`?box=${flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['box']}&check=true`
 flashCardGlobalsInstance.hyperlinkX.href=`?box=${flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['box']}&x=true`
}

function attachEventListeners(){ 
  flashCardGlobalsInstance.hyperlinkCheck.addEventListener(("click"),(element) =>{
    let updated = false; // Flag to track if a card was updated
   
    for (let i = 0; i < flashCardGlobalsInstance.mycards.length; i++) {
     if (flashCardGlobalsInstance.mycards[i]['answer'] === flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['answer']) {
      if (parseInt(flashCardGlobalsInstance.parametersBox) + 1 <= 5) {
        flashCardGlobalsInstance.mycards[i]['box'] = parseInt(flashCardGlobalsInstance.parametersBox) + 1;
        localStorage.setItem("bible-flash-cards", JSON.stringify(flashCardGlobalsInstance.mycards));
        updated = true; // Mark as updated
      }
      else{
        console.log(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox])
        if(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox]>=1){
          window.location.href = `?box=${flashCardGlobalsInstance.parametersBox}`;
        }
      }
   
      break // Exit the loop after updating one card
    }
   }
   console.log(updated)
   updated=false
   if (updated) {
     // Redirect only if a card was updated
     // Bug Fixed - The page was redirecting every time with no conditional flag set
     console.log(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox])
     if(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox-1]>=1){
       window.location.href = `?box=${flashCardGlobalsInstance.parametersBox}`;
     }
   }
  });
 
  flashCardGlobalsInstance.hyperlinkX.addEventListener("click",(event)=>{
    for(let i=0;i<flashCardGlobalsInstance.mycards.length;i++){
      if(flashCardGlobalsInstance.mycards[i]['answer']===flashCardGlobalsInstance.randomVerses[flashCardGlobalsInstance.randomVerseIndex]['answer']){
        flashCardGlobalsInstance.mycards[i]['box']=parseInt("1")
        localStorage.setItem("bible-flash-cards", JSON.stringify(flashCardGlobalsInstance.mycards))
        updated=true
        break
      }
    }
    console.log(updated)
    updated=false
    if (updated) {
      // Redirect only if a card was updated
      // Bug Fixed - The page was redirecting every time with no conditional flag set
      console.log(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox])
      if(flashCardGlobalsInstance.tallyBoxArry[flashCardGlobalsInstance.parametersBox-1]>=1){
        window.location.href = `?box=${flashCardGlobalsInstance.parametersBox}`;
      }
    }
  });
  

// end attachEventListeners()  
}; 

function main(){ 
  flashCardGlobalsInstance.versesToAppend=[{'question':'And I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads \
     and ten horns, and upon his horns ten crowns, and upon his heads the name of blasphemy.','answer':'Revelation 13:1'},
     {'question':'test question','answer':'answered question',   }]
  
  flashCardGlobalsInstance.mycards=JSON.parse(localStorage.getItem("bible-flash-cards")) || []
  
  tallyBoxes(flashCardGlobalsInstance.mycards)
  
  // Initialize a Set to store unique box numbers
  let inserted_questions = new Set();
  let html = ''
  let counted_boxes1 = false
  let counted_boxes2 = false
  let counted_boxes3 = false
  let counted_boxes4 = false
  let counted_boxes5 = false

  // sort flashCardGlobalsInstance.mycards by box #
  flashCardGlobalsInstance.mycards.sort((a, b)=>a['box']-b['box'])

  for(let i = 0; i < flashCardGlobalsInstance.mycards.length; i++) {
      // Check if the box number is already inserted
      if (!inserted_questions.has(flashCardGlobalsInstance.mycards[i]['question'])) {
          // Add the box number to the set of inserted boxes
          inserted_questions.add(flashCardGlobalsInstance.mycards[i]['question']);
          switch (flashCardGlobalsInstance.mycards[i]['box']){
            case 1: 
              if(counted_boxes1===false){
                html+=`<h3 class="pluralized-box">${pluralize('st', flashCardGlobalsInstance.mycards[i]['box'])} Box</h3>`
                counted_boxes1=true
              }
              break
            case 2: 
              if(counted_boxes2===false){
                html+=`<h3 class="pluralized-box">${pluralize('st', flashCardGlobalsInstance.mycards[i]['box'])} Box</h3>`
                counted_boxes2=true
              }
              break
            case 3: 
              if(counted_boxes3===false){
                html+=`<h3 class="pluralized-box">${pluralize('st', flashCardGlobalsInstance.mycards[i]['box'])} Box</h3>`
                counted_boxes3=true
              }
              break
            case 4: 
              if(counted_boxes4===false){
                html+=`<h3 class="pluralized-box">${pluralize('st', flashCardGlobalsInstance.mycards[i]['box'])} Box</h3>`
                counted_boxes4=true
              }
              break
            case 5: 
              if(counted_boxes5===false){
                html+=`<h3 class="pluralized-box">${pluralize('st', flashCardGlobalsInstance.mycards[i]['box'])} Box</h3>`
                counted_boxes5=true
              }
              break
          }
          
          html+=`<article class="article-allcards"><h4>${flashCardGlobalsInstance.mycards[i]['question']}</h4><p>${flashCardGlobalsInstance.mycards[i]['answer']}</p></article>
          <div class="flex-row">
            <div>
              <a href="?box=${flashCardGlobalsInstance.mycards[i]['box']}" role="button">
                <button class="add-flashcard-btn">Box</button>
              </a>
            </div>
             <div>
              <a href="?pk=${i}&box=${flashCardGlobalsInstance.mycards[i]['box']}&delete=true" role="button">
                  <button class="add-flashcard-btn">Delete</button>
              </a>
            </div>
          </div>`;
          
      }
  }

  flashCardGlobalsInstance.insertHtml.innerHTML=html

  const article_allcards=document.getElementsByClassName("article-allcards")
  for(let i=0;i<article_allcards.length;i++){
    article_allcards[i].style.width="98%"
    // center this article - 0 margin from top and bottom - auto (Automatic Left and Right Margin) 
    article_allcards[i].style.margin = "0 auto"
    article_allcards[i].style.textAlign="left"
  }

  flashCardGlobalsInstance.boxArticle.style.width="98%"
  flashCardGlobalsInstance.boxArticle.style.margin= "0 auto"
  flashCardGlobalsInstance.boxArticle.style.textAlign="left"
  parsedVerses=flashCardGlobalsInstance.mycards// converts flashCardGlobalsInstance.versesToAppend from a string to an array
      
  // Get the search parameters from the URL
  const urlParameters = new URLSearchParams(window.location.search);

  // Get the value of a parameter
  const primary_key = urlParameters.get('pk');
  // Get box number as an integer
  flashCardGlobalsInstance.parametersBox = urlParameters.get('box')
  const delete_verse = urlParameters.get('delete')
  const check = urlParameters.get('check')
  const x = urlParameters.get('x')

  if(primary_key && flashCardGlobalsInstance.parametersBox && delete_verse){
    // convert pk to an int using parseInt(pk)
    const index = parseInt(primary_key)
    let confirmation = window.confirm(`Are you sure you want to delete ${flashCardGlobalsInstance.mycards[index].answer} \n\n"${flashCardGlobalsInstance.mycards[index].question}"\n\n`)
    let true_statement = true
    if(confirmation){
      // only delete the primary_key index 
      flashCardGlobalsInstance.mycards.splice(index, 1)
      localStorage.setItem("bible-flash-cards", JSON.stringify(flashCardGlobalsInstance.mycards))
      // refresh the page to get an updated set of bible-flash-cards from localStorage
      
    }
    window.location.href = window.location.pathname;
  }

  if(flashCardGlobalsInstance.parametersBox && !delete_verse){
    flashCardGlobalsInstance.randomVerses = []
    
    for(i=0;i<flashCardGlobalsInstance.mycards.length;i++){
      if(flashCardGlobalsInstance.mycards[i]['box']===parseInt(flashCardGlobalsInstance.parametersBox)){
        flashCardGlobalsInstance.randomVerses.push(flashCardGlobalsInstance.mycards[i])
      }
    }

    flashCardGlobalsInstance.randomVerseIndex=Math.floor(Math.random()*flashCardGlobalsInstance.randomVerses.length)
    flashCardGlobalsInstance.showCardContainer.style.display="none"
    if(flashCardGlobalsInstance.randomVerses.length>0){
      flashCardGlobalsInstance.boxesMain.style.display="block"
      flashCardGlobalsInstance.showCardContainer.style.display="block"
      showRandomVerse(flashCardGlobalsInstance.parametersBox)
    }
    else{
      flashCardGlobalsInstance.boxesMain.style.display="block"
      flashCardGlobalsInstance.boxnum.innerHTML+=`<h3>${pluralize('st', parseInt(flashCardGlobalsInstance.parametersBox))} Box</h3>`
    }
      
    // display:block is the default for the <div> element
    // hide everything in the <main> element
    flashCardGlobalsInstance.indexMain.style.display="none"
  // end if(box && !delete_verse)
  };

  attachEventListeners();
// end main() 
};
     
 document.addEventListener('DOMContentLoaded', () =>{
   flashCardGlobalsInstance = new FlashCardGlobals();
   flashCardGlobalsInstance.pageReloaded = true;
   
   main();
     
   //end DOMContentLoaded event listener
  })