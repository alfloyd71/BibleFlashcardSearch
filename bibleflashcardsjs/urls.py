from django.urls import path
from bibleflashcardsjs.views import (edit_verses, show_cards, fetch_card,)

urlpatterns=[
    path('', show_cards, name='show_cards'),
    path('card/', fetch_card),
    path('edit-verses/', edit_verses,name='edit_verses'),
]