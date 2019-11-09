from spellchecker import SpellChecker

spell = SpellChecker()
# find those words that may be misspelled
misspelled = spell.unknown(['10.56'])
for word in misspelled:
    print(spell.correction(word))
