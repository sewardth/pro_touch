#!/usr/bin/env python

import webapp2
import google.appengine.api.mail as mail
from google.appengine.api import app_identity


class Quote(webapp2.RequestHandler):
    def post(self):
        post ={'emailAddress' : self.request.get('emailAddress'),
               'name' : self.request.get('name'),
               'city' : self.request.get('city'),
               'phone' : self.request.get('phone'),
               'sqFootage' : self.request.get('sqFootage'),
               'rooms' : self.request.get('rooms')
        }

        self.response.write(post)
        self.sendMail(**post)


    def sendMail(self, **post):
    
        sender_address = 'Protouch Quotes <protouchsites@gmail.com>'
        subject = 'New Quote Request'
        body = """
        name: {}
        email: {}
        city: {}
        phone: {}
        square footage: {}
        rooms: {}""".format(post['name'], post['emailAddress'], post['city'], post['phone'], post['sqFootage'], post['rooms'])
        
        mail.send_mail(sender_address, 'sewardth@gmail.com', subject, body)




app = webapp2.WSGIApplication([
    ('/quote.*', Quote)
], debug=True)