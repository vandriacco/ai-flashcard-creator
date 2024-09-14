from flask import Flask, request, send_file
import deepl
from flask_cors import CORS
from generate_deck import generate_deck
from key import API_KEY

app = Flask(__name__)
CORS(app)

# generates and displays inputed text
@app.route("/translate-text")
def translate_text():
    source = request.args.get('sourceLang', default = '', type = str)
    target = request.args.get('targetLang', default = 'EN', type = str)
    text = request.args.get('text', default = '', type = str)
    translator = deepl.Translator(API_KEY)

    result = translator.translate_text(text, source_lang=source, target_lang=target)
    generate_deck(source, target, text, translator)

    return {"text": str(result)}

# generate and download anki deck with words from translation
@app.route("/create-flashcards")
def create_flashcards():
    source = request.args.get('sourceLang', default = '', type = str)
    target = request.args.get('targetLang', default = 'EN', type = str)
    text = request.args.get('text', default = '', type = str)

    translator = deepl.Translator(API_KEY)

    result = translator.translate_text(text, source_lang=source, target_lang=target)
    generate_deck(source, target, text, translator)

    return send_file("GeneratedDeck.apkg", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)