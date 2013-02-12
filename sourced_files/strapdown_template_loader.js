$("xmp").append('
<!-- for Strapdown -->
<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>

<!-- for TOC (jquery plugin) (see http://projects.jga.me/toc/#toc0)
  HAD its problems:
    + [FIXED] its upper limit is not adjusted...
    + [FIXED] if TOC is lengthy, its bottom is not seenable - should have a vertical scroll or something...
    + [FIXED] in small windows, the div#content gets hidden behind... 
    The fixes were made by tweaking css/js code below

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
-->
<script src="https://raw.github.com/jgallen23/toc/master/dist/jquery.toc.min.js"></script>
<script>
$("div#content").prepend(\'<div id="toc"></div>\')
$("#toc").toc({
  "selectors": "h1,h2,h3,h4,h5"
});
</script>
<style media="screen" type="text/css">
#toc {
    top: auto;
    left: 0px;
    height: 100%;
    position: static;
    background: #333;
    box-shadow: inset -5px 0 5px 0px #000;
    width: auto;
    padding-top: 20px;
    color: #fff;
}

#toc ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#toc li {
    padding: 5px 10px;
}

#toc a {
    color: #fff;
    text-decoration: none;
    display: block;
}
#toc .toc-h1 {
    padding-left: 5px;
}

#toc .toc-h2 {
    padding-left: 10px;
}

#toc .toc-h3 {
    padding-left: 20px;
}
#toc .toc-h4 {
    padding-left: 30px;
}
#toc .toc-h5 {
    padding-left: 40px;
}

#toc .toc-active {
    background: #336699;
    box-shadow: inset -5px 0px 10px -5px #000;
}
</style>

')
