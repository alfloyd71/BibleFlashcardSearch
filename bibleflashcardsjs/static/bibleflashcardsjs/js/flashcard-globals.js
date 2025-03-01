console.log('flash card globals')
class FlashCardGlobals{
  constructor (){
    this.parametersBox=1;
    this.mycards;
    this.versesToAppend, this.parsedVerses;
    this.indexMain = document.getElementById("index-main");
    this.cardQuestion = document.getElementById("card-question");
    this.cardAnswer = document.getElementById("card-answer");
    this.boxnum = document.getElementById("boxnum");
    this.boxesMain = document.getElementById("boxes-main");
    this.insertHtml = document.getElementById("insert-html-here");
    this.boxArticle = document.getElementById("box-article");
    this.hyperlinkCheck = document.getElementById("hyperlink-check");
    this.hyperlinkX = document.getElementById("hyperlink-x")
    this.randomVerseIndex;
    this.randomVerses;  
  }
}