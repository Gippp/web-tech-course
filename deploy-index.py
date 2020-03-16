
path = '/home/losos/djstore/'


file_html = open('dist/muslim-store/index.html', 'r')
code_html = file_html.read()

code_html = code_html.replace('src="','src="{% static \'store/')
code_html = code_html.replace('.js"','.js\' %}"')

code_html = code_html.replace('href="styles','href="{% static \'store/styles')
code_html = code_html.replace('.css"','.css\' %}"')

code_html = '{% load static %} \n'+code_html

file_html.close()

file_html_dj = open(path+'store/templates/store/index.html', 'w')
file_html_dj.write(code_html)
file_html.close()


import os
import shutil

for f in os.listdir('dist/muslim-store/'):
    shutil.copy('dist/muslim-store/'+f,path+'static/store')
    shutil.copy('dist/muslim-store/'+f,path+'store/static/store')