import pythonbible
import string

def getBookNames(bookname="GENESIS"):
    """returns number of chapters for each book of the Bible that is specified inside variable bookname"""
    #book_name=pythonbible.get_number_of_chapters(pythonbible.Book.GENESIS)
    book_name=False
    nobook_name=False
    match bookname:
        # Old Testament – 929 chapters
        case "GENESIS" :
            book_name=pythonbible.Book.GENESIS
        case "EXODUS" :
            book_name=pythonbible.Book.EXODUS
        case "LEVITICUS" :
            book_name=pythonbible.Book.LEVITICUS
        case "NUMBERS" :
            book_name=pythonbible.Book.NUMBERS
        case "DEUTERONOMY" :
            book_name=pythonbible.Book.DEUTERONOMY
        case "JOSHUA" :
            book_name=pythonbible.Book.JOSHUA
        case "JUDGES" :
            book_name=pythonbible.Book.JUDGES
        case "RUTH" :
            book_name=pythonbible.Book.RUTH
        case "1 SAMUEL" :
            book_name=pythonbible.Book.SAMUEL_1
        case "2 SAMUEL" :
            book_name=pythonbible.Book.SAMUEL_2
        case "1 KINGS" :
            book_name=pythonbible.Book.KINGS_1
        case "2 KINGS" :
            book_name=pythonbible.Book.KINGS_2
        case "1 CHRONICLES" :
            book_name=pythonbible.Book.CHRONICLES_1
        case "2 CHRONICLES" :
            book_name=pythonbible.Book.CHRONICLES_2
        case "EZRA" :
            book_name=pythonbible.Book.EZRA
        case "NEHEMIAH" :
            book_name=pythonbible.Book.NEHEMIAH
        case "ESTHER" :
            book_name=pythonbible.Book.ESTHER
        case "JOB" :
            book_name=pythonbible.Book.JOB
        case "PSALMS" :
            book_name=pythonbible.Book.PSALMS
        case "PROVERBS" :
            book_name=pythonbible.Book.PROVERBS
        case "ECCLESIASTES" :
            book_name=pythonbible.Book.ECCLESIASTES
        case "SONG" :
            book_name=pythonbible.Book.SONG_OF_SONGS
        case "SONG OF SOLOMON" :
            book_name=pythonbible.Book.SONG_OF_SONGS
        case "ISAIAH" :
            book_name=pythonbible.Book.ISAIAH
        case "JEREMIAH" :
            book_name=pythonbible.Book.JEREMIAH
        case "LAMENTATIONS" :
            book_name=pythonbible.Book.LAMENTATIONS
        case "EZEKIEL" :
            book_name=pythonbible.Book.EZEKIEL
        case "DANIEL" :
            book_name=pythonbible.Book.DANIEL
        case "HOSEA" :
            book_name=pythonbible.Book.HOSEA
        case "JOEL" :
            book_name=pythonbible.Book.JOEL
        case "AMOS" :
            book_name=pythonbible.Book.AMOS
        case "OBADIAH" :
            book_name=pythonbible.Book.OBADIAH
        case "JONAH" :
            book_name=pythonbible.Book.JONAH
        case "MICAH" :
            book_name=pythonbible.Book.MICAH
        case "NAHUM" :
            book_name=pythonbible.Book.NAHUM
        case "HABAKKUK" :
            book_name=pythonbible.Book.HABAKKUK
        case "ZEPHANIAH" :
            book_name=pythonbible.Book.ZEPHANIAH
        case "HAGGAI" :
            book_name=pythonbible.Book.HAGGAI
        case "ZECHARIAH" :
            book_name=pythonbible.Book.ZECHARIAH
        case "MALACHI" :
            book_name=pythonbible.Book.MALACHI

        #New Testament – 260 chapters
        case "MATTHEW" :
            book_name=pythonbible.Book.MATTHEW
        case "MARK" :
            book_name=pythonbible.Book.MARK
        case "LUKE" :
            book_name=pythonbible.Book.LUKE
        case "JOHN" :
            book_name=pythonbible.Book.JOHN
        case "ACTS" :
            book_name=pythonbible.Book.ACTS
        case "ROMANS" :
            book_name=pythonbible.Book.ROMANS
        case "1 CORINTHIANS" :
            book_name=pythonbible.Book.CORINTHIANS_1
        case "2 CORINTHIANS" :
            book_name=pythonbible.Book.CORINTHIANS_2
        case "GALATIANS" :
            book_name=pythonbible.Book.GALATIANS
        case "EPHESIANS" :
            book_name=pythonbible.Book.EPHESIANS
        case "PHILIPPIANS" :
            book_name=pythonbible.Book.PHILIPPIANS
        case "COLOSSIANS" :
            book_name=pythonbible.Book.COLOSSIANS
        case "1 THESSALONIANS" :
            book_name=pythonbible.Book.THESSALONIANS_1
        case "2 THESSALONIANS" :
            book_name=pythonbible.Book.THESSALONIANS_2
        case "1 TIMOTHY" :
            book_name=pythonbible.Book.TIMOTHY_1
        case "2 TIMOTHY" :
            book_name=pythonbible.Book.TIMOTHY_2
        case "TITUS" :
            book_name=pythonbible.Book.TITUS
        case "PHILEMON" :
            book_name=pythonbible.Book.PHILEMON
        case "HEBREWS" :
            book_name=pythonbible.Book.HEBREWS
        case "JAMES" :
            book_name=pythonbible.Book.JAMES
        case "1 PETER" :
            book_name=pythonbible.Book.PETER_1
        case "2 PETER" :
            book_name=pythonbible.Book.PETER_2
        case "1 JOHN" :
            book_name=pythonbible.Book.JOHN_1
        case "2 JOHN" :
            book_name=pythonbible.Book.JOHN_2
        case "3 JOHN" :
            book_name=pythonbible.Book.JOHN_3
        case "JUDE" :
            book_name=pythonbible.Book.JUDE
        case "REVELATION" :
            book_name=pythonbible.Book.REVELATION

    if(not book_name):
        book_name=pythonbible.Book.REVELATION
        nobook_name=True

    return book_name, nobook_name

#bookname=input("Enter a book name from the King James Version(KJV) of the bible.\n")
bookname="genesis"
bookname=bookname.upper()
booknamecap=string.capwords(bookname)
#print(booknamecap+" has "+getBookNames(bookname=bookname)+" chapters.")




            



