from django.urls import path
from biblefs.views import (edit_verses, show_cards, fetch_card,)

urlpatterns=[
    path('', show_cards, name='show_cards_main_stream'),
    path('card/', fetch_card),
    path('edit-verses/', edit_verses,name='edit_verses_main_stream'),
]