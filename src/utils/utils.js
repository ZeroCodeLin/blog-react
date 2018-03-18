export function dateFormat(fmt, date){
    if(!date) return ;
    let time = new Date(date)
    let o = {   
        "M+" : time.getMonth()+1,                 //月份   
        "d+" : time.getDate(),                    //日   
        "h+" : time.getHours(),                   //小时   
        "m+" : time.getMinutes(),                 //分   
        "s+" : time.getSeconds(),                 //秒   
        "q+" : Math.floor((time.getMonth()+3)/3), //季度   
        "S"  : time.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;   
  }

//获取参数
export function getParam(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//加载畅言
export function loadChangyan() {
  var createNs = function() {
    if (window.changyan !== undefined) {
      return;
    } else {
      window.changyan = {};
      window.changyan.api = {};
      window.changyan.api.config = function(conf) {
        window.changyan.api.tmpIsvPageConfig = conf;
      };
      window.changyan.api.ready = function(fn) {
        window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
        window.changyan.api.tmpHandles.push(fn);
      };
      window.changyan.ready = function(fn) {
        if (window.changyan.rendered) {
          fn && fn();
        } else {
          window.changyan.tmpHandles = window.changyan.tmpHandles || [];
          window.changyan.tmpHandles.push(fn);
        }
      }
    }
  };

  var createMobileNs = function() {
    
    window.cyan = {};
    window.cyan.api = {};
    window.cyan.api.ready = function(fn) {
      window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
      window.cyan.api.tmpHandles.push(fn);
    };
  };
  var loadVersionJs = function() {
    var loadJs = function(src, fun) {
      var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;

      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('charset', 'UTF-8');
      script.setAttribute('src', src);

      if (typeof fun === 'function') {
        if (window.attachEvent) {
          script.onreadystatechange = function() {
            var r = script.readyState;
            if (r === 'loaded' || r === 'complete') {
              script.onreadystatechange = null;
              fun();
            }
          };
        } else {
          script.onload = fun;
        }
      }

      head.appendChild(script);
    };

    var ver = + new Date() + window.Math.random().toFixed(16);
    var url = 'https://changyan.itc.cn/upload/version-v3.js?' + ver;
    loadJs(url);
  };
  createNs();
  createMobileNs();
  loadVersionJs();

  window.changyan.api.config({
    appid: 'cytwhKbLn',
    conf: 'prod_f38c66b1afad36f9fbd3b915d57f277d'
  });
}