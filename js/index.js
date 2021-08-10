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

