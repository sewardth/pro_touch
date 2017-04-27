#!/usr/bin/env python

import webapp2, jinja2, os

template_dir = os.path.join(os.path.dirname(__file__), '../templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), 
autoescape=True)

class Services(webapp2.RequestHandler):
    def get(self):
    
        template_values = {'pageCSSFile':'services.css',
                            'pageJavaScriptFile':'services.js',
                            'title':'Services'}
        template = jinja_env.get_template('services.html')
        self.response.write(template.render(template_values))





app = webapp2.WSGIApplication([
    ('/services.*', Services)
], debug=True)
