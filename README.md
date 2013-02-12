# Description 
------------
I started using Strapdown a few months ago to make the documentation of my personal projects writting Markdown and consulting them latter with a browser  
After some time using it, I made a few changes to the original Strapdown template to add a TOC, which resulted in this template [strapdown_template.md.html]  
It's intended to be used like a personal-notes-document:  written with text (vim+markdown) and readed in a local browser  


# How to use it
------------
  + Download the template [strapdown_template.md.html],  fill-it-in with your documenting-info using markdown syntax, and save    
  + Any time latter, when you need to consult it, open it in a browser, and you will see it all colorfull and cheery :)    


# Costumize *vim* to use markdown syntax on `.md.html` files
------------
```
mkdir -p  ~/.vim/ftdetect 
cd ~/.vim/ftdetect
wget https://raw.github.com/zipizap/strapdown_template/master/vim/ftdetect/md.html.vim  
# from now on, vim will use markdown-syntax on '.md.html' files
```

# Can be improved
------------
  + It needs internet connection to download the javascript libs that it uses (would be nice to have an offline-stand-alone version)
  + I don't like that html-bottom of the template: its big, chunky and ugly. Maybe some day I'll have the time to make it tiny tiny like a couple lines.
  + With more JQuery magic...  a ?mini-viewport? ... 


# Many thanks to:
-----------
  + [Strapdown.js](http://strapdownjs.com/)
  + [Jquery TOC plugin](http://projects.jga.me/toc/#toc0)
  + JQuery, Bootstrap and all other infamously renowned projects who made this possible
  + all the open source community and happy people :)  (not joking!)



[strapdown_template.md.html]:https://github.com/zipizap/strapdown_template/raw/master/strapdown_template.md.html 
