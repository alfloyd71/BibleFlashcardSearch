console.log('flash card globals')
class FlashCardGlobals{
  constructor (){
    this.parametersBox=1;
    this.mycards;
    this.versesToAppend, this.parsedVerses;
    this.indexMain = document.querySelector("#index-main");
    this.cardQuestion = document.querySelector("#card-question");
    this.cardAnswer = document.querySelector("#card-answer");
    this.boxnum = document.querySelector("#boxnum");
    this.boxesMain = document.querySelector("#boxes-main");
    this.showCardContainer = document.querySelector('#show-card-container')
    this.insertHtml = document.querySelector("#insert-html-here");
    this.boxArticle = document.querySelector("#box-article");
    this.hyperlinkCheck = document.querySelector("#hyperlink-check");
    this.hyperlinkX = document.querySelector("#hyperlink-x")
    this.randomVerseIndex;
    this.randomVerses;
    
    /* tally box random verses*/
    this.tallyBoxArry = [0,0,0,0,0];
  }
}

class EditVersesGlobals{
  constructor (){
    /*let inputarea, verse, reference,verses
   let buttonflag=false
   let versesToAppend;let parsedVerses;
   let myArrayMatchValue;
   let strmyFlashCards;*/
   this.inputArea, this.verse, this.reference, this.verses;
   this.buttonFlag=false;
   this.versesToAppend, this.parsedVerses;
   this.myArrayMatchValue;
   this.strmyFlashCards;
   this.showCardContainer;

   /* tally box random verses*/
   this.tallyBoxArry = [0,0,0,0,0];
  }
}