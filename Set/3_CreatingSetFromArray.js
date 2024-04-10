// Set is an iterable object and we can iterate through each elements.

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  
  for (const language of setOfLanguages) {
    console.log(language)
  }

/*
  English
  Finnish
  French
  Spanish
*/ 