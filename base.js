/*****************************************************************
                  表单校验工具类  (linjq)       
*****************************************************************/
 
/**
 * 判断整数num是否等于0
 * 
 * @param num
 * @return
 * @author jiqinlin
 */
function isIntEqZero(num){ 
     return num==0;
}

/**
 * 判断整数num是否大于0
 * 
 * @param num
 * @return
 * @author jiqinlin
 */
function isIntGtZero(num){ 
    return num>0;
}

/**
 * 判断整数num是否大于或等于0
 * 
 * @param num
 * @return
 * @author jiqinlin
 */
function isIntGteZero(num){ 
    return num>=0;
}

/**
 * 判断浮点数num是否等于0
 * 
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
function isFloatEqZero(num){ 
    return num==0;
}

/**
 * 判断浮点数num是否大于0
 * 
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
function isFloatGtZero(num){ 
    return num>0;
}

/**
 * 判断浮点数num是否大于或等于0
 * 
 * @param num 浮点数
 * @return
 * @author jiqinlin
 */
function isFloatGteZero(num){ 
    return num>=0;
}

/**
 * 匹配Email地址
 */
function isEmail(str){
    if(str==null||str=="") return false;
    var result=str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if(result==null)return false;
    return true;
}

/**
 * 判断数值类型，包括整数和浮点数
 */
function isNumber(str){
    if(isDouble(str) || isInteger(str)) return true;
    return false;
}     

/**
 * 只能输入数字[0-9]
 */
function isDigits(str){
    if(str==null||str=="") return false;
    var result=str.match(/^\d+$/);
    if(result==null)return false;
    return true;
}     

/**
 * 匹配money
 */
function isMoney(str){
    if(str==null||str=="") return false;
    var result=str.match(/^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1,2}))$/);
    if(result==null)return false;
    return true;
} 
    
/**
 * 匹配phone
 */
function isPhone(str){
    if(str==null||str=="") return false;
    var result=str.match(/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
    if(result==null)return false;
    return true;
}     

/**
 * 匹配mobile
 */
function isMobile(str){
    if(str==null||str=="") return false;
    var result=str.match(/^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15\d{9})|(18\d{9}))$/);
    if(result==null)return false;
    return true;
}     

/**
 * 联系电话(手机/电话皆可)验证   
 */
function isTel(String text){
    if(isMobile(text)||isPhone(text)) return true;
    return false;
}

/**
 * 匹配qq
 */
function isQq(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[1-9]\d{4,12}$/);
    if(result==null)return false;
    return true;
}     

/**
 * 匹配english
 */
function isEnglish(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[A-Za-z]+$/);
    if(result==null)return false;
    return true;
}     

/**
 * 匹配integer
 */
function isInteger(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[-\+]?\d+$/);
    if(result==null)return false;
    return true;
}     

/**
 * 匹配double或float
 */
function isDouble(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[-\+]?\d+(\.\d+)?$/);
    if(result==null)return false;
    return true;
}     


/**
 * 匹配邮政编码
 */
function isZipCode(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[0-9]{6}$/);
    if(result==null)return false;
    return true;
} 

/**
 * 匹配URL
 */
function isUrl(str){
    if(str==null||str=="") return false;
    var result=str.match(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/);
    if(result==null)return false;
    return true;
} 

/**
 * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
 */
function isPwd(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[a-zA-Z]\\w{6,12}$/);
    if(result==null)return false;
    return true;
} 

/**
 * 判断是否为合法字符(a-zA-Z0-9-_)
 */
function isRightfulString(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[A-Za-z0-9_-]+$/);
    if(result==null)return false;
    return true;
} 

/**
 * 匹配english
 */
function isEnglish(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[A-Za-z]+$/);
    if(result==null)return false;
    return true;
} 

/**
 * 匹配身份证号码
 */
function isIdCardNo(num){ 
　   //　 if (isNaN(num)) {alert("输入的不是数字！"); return false;} 
　　 var len = num.length, re; 
　　 if (len == 15) 
　　 re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
　　 else if (len == 18) 
　　 re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
　　 else {alert("输入的数字位数不对。"); return false;} 
　　 var a = num.match(re); 
　　 if (a != null) 
　　 { 
　　 if (len==15) 
　　 { 
　　 var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 else 
　　 { 
　　 var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 if (!B) {alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); return false;} 
　　 } 
　　 if(!re.test(num)){alert("身份证最后一位只能是数字和字母。");return false;}
　　  
　　 return true; 
} 

/**
 * 匹配汉字
 */
function isChinese(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[\u4e00-\u9fa5]+$/);
    if(result==null)return false;
    return true;
} 

/**
 * 匹配中文(包括汉字和字符)
 */
function isChineseChar(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[\u0391-\uFFE5]+$/);
    if(result==null)return false;
    return true;
}     

/**
 * 字符验证，只能包含中文、英文、数字、下划线等字符。
 */
function stringCheck(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
    if(result==null)return false;
    return true;
}     

/**
 * 过滤中英文特殊字符，除英文"-_"字符外
 */
function stringFilter(str){
    var pattern = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
} 

/**
 * 判断是否包含中英文特殊字符，除英文"-_"字符外
 */
function isContainsSpecialChar(str){
    if(str==null||str=="") return false;
    var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
    return reg.test(str);    
}





/**
 *  表格通用工具,目前只有合并表格功能，以后慢慢完善
 *  @Authors: jackyWHJ
 *  @date 2013-10-18
 *
 */
