$('div#content').prepend('<div id="toc"></div>');
$('#toc').toc({
    'selectors': 'h1,h2,h3,h4,h5'
});
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
    '    padding-left: 5px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-h2 {  \n' +
    '    padding-left: 10px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-h3 {  \n' +
    '    padding-left: 20px;  \n' +
    '}  \n' +
    '#toc .toc-h4 {  \n' +
    '    padding-left: 30px;  \n' +
    '}  \n' +
    '#toc .toc-h5 {  \n' +
    '    padding-left: 40px;  \n' +
    '}  \n' +
    '  \n' +
    '#toc .toc-active {  \n' +
    '    background: #336699;  \n' +
    '    box-shadow: inset -5px 0px 10px -5px #000;  \n' +
    '}  \n' +
    '</style>  \n' +
    '');
