#!/usr/bin/env python

import webapp2, jinja2, os

template_dir = os.path.join(os.path.dirname(__file__), '../templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), 
autoescape=True)

class About(webapp2.RequestHandler):
    def get(self):
    
        template_values = {'pageCSSFile':'about.css',
                            'pageJavaScriptFile':'main.js',
                            'title':'About Us'}
        template = jinja_env.get_template('about.html')
        self.response.write(template.render(template_values))





app = webapp2.WSGIApplication([
    ('/about.*', About)
], debug=True)
