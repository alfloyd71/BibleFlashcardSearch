from django import forms 

class BibleVerseForm(forms.Form):
    verse=forms.CharField(required=False, max_length=100, label='Bible Verse',widget=forms.TextInput(attrs={'id':'text-verse','placeholder': 'e.g., rev 21:4'}))
    