var TableUtils = {
    
    /**
     * 函数说明：合并指定表格（表格id为wTableId）指定列（列数为wTableColumn）的相同文本的相邻单元格  
     * 参数说明：wTableId 为需要进行合并单元格的表格的id。如在HTMl中指定表格 id="data" ，此参数应为 #data   
     * 参数说明：wTableColumn 为需要合并单元格的所在列。为数字，从最左边第一列为1开始算起。  
     */
    tableColMerger: function(wTableId, wTableColumn) {
 
        var wTableFirstTd = "";
 
        var wTableCurrentTd = "";
 
        var wTableSpanNum = 0;
        var wTableObj = $(wTableId + " tr td:nth-child(" + wTableColumn + ")");
        wTableObj.each(function(i) {
            if (i == 0) {
                wTableFirstTd = $(this);
                wTableSpanNum = 1;
                
            } else {
                wTableCurrentTd = $(this);
                if (wTableFirstTd.text() == wTableCurrentTd.text()) {
                    wTableSpanNum++;
                    wTableCurrentTd.hide(); //remove();  
                } else {
                    wTableFirstTd = $(this);
                    wTableSpanNum = 1;
                }
            }
            wTableFirstTd.attr("rowSpan", wTableSpanNum);
        });
    },
 
    /**
     * 函数说明：合并指定表格（表格id为wTableId）指定行（行数为wTableRownum）的相同文本的相邻单元格  
     * 参数说明：wTableId 为需要进行合并单元格的表格id。如在HTMl中指定表格 id="data" ，此参数应为 #data   
     * 参数说明：wTableRownum 为需要合并单元格的所在行。其参数形式请参考jQuery中nth-child的参数。  
     *          如果为数字，则从最左边第一行为1开始算起。  
     *          "even" 表示偶数行  
     *          "odd" 表示奇数行  
     *          "3n+1" 表示的行数为1、4、7、10.  
     * 参数说明：wTableMaxcolnum 为指定行中单元格对应的最大列数，列数大于这个数值的单元格将不进行比较合并。  
     *           此参数可以为空，为空则指定行的所有单元格要进行比较合并。  
     */
    tableRowMerger: function(wTableId, wTableRownum, wTableMaxcolnum) {
        if (wTableMaxcolnum == void 0) {
            wTableMaxcolnum = 0;
        }
        var wTableFirstTd = "";
        var wTableCurrentTd = "";
        var wTableSpanNum = 0;
        $(wTableId + " tr:nth-child(" + wTableRownum + ")").each(function(i) {
            var wTableObj = $(this).children();
            wTableObj.each(function(i) {
                if (i == 0) {
                    wTableFirstTd = $(this);
                    wTableSpanNum = 1;
                } else if ((wTableMaxcolnum > 0) && (i > wTableMaxcolnum)) {
                    return "";
                } else {
                    wTableCurrentTd = $(this);
                    if (wTableFirstTd.text() == wTableCurrentTd.text()) {
                        wTableSpanNum++;
                        wTableCurrentTd.hide(); //remove();  
                    } else {
                        wTableFirstTd = $(this);
                        wTableSpanNum = 1;
                    }
                }
                wTableFirstTd.attr("colSpan", wTableSpanNum);
            });
        });
    },
    
    /**
     * 函数说明：合并指定表格（表格id为wTableId）指定按照列（列数为fromTableColumn）的合并方式合并目标列（列数为toTableColumn）的单元格  
     * 参数说明：wTableId 为需要进行合并单元格的表格的id。如在HTMl中指定表格 id="data" ，此参数应为 #data   
     * 参数说明：fromTableColumn 已经合并的单元格所在列。为数字，从最左边第一列为1开始算起。  
     * 参数说明：toTableColumn 目标列，为需要合并单元格的所在列。为数字，从最左边第一列为1开始算起。  
     */
    tableColMergerSpecial: function (wTableId, fromTableColumn,toTableColumn) {
 
        var wTableCurrentTd = "";
        var blockRowArr = {};     //用来存放不需要隐藏的行索引
        var fromTableObj = $(wTableId + " tr td:nth-child(" + fromTableColumn + ")");
        fromTableObj.each(function (i) {
            wTableCurrentTd = $(this);
            if (wTableCurrentTd.attr("rowSpan")) {
                blockRowArr[i] = wTableCurrentTd.attr("rowSpan");
            }
        });
        if (1 > blockRowArr.length) {
            //样本列不存在合并;
            return;
        }
        var toTableObj = $(wTableId + " tr td:nth-child(" + toTableColumn + ")");
        var isBlock = false;      //是否显示
        toTableObj.each(function (i) {
            wTableCurrentTd = $(this);
            isBlock = false;
            for (var j in blockRowArr) {
                if (i == j) {
                    isBlock = true;
                    break;
                }
            }
            if (isBlock) {
                wTableCurrentTd.attr("rowSpan", blockRowArr[i]);
            } else {
                wTableCurrentTd.hide(); //remove();  
            }
        });
    },
    
    /**
     * 函数说明：隐藏指定表格（表格id为wTableId）指定列（列数为wTableColumn）  
     * 参数说明：wTableId 为需要进行隐藏列的表格的id。如在HTMl中指定表格 id="data" ，此参数应为 #data   
     * 参数说明：wTableColumn 为需要隐藏的所在列。为数字，从最左边第一列为1开始算起。  
     */
    tableColHide: function (wTableId, wTableColumn) {
 
        var wTableCurrentTd = "";
        //隐藏列头
        $(wTableId + " tr th:nth-child(" + wTableColumn + ")").hide();
        //遍历表格隐藏单元格
        var wTableObj = $(wTableId + " tr td:nth-child(" + wTableColumn + ")");
        wTableObj.each(function (i) {
            wTableCurrentTd = $(this);
            wTableCurrentTd.hide(); //remove();  
        });
    },
};