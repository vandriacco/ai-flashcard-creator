import genanki
import deepl
import string

def generate_deck(source, target, text, translator):
    remove_punct = str.maketrans('', '', string.punctuation)
    words = [word.lower().strip().translate(remove_punct)  for word in text.split()]

    word_set = set(words)
    
    translation_dict = {}
    for word in word_set:
        if len(word) > 3:   # filters out very short words
            translation = translator.translate_text(word, source_lang=source, target_lang=target)
            translation_dict[word] = str(translation)

    model_id = 2023691137
    model = genanki.Model(
        model_id,
        'Language Vocabulary',
        fields=[
            {'name': 'Original'},
            {'name': 'Translation'},
        ],
        templates=[
            {
                'name': 'Card 1',
                'qfmt': '{{Original}}',
                'afmt': '{{Translation}}',
            },
            {
                'name': 'Card 2',
                'qfmt': '{{Translation}}',
                'afmt': '{{Original}}',
            },
        ])

    deck_id = 1827820865
    deck = genanki.Deck(deck_id, 'Vocabulary Words')

    for original, translation in translation_dict.items():
        note = genanki.Note(model=model, fields=[original, translation])
        deck.add_note(note)

    # Save the deck to an Anki package (*.apkg) file
    genanki.Package(deck).write_to_file('GeneratedDeck.apkg')