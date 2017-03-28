#!/usr/bin/env python

import webapp2, jinja2, os

template_dir = os.path.join(os.path.dirname(__file__), '../templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), 
autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
    
        template_values = {'pageCSSFile':'main.css',
                            'pageJavaScriptFile':'main.js',
                            'title':'ProTouch'}
        template = jinja_env.get_template('index.html')
        self.response.write(template.render(template_values))





app = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)
