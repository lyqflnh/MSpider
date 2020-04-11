/**
 * 数据埋点228
 */
var pepPoints = pepPoints || {};
pepPoints.loader = (function(w) {
    var pl = {};

    /**
     * 参数初始化
     */
    pl.params = {
        log_version: '2',
        start_time: '',
        end_time: null,
        region: null,
        product_id: '',
        hardware: '',
        os: null,
        soft: '',
        active_user: '',
        active_organization: null,
        active_type: null,
        passive_object: null,
        passive_type: null,
        from_product: null,
        from_pos: null,
        company: '',
        action_title: '',
        action_type: 11,
        request: '',
        request_param: '',
        group_type: null,
        group: "",
        result_flag: null,
        result: null
    };

    /**
     * 参数拼接
     * @param {*} obj 
     * @returns {string}
     */
    var stringify = function(obj) {
        var str = "";
        for (var x in obj) {
            str += "~" + (obj[x] || "");
        }
        return str;
    };

     /**
     * 当DOM加载完成后主动触发上报(执行此方法)
     */
    pl.dataReport = function(__args) {

        /*
        if(!__args.product_id){
            alert('请输入product_id')
            return;
        }
        if(!__args.company){
            alert('请输入company')
            return;
        }
        */

        this.log_version = '2',
        this.params.start_time = GetDate(),
        this.params.end_time = null,
        this.params.region = null,
        this.params.product_id = __args.product_id,
        this.params.hardware = GetHardWare(),
        this.params.os = 'deviceId:'+GetActiveUser(),
        this.params.soft = GetWare(),
        this.params.active_user = GetActiveUser(),
        this.params.active_organization = null,
        this.params.active_type = null,
        this.params.passive_object = null,
        this.params.passive_type = null,
        this.params.from_product = null,
        this.params.from_pos = GetFromPos(),
        this.params.company = __args.company,
        this.params.action_title = 'sys_200001',
        this.params.action_type = 11,
        this.params.request = GetRequest(),
        this.params.request_param = GetRequestParam(),
        this.params.group_type = null,
        this.params.group = GetGroupSession(),
        this.params.result_flag = null,
        this.params.result = null

        createImage(stringify(this.params));
        
        // return this.stringify(this.params);
    };

    // 获取开始时间方法（以毫秒做单位）
    var GetDate = function() {
        // 获取当前时间以毫秒做单位
        var myDate = new Date(); //时间实例
        var H = myDate.getTime(); //获取从1970年1月1日至今的毫秒数
        return H;
    };

    // 获取屏幕尺寸
    var GetHardWare = function() {
        // var ow = window.screen.availWidth;
        // var oh = window.screen.availHeight;
		var ow = screen.width;
		var oh = screen.height;
        return 'dpi:' + ow + "*" + oh;
    };

    // 获取硬件/软件环境（获取浏览器）
    var GetWare = function() {
        // return "b-type:" + navigator.userAgent;
		return "b-type:" + window.jQBrowser.name + '_' + window.jQBrowser.version + '_' + window.jQBrowser.platform;
    };

    // 获取浏览器url主机部分
    var GetFromPos = function() {
        return window.location.host;
    };

    // 获取浏览器url地址
    var GetRequest = function() {
        // return window.location.href;
        var host = window.location.host;
        var pathname = window.location.pathname;
        return host + pathname;
    };
    
    // 获取url地址参数
    var GetRequestParam = function() {
        return window.location.search.replace("?","");
    };

    // 获取操作系统方法
    var GetOSInfo = function() {
        var _pf = navigator.platform;
        var appVer = navigator.userAgent;
        if (_pf == "Win32" || _pf == "Windows") {
            if (appVer.indexOf("WOW64") > -1) {
                _bit = "64位";
            } else {
                _bit = "32位";
            }
            if (appVer.indexOf("Windows NT 6.0") > -1 || appVer.indexOf("Windows Vista") > -1) {
                if (_bit == '64位' || appVer.indexOf("Windows Vista") > -1) {
                    return 'Windows_vista ' + _bit;
                } else {
                    return "Unknow1";
                }
            } else if (appVer.indexOf("Windows NT 6.1") > -1 || appVer.indexOf("Windows 7") > -1) {
                if (_bit == '32位' || appVer.indexOf("Windows 7") > -1) {
                    return 'Windows_7 ' + _bit;
                } else {
                    return "Unknow";
                }
            } else {
                try {
                    var _winName = Array('2000', 'XP', '2003');
                    var _ntNum = appVer.match(/Windows NT 5.\d/i).toString();
                    return 'Windows_' + _winName[_ntNum.replace(/Windows NT 5.(\d)/i, "$1")] + " " + _bit;
                } catch (e) {
                    return 'Windows';
                }
            }
        } else if (_pf == "Mac68K" || _pf == "MacPPC" || _pf == "Macintosh") {
            return "Mac";
        } else if (_pf == "X11") {
            return "Unix";
        } else if (String(_pf).indexOf("Linux") > -1) {
            return "Linux";
        } else {
            return "Unknow";
        }
    };

    //获取地址及参数的方法 active_user
    var GetActiveUser = function() {
        // 设置失效时间(生命周期为24h*30)
        if(!getCookie("active_user")) {
            setUserCookie("active_user", Getuuid(), 200);
        }        
        // return uuid;
        return getCookie("active_user");
    };

    // 设置uuid(格式：年秒-uuid)
    var Getuuid = function() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "";
        var uuid = secondCount() + '-' + s.join("");
        return uuid;
    };

    // 设置cookie
    var setUserCookie = function(key,value,expiresT){
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + expiresT);
        document.cookie = key + "=" + value + ";expires=" + oDate.toGMTString();
    };

    // 设置cookie,生命周期为一次会话，关闭浏览器失效
    var setGroupCookie = function(key,value){
        document.cookie = key + "=" + value;
    };

    // 获取cookie
    var getCookie = function(key){
        var arr1 = document.cookie.split("; ");
        for(var i=0; i<arr1.length; i++){
            var arr2 = arr1[i].split("=");
            if(arr2[0] == key){
                return decodeURI(arr2[1]);
            }
        }
    };

    // 获取当前时间到年初1月1日的秒数
    var secondCount = function() { 
        var time1 = new Date("2019/01/01 00:00:00");
        var time2 = new Date();

        var countDown = time2 - time1;
        var t = Math.floor(countDown / 1000);  //将毫秒换算成秒
        return t;
    };

    // group: 生成的cookie session标识 生命周期为一次会话
    var GetGroupSession = function(){
        /*
        var session = this.Getuuid();
        if(!sessionStorage.getItem("group")){
            sessionStorage.setItem("group", session);
        }
        // return session;
        return sessionStorage.getItem("group");
        */
        if(!getCookie("group")) {
            setGroupCookie("group", Getuuid());
        }
        return getCookie("group");
    };

    // 生成img并绑定其src
    var createImage = function(params) {
        var img = document.createElement("img");
        img.setAttribute("src","https://bd-st.mypep.cn/img/stat.gif?" + params.slice(1));
        img.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(img);
    };

    return pl;
})(window);


// 获取浏览器详情--jquery.browser.js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function ($) {
      return factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node-like environment
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
      delete browser.edge;
      var msedge = "msedge";

      matched.browser = msedge;
      browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));
