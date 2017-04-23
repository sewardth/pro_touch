#!/usr/bin/env python

import webapp2


class Quote(webapp2.RequestHandler):
    def post(self):
        self.response.write('got it')

app = webapp2.WSGIApplication([
    ('/quote', Quote)
], debug=True)