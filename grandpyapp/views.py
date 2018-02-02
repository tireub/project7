from flask import Flask, render_template, url_for, request, json

from grandpyapp.quotes import *

app = Flask(__name__)

app.config.from_object('config')


@app.route('/')
def index():
    return render_template('index.html',
                           map_display="none;",
                           disamb_display="none;",
                           research_location="",
                           quote="")


@app.route('/place')
def updatePlace():
    research_location = request.args.get("search_location")

    displayed_quote = research()
    displayed_quote.search(research_location)
    return render_template('index.html',
                           disamb_display="none;",
                           research_location=research_location,
                           quote=displayed_quote.page_py.content[:500])

@app.route('/disamb')
def disambiguation():
    research_location = request.args.get("search_location")
    displayed_quote = research()
    displayed_quote.disamb(research_location)

    return render_template('index.html',
                           disamb_list=displayed_quote.html_list,
                           map_display="none;",
                           research_location=research_location,
                           quote="")



