;(function (doc, win) {
    // 我们的规则是 窗口100%宽度的rem = 10rem
    // 我们在写css的时候，也要按照这个标准来写
    
    /*
        css 公式，假如设计稿的宽度是750px，那么w变量的元素，实际的rem值是
    这是一个简单换算公式，实际项目中可以使用px2rem-loader配置
        function c (w) {
        const width100 = 750
        const remClient = 10; 
        return Number((10*(w/750)).toFixed(3))
        }
    */
    var pxOneRem = 0;
    var remClient = 100;
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        clientWidth = clientWidth > 900 ? 900 : clientWidth;
        pxOneRem = clientWidth / remClient;
        docEl.style.fontSize = pxOneRem + 'px';
        // 纠错函数
        function adapt(){  
          var d = window.document.createElement('div');
          d.style.width = '1rem';
          d.style.display = "none";
          var head = window.document.getElementsByTagName('head')[0];
          head.appendChild(d);
          var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
          return defaultFontSize
        }
        console.log(pxOneRem , adapt())
        pxOneRem = pxOneRem * pxOneRem / adapt();
        docEl.style.fontSize = pxOneRem + 'px'
      };
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);