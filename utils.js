//浏览器相关信息
var Browser = {
    isIE: function () {
        return window.ActiveXObject ? true : false;
    },
    isChrome: function () {
        returnnavigator.userAgent.toLowerCase().indexOf("chrome") != -1
    },
    isSafari: function () {
        return navigator.userAgent.toLowerCase().indexOf("safari") != -1
    },
    isFirefox: function () {
        return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
    },
    isOpera: function () {
        return navigator.userAgent.toLowerCase().indexOf("opera") != -1
    }
}

//事件操作
var Event = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }

    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};

//Ajax操作
var Ajax = {
    createXHR: function () {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                for (var i = 0, len = versions.length; i < len; i++) {
                    try {
                        var xhr = new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        return xhr;
                    } catch (ex) {
                        alert("对不起出错了，请联系我们！");
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("没有有效的XHR对象！");
        }
    },
    parseParms: function (parms) {
        if (parms != null) {
            var array = new Array();
            for (var p in parms) {
                array.push(encodeURIComponent(p) + "=" + encodeURIComponent(parms[p]));
            }
            if (array.length > 0)
                return array.join("&");
        }
        return null;
    },
    get: function (url, cache, callback) {

        if (!cache) {
            url = url + (url.indexOf("?") == -1 ? "?" : "&")
            url = url + "ajaxTime=" + new Date();
        }

        var xhr = this.createXHR();
        if (callback) {
            xhr.onreadystatechange = function (event) {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        callback(xhr.responseText);
                    } else {
                        alert("请求出错,错误号为 [" + xhr.status + "]");
                    }
                }
            }
        }
        xhr.open("get", url, true);
        xhr.send(null);
    },
    post: function (url, parms, cache, callback) {

        if (!cache) {
            url = url + (url.indexOf("?") == -1 ? "?" : "&")
            url = url + "ajaxTime=" + new Date();
        }

        var xhr = this.createXHR();
        if (callback) {
            xhr.onreadystatechange = function (event) {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        callback(xhr.responseText);
                    } else {
                        alert("请求出错,错误号为 [" + xhr.status + "]");
                    }
                }
            }
        }
        xhr.open("post", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(this.parseParms(parms));
    }
}

//给firefox定义contains()方法
if (typeof (HTMLElement) != "undefined") {
    HTMLElement.prototype.contains = function (obj) {
        //通过循环对比来判断是不是obj的父元素
        while (obj != null && typeof (obj.tagName) != "undefind") {
            if (obj == this) return true;
            obj = obj.parentNode;
        }
        return false;
    };
}

