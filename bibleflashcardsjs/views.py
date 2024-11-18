from django.shortcuts import render
from bibleflashcardsjs.forms import BibleVerseForm
from django.http import HttpResponseRedirect
import pythonbible as bible
from pythonbible.errors import InvalidChapterError
from bibleflashcardsjs.biblebooks import getBookNames
import string, re
from .names_abbreviated import getBookNamesAbbreviated

def parseVerse(bibleverse):
    """if my_string.find(search_string) != -1:
        print(f"{search_string} found in the string.")
    else:
        print(f"{search_string} not found in the string.")"""
    versereference=""
    book=""
    chapter=""
    verse=""
    my_string = bibleverse
    search_string = ":"
    if my_string.find(search_string) != -1:

   
        #bibleverse = "matthew 24:24"
        versereference = bibleverse
        versereference=string.capwords(versereference)

        #bibleverse = "john 3:16"

        book="matthew"
        chap="28"
        verse="1"

        match=""

        i=0
        while(match!=":"):
            match=bibleverse[i]
            i+=1

        print(match)
        print(i)   

        verse=bibleverse[i:]
        verse=verse.strip()
        print('verse is: ',verse)

        j=0

        match=""
        while(match!=" "):
            match=bibleverse[j]
            j+=1



        chapter=bibleverse[j:i-1]
        chapter=chapter.strip()
        print('chapter is ',chapter)

        book=bibleverse[:j]
        book=book.strip()
        print('book is ',book)
    
    else:
        print(f"{search_string} not found in the string.")
        book="Revelation"
        chapter="21"
        verse="4"
        versereference="Revelation 21:4"
    return versereference,book, int(chapter), int(verse)

def parseNumVerse(chapterandverse):
        i=0
        match=""
        while(match!=":"):
            match=chapterandverse[i]
            i+=1

        print(match)
        print(i)   

        verse=chapterandverse[i:]
        verse=verse.strip()
        print('verse is after strip: ',verse)

        chapter=chapterandverse[0:i-1]
        chapter=chapter.strip()
        print('chapter is ',chapter)
        return chapter, verse



def getVerse(verse):
  #verse="2 peter 1:7"
  versetest=""
  versewithnum="2 timothy 1:5"
  bookname=""
  chapter=""
  versereference=""
  startswithnum=False
  v=verse.split(' ')
  print(v)
  try:
    num=int(v[0])
    print('starts with the number ',num)
    bookname=v[0]+" "+v[1]
    chapterandverse=v[2]
    chapter,verse=parseNumVerse(chapterandverse)
    versewithnum=str(num)+" "+v[1]+" "+v[2]
    print(versewithnum)
    startswithnum=True
  except (ValueError, IndexError):
    print("unable to convert to an integer")
    try:
        versereference,bookname, chapter, verse = parseVerse(verse)
    except:
        pass
     
  if not startswithnum:
    bookname=bookname.strip()
  
 
  #bookname="MATTHEW"
  bookname=getBookNamesAbbreviated(bookname=bookname)
  bookname=bookname.upper()
  print('bookname testing line 50',bookname)
  versetest=str(bookname)+" "+str(chapter)+":"+str(verse)
  versetest=string.capwords(versetest)
  
  book = getBookNames(bookname=bookname)

  print('let us do a book check ',book)
  verse_text=""

  
  try:
    print('book',book)
    print('chapter',chapter)
    print('verse',verse)
    chapter=int(chapter)
    verse=int(verse)
    reference = bible.NormalizedReference(book, chapter, verse, chapter, verse)#Genesis 1:1-4
    verse_ids = bible.convert_reference_to_verse_ids(reference)

    print('reference ',reference)
    print('verse_ids ',verse_ids[0])

    verse_text = bible.get_verse_text(verse_ids[0], version=bible.Version.KING_JAMES)

    print(verse_text)

  except:
    print('This is an Invalid Chapter')

  formattedverse=verse_text 
  return formattedverse,versetest

# edit kjv Bible verses
def editVerses(request):
    verse="Revelation 21:4"
    verse_text=""
    reference=""
    versereference=""
    submitted=False
    if request.method == 'POST':
        verse=request.POST.get('verse')
        if(verse):
            verse=verse.replace('\\','')
            verse=verse.replace('/','')
            #(\S+\s\S+) - Captures everything up to and including the second space
            # \s matches any whitespace chars while \S is just the oposite and represents non-whitespace characters
            
            try:
                int(verse[0])
                #1 John 3:16
                verse=re.sub(r'(^\d+\s\S+\s\S+)\s', r'\1:', verse)
            except:
                #John 3:16
                verse=re.sub(r'(^\S+\s\S+)\s', r'\1:', verse)
            

        form = BibleVerseForm(request.POST)#, request.FILES

        print("request.POST ",request.POST)
        if form.is_valid():
            if(verse!=''):
                return HttpResponseRedirect('?submitted=True&verse=%s' % verse)
        else:
            print('Invalid form ', form.errors)
            
    else:
        form = BibleVerseForm()
        if 'submitted' in request.GET:
            submitted = True
   
        if 'verse' in request.GET:
            verse=request.GET['verse']
    print('verse is ',verse)
    verse_text, versereference=getVerse(verse)
    form=BibleVerseForm()
    context={'title':'Bible Flashcards App the King James Version(KJV)','form':form, 
             'versereference':versereference, 'verse_text':verse_text, 'reference':reference              }
    return render(request, 'bibleflashcardsjs/editverses.html', context)

def fetchCard(request):
    return render(request, "bibleflashcardsjs/card.html")

def loadCard():
    card_list = [{'question':'In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.',
                'answer':'Matthew 28:1', 'box':1},
                {'question':'But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.',
                 'answer':'2 Peter 3:8', 'box':5},
                
                ]
                
    
    return card_list

def showCards(request):
    card_list=loadCard()
    print(card_list[0]['question'],card_list[0]['answer'])
    context={'card_list':card_list,}
        

    return render(request, "bibleflashcardsjs/index.html", context)

def getBox(request):
    template_name = "bibleflashcardsjs/box.html"

    return render(request, template_name)
    
    

        