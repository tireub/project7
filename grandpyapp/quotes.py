import wikipedia


class research:

    def __init__(self):
        self.page_py = ""
        self.articles = []

    def search(self, desired_location):
        wikipedia.set_lang("fr")

        try:
            self.page_py = wikipedia.page(desired_location)
        except wikipedia.exceptions.DisambiguationError as e:
            self.articles = e.options

    def disamb(self, desired_location):
        self.articles = wikipedia.search(desired_location, results=5)
        self.html_list = ""
        for a in self.articles:
            self.html_list+=("<li>"+a+"</li>")