//trim操作
function trim(val) {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

//html编码
function htmlEncode(val) {
    return val.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

//移除节点
function removeNode(node) {
    node.parentNode.removeChild(node)
}

//设置HTML元素属性
function setAttribute(o, a, v) {
    if (typeof o != 'object' || typeof a != 'string') return;
    a == 'class' ? o.className = v : o.setAttribute(a, v);
}

//获取HTML元素属性值
function getAttribute(o, a) {
    if (typeof o != 'object' || typeof a != 'string') return;
    return a == 'class' ? o.className : o.getAttribute(a);
}

//移除HTML元素属性
function removeAttribute(o, a) {
    if (typeof o != 'object' || typeof a != 'string') return;
    o.removeAttribute(a);
    if (a == 'class') o.removeAttribute('className');
}

//获取选中的单选框
function getSelectedRadio(radioList) {
    for (var i = 0, len = radioList.length; i < len; i++) {
        var radio = radioList[i];
        if (radio.checked) {
            return radio;
        }
    }
    return null;
}

//设置选中的单选框
function setSelectedRadio(radioList, value) {
    for (var i = 0, len = radioList.length; i < len; i++) {
        var radio = radioList[i];
        if (radio.value == value) {
            radio.checked = true;
            break;
        }
    }
}

//获取选中的选择项(单选)
function getSelectedOption(selectbox) {
    return selectbox.options[selectbox.selectedIndex];
}

//获取选中的选择项(多选)
function getSelectedOptions(selectbox) {
    var result = new Array();
    var option = null;
    for (var i = 0, len = selectbox.options.length; i < len; i++) {
        option = selectbox.options[i];
        if (option.selected) {
            result.push(option);
        }
    }
    return result;
}

//设置选中的选择项
function setSelectedOptions(selectbox, value) {
    for (var i = 0, len = selectbox.options.length; i < len; i++) {
        var option = selectbox.options[i];
        if (option.value == value) {
            option.selected = true;
        }
        else {
            option.selected = false;
        }
    }
}

//移除选择框中全部的选择项
function removeAllOptions(selectbox) {
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.options.remove(i);
    }
}

//读取cookie
function getCookie(name) {
    if (document.cookie.length > 0) {
        var cookieItemList = document.cookie.split(";");
        for (var i = 0; i < cookieItemList.length; i++) {
            var keyValuePair = cookieItemList[i].split("=");
            if (keyValuePair[0] = name) {
                return decodeURIComponent(keyValuePair[1]);
            }
        }
    }
    return ""
}

//设置cookie
function setCookie(name, value, expires) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (expires != undefined && expires != null) {
        cookie += ";expires=" + expires;
    }
    document.cookie = cookie;
}

//删除cookie
function delCookie(name) {
    var expires = new Date();
    expires.setTime(expires.getTime() - 1);
    document.cookie = name + "=;expires=" + expires.toGMTString();
}

//判断是否是数字
function isNumber(val) {
    var regex = /^[\d|\.]+$/;
    return regex.test(val);
}

//判断是否为整数
function isInt(val) {
    var regex = /^\d+$/;
    return regex.test(val);
}

//判断是否为邮箱
function isEmail(val) {
    var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regex.test(email);
}

//判断是否为手机号
function isMobile(val) {
    var regex = /^[1][0-9][0-9]{9}$/;
    return regex.test(tel);
}

var util = {

    //用于请求aspx的页面方法
    ajaxForWebMethod: function (url, param, successHandler, errorHandler) {
        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            url: url,
            data: JSON.stringify(param),
            success: successHandler,
            error: errorHandler
        });
    },
    //json日期格式转换为正常格式
    json2Date: function (jsonDate) {
        try {
            if (jsonDate == "/Date(-62135596800000)/") {
                return "";
            }
            var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
            return date;

        } catch (ex) {
            return "";
        }
    }
}

