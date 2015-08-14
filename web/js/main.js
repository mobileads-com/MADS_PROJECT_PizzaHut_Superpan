var replayTracker = 0, siteTracker = 0;

/* Generate unique ID */
var uniqId = new Date();
uniqId.getTime();

/* Get Tracker */
if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
    custTracker = rma.customize.custTracker;
}

/* Body Tag */
var bodyTag = document.getElementsByTagName('body')[0];

/* tracker */
var tracker = function (type) {
    if ( typeof custTracker != 'undefined' && custTracker != '') {
        for (var i = 0; i < custTracker.length; i++) {
            var img = document.createElement('img');
            img.src = custTracker[i] + type + '&' + uniqId;
            img.style.display = 'none';
            bodyTag.appendChild(img);
        } 
    }
};




/* Load JS File */
var loadJs = function (script, callback) {
    var script = document.createElement('script');
    script.src = script;
    
    if (typeof callback != 'undefined') {
        script.onload = callback;
    }
    
    document.getElementsByTagName('head')[0].appendChild(script);
};

/* Load CSS File */
var loadCss = function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    document.getElementsByTagName('head')[0].appendChild(link);
};

/* URL Path */
var path = 'http://rmarepo.richmediaads.com/2754/pizzahut2/';

loadCss(path+'css/style.css');

//Banner DOM create
var wrapper = document.getElementById('rma-widget');
var clickthrough = function () {
    if ( siteTracker == 0 )  {
        siteTracker = 1;
        tracker('pizzahut_site');
    }
    window.open('https://ad.doubleclick.net/ddm/trackclk/N1405.1910164MOBILEWALLA/B8784251.118993291;dc_trk_aid=291485069;dc_trk_cid=63258416', '_blank');
    
};
var replay = function () {
    if (replayTracker == 0) {
        replayTracker = 1;
        tracker('pizzahut_replay'); 
    }
    var temp = document.getElementById('rma-widget');
    console.log(temp);
    temp.style.display = 'none';
    setTimeout(function(){
        temp.style.display = 'block';
    }, 500);
    
    //location.reload();
}
wrapper.innerHTML = '<div onclick="clickthrough()" class="overflow"></div><div class="pizza_hut_logo"></div><div id="refresh" class="refresh" onclick="replay()"></div><div class="ls-logo-slide"></div><div class="ls-box"><span class="ls-text"></span><span class="shrimp-right"></span><span class="shrimp-left"></span><span class="super-pan-label"></span></div><div class="caption"><span class="get-your">GET YOUR</span><span class="pizza-at">PIZZA AT</span><span class="two red-text">2</span><span class="nd red-text">ND</span><span class="dollar red-text">$</span><span class="four red-text">4</span><span class="star">*</span></div><div class="ing-shrimps"></div><div class="ing-eggs"></div><div class="ing-salads"></div><div class="pizza"></div><div class="cloth"></div><div onclick="clickthrough()" class="order_now">ORDER NOW</div><div class="tc">*T&Cs apply</div><div class="halal_logo"></div>';