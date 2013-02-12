" Fix so that ".md.html" files are syntax-highlighted as markdown, although they are html files :)
" This is a variant of http://vim.1045645.n5.nabble.com/Markdown-and-its-file-extentions-td1186983.html
autocmd BufRead,BufNewFile *.\(md\.html\) set syntax=markdown 