/**
* 日期处理工具类
*/
var dateUtil = function () {
    this.NullValue = new Date("1970/01/01 00:00");
    //是否是空值
    this.isNull = function (date) {
        return !date || date.format("yyyy-MM-dd hh:mm") == dateUtil.NullValue.format("yyyy-MM-dd hh:mm");
    }
    /**
    * 判断闰年
    * @param date Date日期对象
    * @return boolean true 或false
    */
    this.isLeapYear = function (date) {
        return (0 == date.getYear() % 4 && ((date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
    }

    /**
    * 日期对象转换为指定格式的字符串
    * @param f 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
    * @param date Date日期对象, 如果缺省，则为当前时间
    *
    * YYYY/yyyy/YY/yy 表示年份  
    * MM/M 月份  
    * W/w 星期  
    * dd/DD/d/D 日期  
    * hh/HH/h/H 时间  
    * mm/m 分钟  
    * ss/SS/s/S 秒  
    * @return string 指定格式的时间字符串
    */
    this.dateToStr = function (formatStr, date) {
        formatStr = arguments[0] || "yyyy-MM-dd HH:mm:ss";
        date = arguments[1] || new Date();
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        str = str.replace(/yyyy|YYYY/, date.getFullYear());
        str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
        str = str.replace(/MM/, date.getMonth() > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1));
        str = str.replace(/M/g, date.getMonth());
        str = str.replace(/w|W/g, Week[date.getDay()]);

        str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
        str = str.replace(/d|D/g, date.getDate());

        str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
        str = str.replace(/h|H/g, date.getHours());
        str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
        str = str.replace(/m/g, date.getMinutes());

        str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
        str = str.replace(/s|S/g, date.getSeconds());

        return str;
    }


    /**
    * 日期计算  
    * @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒  
    * @param num int
    * @param date Date 日期对象
    * @return Date 返回日期对象
    */
    this.dateAdd = function (strInterval, num, date) {
        date = arguments[2] || new Date();
        switch (strInterval) {
            case 's': return new Date(date.getTime() + (1000 * num));
            case 'n': return new Date(date.getTime() + (60000 * num));
            case 'h': return new Date(date.getTime() + (3600000 * num));
            case 'd': return new Date(date.getTime() + (86400000 * num));
            case 'w': return new Date(date.getTime() + ((86400000 * 7) * num));
            case 'm': return new Date(date.getFullYear(), (date.getMonth()) + num, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
            case 'y': return new Date((date.getFullYear() + num), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }

    /**
    * 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串
    * @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒  
    * @param dtStart Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒
    * @param dtEnd Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
    */
    this.dateDiff = function (strInterval, dtStart, dtEnd) {
        switch (strInterval) {
            case 's': return parseInt((dtEnd - dtStart) / 1000);
            case 'n': return parseInt((dtEnd - dtStart) / 60000);
            case 'h': return parseInt((dtEnd - dtStart) / 3600000);
            case 'd': return parseInt((dtEnd - dtStart) / 86400000);
            case 'w': return parseInt((dtEnd - dtStart) / (86400000 * 7));
            case 'm': return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
            case 'y': return dtEnd.getFullYear() - dtStart.getFullYear();
        }
    }

    /**
    * 字符串转换为日期对象
    * @param date Date 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制
    */
    this.strToDate = function (dateStr) {
        try {
            var data = dateStr;
            var reCat = /(\d{1,4})/gm;
            var t = data.match(reCat);
            t[1] = t[1] - 1;
            eval('var d = new Date(' + t.join(',') + ');');
            return d;
        } catch (e) {

        }
    }

    /**
    * 把指定格式的字符串转换为日期对象yyyy-MM-dd HH:mm:ss
    * 
    */
    this.strFormatToDate = function (formatStr, dateStr) {
        var year = 0;
        var start = -1;
        var len = dateStr.length;
        if ((start = formatStr.indexOf('yyyy')) > -1 && start < len) {
            year = dateStr.substr(start, 4);
        }
        var month = 0;
        if ((start = formatStr.indexOf('MM')) > -1 && start < len) {
            month = parseInt(dateStr.substr(start, 2)) - 1;
        }
        var day = 0;
        if ((start = formatStr.indexOf('dd')) > -1 && start < len) {
            day = parseInt(dateStr.substr(start, 2));
        }
        var hour = 0;
        if (((start = formatStr.indexOf('HH')) > -1 || (start = formatStr.indexOf('hh')) > 1) && start < len) {
            hour = parseInt(dateStr.substr(start, 2));
        }
        var minute = 0;
        if ((start = formatStr.indexOf('mm')) > -1 && start < len) {
            minute = dateStr.substr(start, 2);
        }
        var second = 0;
        if ((start = formatStr.indexOf('ss')) > -1 && start < len) {
            second = dateStr.substr(start, 2);
        }
        return new Date(year, month, day, hour, minute, second);
    }


    /**
    * 日期对象转换为毫秒数
    */
    this.dateToLong = function (date) {
        return date.getTime();
    }

    /**
    * 毫秒转换为日期对象
    * @param dateVal number 日期的毫秒数 
    */
    this.longToDate = function (dateVal) {
        return new Date(dateVal);
    }

    /**
    * 判断字符串是否为日期格式
    * @param str string 字符串
    * @param formatStr string 日期格式， 如下 yyyy-MM-dd
    */
    this.isDate = function (str, formatStr) {
        if (formatStr == null) {
            formatStr = "yyyyMMdd";
        }
        var yIndex = formatStr.indexOf("yyyy");
        if (yIndex == -1) {
            return false;
        }
        var year = str.substring(yIndex, yIndex + 4);
        var mIndex = formatStr.indexOf("MM");
        if (mIndex == -1) {
            return false;
        }
        var month = str.substring(mIndex, mIndex + 2);
        var dIndex = formatStr.indexOf("dd");
        if (dIndex == -1) {
            return false;
        }
        var day = str.substring(dIndex, dIndex + 2);
        if (!isNumber(year) || year > "2100" || year < "1900") {
            return false;
        }
        if (!isNumber(month) || month > "12" || month < "01") {
            return false;
        }
        if (day > getMaxDay(year, month) || day < "01") {
            return false;
        }
        return true;
    }

    this.getMaxDay = function (year, month) {
        if (month == 4 || month == 6 || month == 9 || month == 11)
            return "30";
        if (month == 2)
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
                return "29";
            else
                return "28";
        return "31";
    }
    /**
    *    变量是否为数字
    */
    this.isNumber = function (str) {
        var regExp = /^\d+$/g;
        return regExp.test(str);
    }

    /**
    * 把日期分割成数组 [年、月、日、时、分、秒]
    */
    this.toArray = function (myDate) {
        myDate = arguments[0] || new Date();
        var myArray = Array();
        myArray[0] = myDate.getFullYear();
        myArray[1] = myDate.getMonth();
        myArray[2] = myDate.getDate();
        myArray[3] = myDate.getHours();
        myArray[4] = myDate.getMinutes();
        myArray[5] = myDate.getSeconds();
        return myArray;
    }

    /**
    * 取得日期数据信息  
    * 参数 interval 表示数据类型  
    * y 年 M月 d日 w星期 ww周 h时 n分 s秒  
    */
    this.datePart = function (interval, myDate) {
        myDate = arguments[1] || new Date();
        var partStr = '';
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        switch (interval) {
            case 'y': partStr = myDate.getFullYear(); break;
            case 'M': partStr = myDate.getMonth() + 1; break;
            case 'd': partStr = myDate.getDate(); break;
            case 'w': partStr = Week[myDate.getDay()]; break;
            case 'ww': partStr = myDate.WeekNumOfYear(); break;
            case 'h': partStr = myDate.getHours(); break;
            case 'm': partStr = myDate.getMinutes(); break;
            case 's': partStr = myDate.getSeconds(); break;
        }
        return partStr;
    }

    /**
    * 取得当前日期所在月的最大天数  
    */
    this.maxDayOfDate = function (date) {
        date = arguments[0] || new Date();
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        var time = date.getTime() - 24 * 60 * 60 * 1000;
        var newDate = new Date(time);
        return newDate.getDate();
    }

    return this;
}();

//内容大于需要可视长度时，将被截取，并加上...
String.prototype.subTitle = function (viewLength) {
    if (this.length > viewLength) {
        return this.substr(0, viewLength) + "...";
    }
    return this;
};
//日期格式化
Date.prototype.format = function (format) {	//eg: format = "yyyy-MM-dd hh:mm:ss"; 
    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

/*
*  方法:Array.remove(dx)
*  功能:根据元素位置值删除数组元素.
*  参数:元素索引
*  返回:在原数组上修改数组
*/
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
};

var HtmlUtil = {
    /*1.用浏览器内部转换器实现html转码*/
    htmlEncode: function (html) {
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
        (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
        //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode: function (text) {
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },
    /*3.用正则表达式实现html转码*/
    htmlEncodeByRegExp: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        return s;
    },
    /*4.用正则表达式实现html解码*/
    htmlDecodeByRegExp: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        return s;
    }
};