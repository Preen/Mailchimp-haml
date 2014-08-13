Mailchimp-haml
==============

Mailchimp custom template made with HAML

This is just a complete template of mailchimp made in HAML. Instead of doing all of the CSS in the file directly I have separated it.

I use grunt to make the inline work and guard to compile the HAML correctly. I have tried grunt-haml, gulp-haml but with major problems, thats why I use the guard-haml instead.

To install you need to terminal into the dir:

bundle install
npm install grunt
npm install grunt-inline
npm install grunt-contrib-watch

The open up two terminal windows, one where you type in: grunt watch, the other one you type in bundle exec guard.
