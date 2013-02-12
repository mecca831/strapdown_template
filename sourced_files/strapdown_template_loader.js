$('xmp').append('' + 
'<!-- for Strapdown -->       \n' +
'<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>                                                         \n' +
'                                                                                                                           \n' +
'<!-- for TOC (jquery plugin) (see http://projects.jga.me/toc/#toc0)       \n' +
'  HAD its problems:       \n' +
'    + [FIXED] its upper limit is not adjusted...       \n' +
'    + [FIXED] if TOC is lengthy, its bottom is not seenable - should have a vertical scroll or something...       \n' +
'    + [FIXED] in small windows, the div#content gets hidden behind...        \n' +
'    The fixes were made by tweaking css/js code below       \n' +
'       \n' +
'<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>       \n' +
'-->       \n' +
'<script src="https://raw.github.com/jgallen23/toc/master/dist/jquery.toc.min.js"></script>       \n' +
'<script>       \n' +
'$("div#content").prepend(\'<div id="toc"></div>\')       \n' +
'$("#toc").toc({       \n' +
'  "selectors": "h1,h2,h3,h4,h5"       \n' +
'});       \n' +
'</script>       \n' +
'<style media="screen" type="text/css">       \n' +
'#toc {       \n' +
'    top: auto;       \n' +
'    left: 0px;       \n' +
'    height: 100%;       \n' +
'    position: static;       \n' +
'    background: #333;       \n' +
'    box-shadow: inset -5px 0 5px 0px #000;       \n' +
'    width: auto;       \n' +
'    padding-top: 20px;       \n' +
'    color: #fff;       \n' +
'}       \n' +
'       \n' +
'#toc ul {       \n' +
'    margin: 0;       \n' +
'    padding: 0;       \n' +
'    list-style: none;       \n' +
'}       \n' +
'       \n' +
'#toc li {       \n' +
'    padding: 5px 10px;       \n' +
'}       \n' +
'       \n' +
'#toc a {       \n' +
'    color: #fff;       \n' +
'    text-decoration: none;       \n' +
'    display: block;       \n' +
'}       \n' +
'#toc .toc-h1 {       \n' +
'    padding-left: 5px;       \n' +
'}       \n' +
'       \n' +
'#toc .toc-h2 {       \n' +
'    padding-left: 10px;       \n' +
'}       \n' +
'       \n' +
'#toc .toc-h3 {       \n' +
'    padding-left: 20px;       \n' +
'}       \n' +
'#toc .toc-h4 {       \n' +
'    padding-left: 30px;       \n' +
'}       \n' +
'#toc .toc-h5 {       \n' +
'    padding-left: 40px;       \n' +
'}       \n' +
'       \n' +
'#toc .toc-active {       \n' +
'    background: #336699;       \n' +
'    box-shadow: inset -5px 0px 10px -5px #000;       \n' +
'}       \n' +
'</style>       \n' +
'');

