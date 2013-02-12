#!/bin/bash
#
# This script will read HTML_FILE and create a new JS_INJECTOR_FILE with the Html code within
#
HTML_FILE="$(dirname $0)/../html/html_to_be_injected.html"
JS_INJECTOR_FILE="$(dirname $0)/../sourced_files/strapdown_template_loader.js"


function shw_grey { echo -e '\033[1;30m'"$1"'\033[0m'; }
function shw_norm { echo    "$1"; }
function shw_info { echo -e '\033[1;34m'"$1"'\033[0m'; }
function shw_warn { echo -e '\033[1;33m'"$1"'\033[0m'; }
function shw_err  { echo -e '\033[1;31mERROR: '"$1"'\033[0m'; exit 1; }

# check HTML_FILE
[ -r $HTML_FILE ] || shw_err "Cannot read HTML_FILE: '$HTML_FILE'\n Aborting!!"
# create JS_INJECTOR_FILE
echo '' > $JS_INJECTOR_FILE
echo 
