from django import forms 

class BibleVerseForm(forms.Form):
    verse=forms.CharField(required=True, max_length=100, label='Bible Verse',widget=forms.TextInput(attrs={'id':'text-verse','placeholder': 'e.g., John 3:16'}))
    