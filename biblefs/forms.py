from django import forms 

class BibleVerseForm(forms.Form):
    verse = forms.CharField(
        required=True,
        max_length=100,
        label='Bible Verse',
        widget=forms.TextInput(attrs={
            'id': 'text-verse',
            'class': 'form-control',
            'placeholder': 'e.g., John 3:16',
            'autocomplete': 'off',
            'autocapitalize': 'words',
            'spellcheck': 'false',
            'aria-label': 'Bible verse reference',
        })
    )
