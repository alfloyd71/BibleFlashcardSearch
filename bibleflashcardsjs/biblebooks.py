import pythonbible
import string

def getBookNames(bookname="GENESIS"):
    """returns number of chapters for each book of the Bible that is specified inside variable bookname"""
    numofchaps=pythonbible.get_number_of_chapters(pythonbible.Book.GENESIS)
    match bookname:
        # Old Testament – 929 chapters
        case "GENESIS" :
            numofchaps=pythonbible.Book.GENESIS
        case "EXODUS" :
            numofchaps=pythonbible.Book.EXODUS
        case "LEVITICUS" :
            numofchaps=pythonbible.Book.LEVITICUS
        case "NUMBERS" :
            numofchaps=pythonbible.Book.NUMBERS
        case "DEUTERONOMY" :
            numofchaps=pythonbible.Book.DEUTERONOMY
        case "JOSHUA" :
            numofchaps=pythonbible.Book.JOSHUA
        case "JUDGES" :
            numofchaps=pythonbible.Book.JUDGES
        case "RUTH" :
            numofchaps=pythonbible.Book.RUTH
        case "1 SAMUEL" :
            numofchaps=pythonbible.Book.SAMUEL_1
        case "2 SAMUEL" :
            numofchaps=pythonbible.Book.SAMUEL_2
        case "1 KINGS" :
            numofchaps=pythonbible.Book.KINGS_1
        case "2 KINGS" :
            numofchaps=pythonbible.Book.KINGS_2
        case "1 CHRONICLES" :
            numofchaps=pythonbible.Book.CHRONICLES_1
        case "2 CHRONICLES" :
            numofchaps=pythonbible.Book.CHRONICLES_2
        case "EZRA" :
            numofchaps=pythonbible.Book.EZRA
        case "NEHEMIAH" :
            numofchaps=pythonbible.Book.NEHEMIAH
        case "ESTHER" :
            numofchaps=pythonbible.Book.ESTHER
        case "JOB" :
            numofchaps=pythonbible.Book.JOB
        case "PSALMS" :
            numofchaps=pythonbible.Book.PSALMS
        case "PROVERBS" :
            numofchaps=pythonbible.Book.PROVERBS
        case "ECCLESIASTES" :
            numofchaps=pythonbible.Book.ECCLESIASTES
        case "SONG" :
            numofchaps=pythonbible.Book.SONG_OF_SONGS
        case "SONG OF SOLOMON" :
            numofchaps=pythonbible.Book.SONG_OF_SONGS
        case "ISAIAH" :
            numofchaps=pythonbible.Book.ISAIAH
        case "JEREMIAH" :
            numofchaps=pythonbible.Book.JEREMIAH
        case "LAMENTATIONS" :
            numofchaps=pythonbible.Book.LAMENTATIONS
        case "EZEKIEL" :
            numofchaps=pythonbible.Book.EZEKIEL
        case "DANIEL" :
            numofchaps=pythonbible.Book.DANIEL
        case "HOSEA" :
            numofchaps=pythonbible.Book.HOSEA
        case "JOEL" :
            numofchaps=pythonbible.Book.JOEL
        case "AMOS" :
            numofchaps=pythonbible.Book.AMOS
        case "OBADIAH" :
            numofchaps=pythonbible.Book.OBADIAH
        case "JONAH" :
            numofchaps=pythonbible.Book.JONAH
        case "MICAH" :
            numofchaps=pythonbible.Book.MICAH
        case "NAHUM" :
            numofchaps=pythonbible.Book.NAHUM
        case "HABAKKUK" :
            numofchaps=pythonbible.Book.HABAKKUK
        case "ZEPHANIAH" :
            numofchaps=pythonbible.Book.ZEPHANIAH
        case "HAGGAI" :
            numofchaps=pythonbible.Book.HAGGAI
        case "ZECHARIAH" :
            numofchaps=pythonbible.Book.ZECHARIAH
        case "MALACHI" :
            numofchaps=pythonbible.Book.MALACHI

        #New Testament – 260 chapters
        case "MATTHEW" :
            numofchaps=pythonbible.Book.MATTHEW
        case "MARK" :
            numofchaps=pythonbible.Book.MARK
        case "LUKE" :
            numofchaps=pythonbible.Book.LUKE
        case "JOHN" :
            numofchaps=pythonbible.Book.JOHN
        case "ACTS" :
            numofchaps=pythonbible.Book.ACTS
        case "ROMANS" :
            numofchaps=pythonbible.Book.ROMANS
        case "1 CORINTHIANS" :
            numofchaps=pythonbible.Book.CORINTHIANS_1
        case "2 CORINTHIANS" :
            numofchaps=pythonbible.Book.CORINTHIANS_2
        case "GALATIANS" :
            numofchaps=pythonbible.Book.GALATIANS
        case "EPHESIANS" :
            numofchaps=pythonbible.Book.EPHESIANS
        case "PHILIPPIANS" :
            numofchaps=pythonbible.Book.PHILIPPIANS
        case "COLOSSIANS" :
            numofchaps=pythonbible.Book.COLOSSIANS
        case "1 THESSALONIANS" :
            numofchaps=pythonbible.Book.THESSALONIANS_1
        case "2 THESSALONIANS" :
            numofchaps=pythonbible.Book.THESSALONIANS_2
        case "1 TIMOTHY" :
            numofchaps=pythonbible.Book.TIMOTHY_1
        case "2 TIMOTHY" :
            numofchaps=pythonbible.Book.TIMOTHY_2
        case "TITUS" :
            numofchaps=pythonbible.Book.TITUS
        case "PHILEMON" :
            numofchaps=pythonbible.Book.PHILEMON
        case "HEBREWS" :
            numofchaps=pythonbible.Book.HEBREWS
        case "JAMES" :
            numofchaps=pythonbible.Book.JAMES
        case "1 PETER" :
            numofchaps=pythonbible.Book.PETER_1
        case "2 PETER" :
            numofchaps=pythonbible.Book.PETER_2
        case "1 JOHN" :
            numofchaps=pythonbible.Book.JOHN_1
        case "2 JOHN" :
            numofchaps=pythonbible.Book.JOHN_2
        case "3 JOHN" :
            numofchaps=pythonbible.Book.JOHN_3
        case "JUDE" :
            numofchaps=pythonbible.Book.JUDE
        case "REVELATION" :
            numofchaps=pythonbible.Book.REVELATION

    if numofchaps==50:
        numofchaps=pythonbible.Book.PSALMS

    return numofchaps

#bookname=input("Enter a book name from the King James Version(KJV) of the bible.\n")
bookname="genesis"
bookname=bookname.upper()
booknamecap=string.capwords(bookname)
#print(booknamecap+" has "+getBookNames(bookname=bookname)+" chapters.")




            



