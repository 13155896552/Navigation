// JavaScript Document 
// 默认搜索引擎的内容，如果界面修改了需要同步修改
var thisSearch = 'https://www.baidu.com/s?wd=';
// 搜索引擎列表
  var searchs = {
    data: [{
      name: '百度',
      url: 'https://www.baidu.com/s?wd='
    }, {
      name: '知乎',
      url: 'https://www.zhihu.com/search?type=content&q='
    }, {
      name: 'Google',
      url: 'https://www.google.com/search?q='
    },{
      name: 'CSDN',
      url: 'https://so.csdn.net/so/search?q='
    },{
      name: 'GitHub',
      url: 'https://github.com/search?q='
    }]
  }

function search(){
    // 回车键的处理
	var event = window.event || arguments.callee.caller.arguments[0];
    if(event.keyCode==13){
		var a=document.getElementById("txt").value;
        window.open(thisSearch + a);
    }
}
		
function bsearch (id){
	//改变搜索引擎
	thisSearch=searchs.data[id].url;
	for(var i=0;i<5;i++){
		document.getElementById(i).className="";//将其它的类名置空，即返回未选中状态	
	}
	return 'active';
			
}
//$(function(){
  
//  for(var i = 0; i < search.data.length; i++){
//    var addList = '<li>' + search.data[i].name + '</li>'
//    $('.search-engine-list').append(addList);
//  }
//  $('.search-engine-name, .search-engine').hover(function() {
//    $('.search-engine').css('display', 'block')
//  }, function() {
//    $('.search-engine').css('display', 'none')
//  });
//  $('.search-engine-list li').click(function() {
//    var _index = $(this).index();
//    var searchNameBtn = document.getElementById("search-engine-name");
//    searchNameBtn.innerHTML = search.data[_index].name;
//    thisSearch = search.data[_index].url;
//    $('.search-engine').css('display', 'none')
//  })
//})
//$("#search-btn").click(function(){
//  var textValue = $('#txt').val();
//  if(textValue != ''){
//    window.open(thisSearch + textValue)
//  }
//})
//;
		////判断用户使用的设备
//var deviceVal  = browserRedirect();
//function browserRedirect() {
//  var sUserAgent = navigator.userAgent.toLowerCase();
//  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//  var bIsAndroid = sUserAgent.match(/android/i) == "android";
//  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//    return 'phone';
//  } else {
//    return 'pc';
//  }
//}
//  $('.nav-btn').on('click', function () {
//    $('.nav').toggleClass('showNav');
//    $(this).toggleClass('animated2');
//  });
