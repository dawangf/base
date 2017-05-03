// -------------------------------------------------------------
// 重写alert，保证弹窗错误的友好性
var j_oldAlert = window.alert;
var j_fieldList;
window.alert = function (msg) {
    var newMsg = "";
    msg = msg.toLowerCase(); //转为小写
    // 唯一性验证
    if (msg.indexOf("ora-00001") > -1) {
        for (var i = 0; i < j_fieldList.length; i++) {
            var r = j_fieldList[i];
            if (r.type == 'uk' && msg.indexOf(r.name.toLowerCase()) > -1) {
                if (r.msg != undefined && r.msg.length > 0) {
                    newMsg += r.msg;
                }
                break;
            }
        }
        newMsg = "违反唯一约束！\r\n" + newMsg;
    } else {
        newMsg = msg;
    }
 
//  $.alert(msg, '提示');icon: 'fa fa-warning',
	
//	$.alert({
//	    icon: 'fa fa-warning',
//	    title: 'font-awesome',
//	    content:msg
//	});
	$.confirm({
		title: '',
	    content:'<div class="text-center pt40 pb20"><span class="glyphicon glyphicon-ok-sign" style="color: #449d44; font-size:80px;"></span></div><div class="text-center pb30">'+msg+'</div>',
	   
	});
	
//	$.confirm({
//	    confirmButtonClass: 'btn-info',
//	    cancelButtonClass: 'btn-danger'
//	})
}
 
/*
var json = [{
    type: 'uk',
    name: 'UK$MA_GROUPDATATABLE$1',
    msg: ''
}];
type 约束的类型，uk唯一性约束、；name 为数据库中约束的名称；msg为自定义的提示语
initAlert(json);
*/
// 初始化alert弹窗所需要的参数
function initAlert(json) {
    if (typeof (json) == "object" && json.length > 0) { // 验证数据是否为json格式
        j_fieldList = json;
    } else {
        j_fieldList = eval("(" + json + ")");
    }
}