# Bible Flashcard Search

<p align="center">
  <strong>An open-source Django application for memorizing Bible verses using the proven flashcard box system</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#license">License</a>
</p>

---

## Overview

Bible Flashcard Search (BFS) is an open-source flashcard application that enables users to search for any verse in the King James Version (KJV) of the Bible by verse reference and create flashcards to be added to a personalized flashcard list. The application implements the **Leitner System** (flashcard box system) that organizes and uses flashcards in a systematic way to enhance learning through spaced repetition.

## Screenshots
<p align="center">
  <img src="https://www.freesmartphoneapps.com/static/biblefs/images/screenshots/edit-verses.jpg" alt="Edit Verses" width="300">&nbsp;&nbsp;<img src="https://www.freesmartphoneapps.com/static/biblefs/images/screenshots/study-boxes.jpg" alt="Study Boxes" width="300">
</p>

## Features

- **Verse Search** - Search for any verse in the King James Version (KJV) Bible by reference (e.g., John 3:16)
- **Flashcard Creation** - Create custom flashcards from any Bible verse
- **Spaced Repetition System** - Implements the proven flashcard box method for effective memorization
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Minimal Dependencies** - Lightweight application with only `pythonbible` as an external dependency

## Demo

Explore the features of the Bible Flashcard App by checking out our live demo:

**[View Live Demo](https://www.freesmartphoneapps.com/biblefs/)**

## The Flashcard Box System

The application uses a spaced repetition system based on the Leitner method. Each box represents a different level of familiarity or mastery:

| Box | Level | Description |
|-----|-------|-------------|
| **Box 1** | New Material | Contains new flashcards or cards that the learner is less familiar with |
| **Box 2** | Review | Flashcards that have been successfully recalled a few times are moved here for regular review |
| **Box 3** | Mastery | Cards from Box 2 that have been consistently recalled correctly are promoted here for less frequent review |
| **Box 4** | Advanced | Optional box for more advanced levels of mastery |
| **Box 5** | Expert | Optional box for verses that have been thoroughly memorized |

### How It Works

1. All new cards start in **Box 1**
2. When you correctly recall a card, it moves to the next box
3. When you incorrectly recall a card, it moves back to **Box 1**
4. Cards in higher boxes are reviewed less frequently
5. This system optimizes your study time by focusing on verses you find difficult

## Installation

### Prerequisites

- Python 3.8 or higher
- Django 4.x or higher
- pip (Python package manager)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alfloyd71/BibleFlashcardSearch.git
   cd BibleFlashcardSearch
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install django pythonbible
   ```

4. **Add the app to your Django project**
   
   In your project's `settings.py`, add `biblefs` and `django.contrib.humanize` to `INSTALLED_APPS`:
   ```python
   INSTALLED_APPS = [
       # ... other apps
       'django.contrib.humanize',
       'biblefs',
   ]
   ```

5. **Include the URLs**
   
   In your project's `urls.py`:
   ```python
   from django.urls import path, include

   urlpatterns = [
       # ... other paths
       path('biblefs/', include('biblefs.urls')),
   ]
   ```

6. **Run migrations**
   ```bash
   python manage.py migrate
   ```

7. **Collect static files** (for production)
   ```bash
   python manage.py collectstatic
   ```

8. **Start the development server**
   ```bash
   python manage.py runserver
   ```

9. **Access the application**
   
   Open your browser and navigate to `http://127.0.0.1:8000/biblefs/`

## Usage

### Searching for a Verse

1. Navigate to the **Edit Verses** page
2. Enter a Bible verse reference in the search field (e.g., `John 3:16`, `Genesis 1:1`, `Psalm 23:1`)
3. The application will fetch and display the verse text from the KJV Bible

### Creating a Flashcard

1. After searching for a verse, click the **Add to Flashcards** button
2. The verse will be added to your flashcard collection in Box 1
3. Review your flashcards regularly to move them through the box system

### Supported Reference Formats

The application supports various verse reference formats:

- `John 3:16` - Standard format
- `2 Peter 3:8` - Numbered books
- `Genesis 1 1` - Space-separated (automatically converted)
- `Ps 23:1` or `ps 23 1` - Abbreviations (e.g., Gen, Ex, Lev, Num, Deut, etc.)

## Project Structure

```
biblefs/
├── migrations/           # Django database migrations
├── static/
│   └── biblefs/
│       ├── css/          # Stylesheets
│       │   ├── android-app-styles.css
│       │   ├── box-styles.css
│       │   ├── index-styles.css
│       │   ├── main-stream-styles.css
│       │   └── responsive-navbar.css
│       ├── images/       # Icons and images
│       │   └── icons/    # Mobile Responsive icons
│       └── js/           # JavaScript files
│           ├── edit-verses.js
│           ├── flashcard-globals.js
│           ├── main.js
│           ├── pluralize.js
│           ├── responsive-navbar.js
│           └── tally-boxes.js
│       
├── templates/
│   └── biblefs/
│       ├── base.html         # Base template
│       ├── box-navigation.html
│       ├── card.html         # Flashcard template
│       ├── editverses.html   # Verse search page
│       └── index.html        # Main page
├── __init__.py
├── admin.py              # Django admin configuration
├── apps.py               # App configuration
├── bible_books.py        # Bible book data and utilities
├── forms.py              # Django forms
├── models.py             # Database models
├── names_abbreviated.py  # Abbreviated book names mapping
├── tests.py              # Unit tests
├── urls.py               # URL routing
└── views.py              # View functions
```

## Dependencies

| Package | Purpose |
|---------|---------|
| Django | Web framework |
| pythonbible | Bible verse parsing and lookup |
| django.contrib.humanize | Template filters for human-readable data |

## API Endpoints

| Endpoint | View | Description |
|----------|------|-------------|
| `/biblefs/` | `show_cards` | Main flashcard display page |
| `/biblefs/card/` | `fetch_card` | Fetch individual card data |
| `/biblefs/edit-verses/` | `edit_verses` | Search and edit Bible verses |

## License

This project is open source and available under the [MIT License](https://github.com/alfloyd71/BibleFlashcardSearch?tab=MIT-1-ov-file#readme).

## Acknowledgments

- [pythonbible](https://github.com/avendesora/pythonbible) - For the Bible verse parsing library
- [Django](https://www.djangoproject.com/) - The web framework used
- The Leitner System - For the proven spaced repetition methodology

---

<p align="center">
  Made with faith and code
</p>