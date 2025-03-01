from django.urls import path
from bibleflashcardsjs.views import (editVerses, showCards, fetchCard,)

urlpatterns=[
    path('', showCards, name='showCards'),
    path('card/', fetchCard),
    path('editverses/', editVerses,name='editVerses'),
    ]
