$('div#content').prepend('<div id="toc"></div>');
$('#toc').toc({
    'selectors': 'h1,h2,h3,h4,h5,h6'
});

// This next part realy looks ugly, but there is a reason for it, and has to do with the normal css loading priority:
//  3. external style sheets (inside head section)    (bigger has - priority, lower has + priority)
//  2. internal style sheets (inside head section)
//  1. Inline style (declared inside any html tag)    (see http://www.w3schools.com/css/css_howto.asp)
// Turns out that the Strapdown library places its Strapdown-css rules as an external style sheet in the header section, and for 
// the TOC-css to function properly it must be loaded with higher priority than Strapdown-css.
// To make TOC-css load *before* the Strapdown-css, I tried severall things and only one worked:
//    + [DOES NOT WORK] load TOC-css from an external css file, inside the head section, as first child
//    + [----WORKS----] embed the TOC-css rules with <style>, inside the head section, as its first child
// There you go, there is a reason for reaching all this ugliness and I do admit that is far from perfect - so if you ever read this 
// and know a better solution, please fork+improve+pull&message me, as I'll be glad to see it looking better :)

$('head').prepend('' +
    '<style media="screen" type="text/css">  \n' +
    '#toc {  \n' +
    '    top: auto;  \n' +
    '    left: 0px;  \n' +
    '    height: 100%;  \n' +
    '    position: static;  \n' +
    '    background: #333;  \n' +
    '    box-shadow: inset -5px 0 5px 0px #000;  \n' +
    '    width: auto;  \n' +
    '    padding-top: 20px;  \n' +
    '    color: #fff;  \n' +
    '}  \n' +
    '  \n' +
    '#toc ul {  \n' +
    '    margin: 0;  \n' +
    '    padding: 0;  \n' +
    '    list-style: none;  \n' +
    '}  \n' +
    '  \n' +
    '#toc li {  \n' +
    '    padding: 5px 10px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc a {  \n' +
    '    color: #fff;  \n' +
    '    text-decoration: none;  \n' +
    '    display: block;  \n' +
    '}  \n' +
    '#toc .toc-h1 {  \n' +
    '    padding-left: 10px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-h2 {  \n' +
    '    padding-left: 20px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-h3 {  \n' +
    '    padding-left: 30px;  \n' +
    '}  \n' +
    '#toc .toc-h4 {  \n' +
    '    padding-left: 40px;  \n' +
    '}  \n' +
    '#toc .toc-h5 {  \n' +
    '    padding-left: 50px;  \n' +
    '}  \n' +
    '#toc .toc-h6 {  \n' +
    '    padding-left: 60px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-active {  \n' +
    '    background: #336699;  \n' +
    '    box-shadow: inset -5px 0px 10px -5px #000;  \n' +
    '}  \n' +
    '</style>  \n' +
    '');
