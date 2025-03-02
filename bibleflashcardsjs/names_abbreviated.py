def getBookNamesAbbreviated(bookname="psalms"):
    bookname=bookname.upper()
    match bookname:
        case 'GE':
            bookname="genesis"
        case "GEN":
            bookname="genesis"
        case "EX":
            bookname="exodus"    
        case "EXO":
            bookname="exodus"
        case "LEV":
            bookname="leviticus"
        case "NUM":
            bookname="numbers"
        case "DEU":
            bookname="deuteronomy"
        case "JOS":
            bookname="joshua"
        case "JOSH":
            bookname="joshua"
        case "JDG":
            bookname="judges"
        case "JDJ":
            bookname="judges"
        case "JUDJ":
            bookname="judges"
        case "RUT":
            bookname="ruth"
        case "1 SA":
            bookname="1 samuel"
        case "1 SAM":
            bookname="1 samuel"
        case "2 SA":
            bookname="2 samuel"
        case "2 SAM":
            bookname="2 samuel"
        case "1 KI":
            bookname="1 kings"
        case "1 KIN":
            bookname="1 kings"
        case "1 KING":
            bookname="1 kings"
        case "2 KI":
            bookname="2 kings"
        case "2 KIN":
            bookname="2 kings"
        case "2 KING":
            bookname="2 kings"
        case "1 CH":
            bookname="1 chronicles"
        case "1 CHR":
            bookname="1 chronicles"
        case "2 CH":
            bookname="2 chronicles"
        case "2 CHR":
            bookname="2 chronicles"
        case "EZR":
            bookname="ezra"
        case "NEH":
            bookname="nehemiah"
        case "EST":
            bookname="esther"
        case "JB":
            bookname="job"
        case "PS":
            bookname="psalms"
        case "PSA":
            bookname="psalms"
        case "PR":
            bookname="proverbs"
        case "PRO":
            bookname="proverbs"
        case "EC":
            bookname="ecclesiastes"
        case "ECC":
            bookname="ecclesiastes"
        case "SNG":
            bookname="song"
        case "IS":
            bookname="isaiah"
        case "ISA":
            bookname="isaiah"
        case "JE":
            bookname="jeremiah"
        case "JER":
            bookname="jeremiah"
        case "LA":
            bookname="lamentations"
        case "LAM":
            bookname="lamentations"
        case "EZ":
            bookname="ezekiel"
        case "EZE":
            bookname="ezekiel"
        case "DA":
            bookname="daniel"
        case "DAN":
            bookname="daniel"
        case "HO":
            bookname="hosea"
        case "HOS":
            bookname="hosea"
        case "JOE":
            bookname="joel"
        case "AM":
            bookname="amos"
        case "AMO":
            bookname="amos"
        case "OB":
            bookname="obadiah"
        case "OBA":
            bookname="obadiah"
        case "JON":
            bookname="jonah"
        case "MI":
            bookname="micah"
        case "MIC":
            bookname="micah"
        case "NA":
            bookname="nahum"
        case "NAH":
            bookname="nahum"
        case "HAB":
            bookname="habakkuk"
        case "ZE":
            bookname="zephaniah"
        case "ZEP":
            bookname="zephaniah"
        case "HAG":
            bookname="haggai"
        case "ZEC":
            bookname="zechariah"
        case "MAL":
            bookname="malachi"
        
        #New Testament 
        case "MAT":
            bookname="matthew"
        case "MAR":
            bookname="mark"
        case "LU":
            bookname="luke"
        case "LUK":
            bookname="luke"
        case "JOH":
            bookname="john"
        case "JHN":
            bookname="john"
        case "AC":
            bookname="acts"
        case "ACT":
            bookname="acts"
        case "RO":
            bookname="romans"
        case "ROM":
            bookname="romans"
        case "1 CO":
            bookname="1 corinthians"
        case "1 COR":
            bookname="1 corinthians"
        case "2 CO":
            bookname="2 corinthians"
        case "2 COR":
            bookname="2 corinthians"
        case "GA":
            bookname="galatians"
        case "GAL":
            bookname="galatians"
        case "EP":
            bookname="ephesians"
        case "EPH":
            bookname="ephesians"
        case "PHL":
            bookname="philippians"
        case "PHP":
            bookname="philippians"
        case "CO":
            bookname="colossians"
        case "COL":
            bookname="colossians"
        case "1 TH":
            bookname="1 thessalonians"
        case "1 THE":
            bookname="1 thessalonians"
        case "1 THES":
            bookname="1 thessalonians"
        case "2 TH":
            bookname="2 thessalonians"
        case "2 THE":
            bookname="2 thessalonians"
        case "2 THES":
            bookname="2 thessalonians"
        case "1 TI":
            bookname="1 timothy"
        case "1 TIM":
            bookname="1 timothy"
        case "2 TI":
            bookname="2 timothy"
        case "2 TIM":
            bookname="2 timothy"
        case "TIT":
            bookname="titus"
        case "PHM":
            bookname="philemon"
        case "HE":
            bookname="hebrews"
        case "HEB":
            bookname="hebrews"
        case "JA":
            bookname="james"
        case "JAS":
            bookname="james"
        case "JAM":
            bookname="james"
        case "1 PE":
            bookname="1 peter"
        case "1 PET":
            bookname="1 peter"
        case "2 PE":
            bookname="2 peter"
        case "2 PET":
            bookname="2 peter"
        case "1 JO":
            bookname="1 john"
        case "1 JOH":
            bookname="1 john"
        case "2 JO":
            bookname="2 john"
        case "2 JOH":
            bookname="2 john"
        case "3 JO":
            bookname="3 john"
        case "3 JOH":
            bookname="3 john"
        case "JDE":
            bookname="jude"
        case "RE":
            bookname="revelation"
        case "REV":
            bookname="revelation"

        
        
        
    return bookname