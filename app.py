#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template

app = Flask(__name__)

app_data = {
    "name":         "Flask boilerplate for a simple web ap",
    "description":  "A basic Flask app using bootstrap for layout",
    "author":       "Jack Bicknell",
    "html_title":   "Starter Template for a Flask Web App",
    "project_name": "Project name",
    "keywords":     "flask, webapp, template, basic"
}


@app.route('/')
def index():
    return render_template('index.html', app_data=app_data)

@app.route('/b1')
def b1():
    return render_template('b1.html', app_data=app_data)

@app.route('/b2')
def b2():
    return render_template('b2.html', app_data=app_data)

@app.route('/b3')
def b3():
    return render_template('b3.html', app_data=app_data)


# ------- PRODUCTION CONFIG -------
#if __name__ == '__main__':
#    app.run()



# ------- DEVELOPMENT CONFIG -------
if __name__ == '__main__':
    app.run(debug=True)
