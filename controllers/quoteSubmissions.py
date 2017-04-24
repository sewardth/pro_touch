#!/usr/bin/env python

import webapp2
from google.appengine.ext import vendor
vendor.add('lib')
import sendgrid
from sendgrid.helpers import mail
from config import Config


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
    
        body = """
        name: {}
        email: {}
        city: {}
        phone: {}
        square footage: {}
        rooms: {}""".format(post['name'], post['emailAddress'], post['city'], post['phone'], post['sqFootage'], post['rooms'])
        
        sg = sendgrid.SendGridAPIClient(apikey=Config.sendgridApiToken)

        to_email = mail.Email(Config.sendgridRecipient)
        from_email = mail.Email(Config.sendgridSender)
        subject = 'New Quote Request'
        content = mail.Content('text/plain', body)
        message = mail.Mail(from_email, subject, to_email, content)

        response = sg.client.mail.send.post(request_body=message.get())

        return response




app = webapp2.WSGIApplication([
    ('/quote.*', Quote)
], debug=True)