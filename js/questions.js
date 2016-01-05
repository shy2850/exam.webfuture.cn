var choice = [
	{
		question : "以下文档声明正确的是：",
		radios : [ "<!doctype html>","<!DOCTYPE HTML 4.01>","<!DOCTYPE XHTML 1.0>","<!DOCTYPE XHTML 1.0 Frameset>" ],
		id : "M001"
	},
	{
		question : "以下均为自封闭标签的是：",
		radios : [ "html,script","link,style","meta,input","img,textarea" ],
		id : "M002"
	},
	{
		question : "以下标签包含顺序正确的有：",
		radios : [ "a>p>span","h2>p>a","ul>li>div","span>a>input" ],
		id : "M003",
		muti: true
	},
	{
		question : "定义提供有关页面的元信息的标签是：",
		radios : [ "meta","DOCTYPE","base","var" ],
		id : "M004"
	},
	{
		question : "使表单支持文件上传功能，至少需要设置form标签的哪些属性",
		radios : [ "action","name","method","enctype" ],
		id : "M005",
		muti: true
	},
	{
		question : "以下有关样式表定义说法有误的是：",
		radios : [ "样式表都需要定义选择器","一组样式表可以定义多组属性","每组属性之间需要用;分隔","属性名不能使用字母和-以外的字符" ],
		id : "M006",
		muti: true
	},
	{
		question : "以下选择器定义的样式表可作用于相同标签时，权重最高的是：",
		radios : [ ".main p.inner","div.main > p","body .main p",".header + .main p" ],
		id : "M007",
		muti: true
	},
	{
		question : "IE6中，以下CSS选择器被支持的有：",
		radios : [ "span + p","ul > li",":after",".nav.current" ],
		id : "M008",
		muti: true
	},
	{
		question : "下列均属于行内标签的一组是：",
		radios : [ "span,p","ul,li","a,strong","div,dl" ],
		id : "M009"
	},
	{
		question : "下列哪些position定义时, left属性可以生效：",
		radios : [ "static","relative","fixed","absolute" ],
		id : "M010",
		muti: true
	},
	{
		question : "以下javascript代码片段存在语法错误的是：",
		radios : [ "var fn = function(){};","Math.PI * 3","var c = 2.toString()","'7'-4" ],
		id : "M011",
		muti: true
	},
	{
		question : "选择正确的通用JSON格式(非javascript对象)：",
		radios : [ '{name:"lili"}','["ok",{"id":2}]','{"amount":1.44e+10,"owner":null}','{"male":true,"friends":["a","b"]}' ],
		id : "M012",
		muti: true
	},
	{
		question : "代码 `var a = {a:2}, b; b = a; b.a = ++a.a - 2; 则: a.a的值为： ` ",
		radios : [ '0', '1', '2', '3' ],
		id : "M013"
	},
	{
		question : "以下不属于javascript中Array对象方法或属性的有：",
		radios : [ "splice,slice","sort,shuffle","concat,join","shift,unshift" ],
		id : "M014",
		muti: true
	},
	{
		question : "以下匹配javascript中变量名的正则表达式是：",
		radios : [ /^[a-zA-Z0-9]+$/,/^[\w\d]+$/,/^\w+$/,/^[a-zA-Z_\$]+[\w\$]*$/ ],
		id : "M015"
	},
	{
		question : "表示请求被客户端缓存的HTTP-code为：",
		radios : [ 200,404,304,500 ],
		id : "M016"
	},
	{
		question : "下列哪项属于GET请求和POST请求的不同点：",
		radios : [ '支持form标签表单提交','支持XMLHttpRequest','支持文件上传','支持下载文件' ],
		id : "M017",
		muti: true
	},
	{
		question : "对于服务器返回js资源文件正确的MIME为：",
		radios : [ 'text/script','application/javascript','text/javascript','script/text' ],
		id : "M018"
	},
	{
		question : "UserAgent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36  表示以下哪款浏览器",
		radios : [ 'Microsoft Windows IE','Apple Safari','Mozilla Firefox','Google Chrome' ],
		id : "M019"
	},
	{
		question : "下列哪项信息一般不是浏览器发送给服务器的：",
		radios : [ 'cookie','user-agent','Accept-Encoding','Content-Type' ],
		id : "M020"
	},
	{
		question : "同源策略, 是最常用的WEB安全策略, 这里的同源包括：",
		radios : [ '协议相同','域名相同','端口相同','请求路径相同' ],
		id : "M021",
		muti: true
	},
	{
		question : "下列哪些场景下不需要遵循同源策略",
		radios : [ 'XMLHttpRequest','iframe间js操作','WebSocket通信','多媒体(Audio/Video)文件播放' ],
		id : "M022",
		muti: true
	},
	{
		question : "下列哪种常用的WEB服务器默认的端口号不含80：",
		radios : [ 'Apache','IIS','Tomcat','Nginx' ],
		id : "M023",
		muti: true
	},
	{
		question : "以下哪些方式有利于从HTTP请求上对资源加载进行优化",
		radios : [ '合并过多的零碎文件','拆分过大的资源文件','服务器开启gzip压缩','对资源文件进行压缩' ],
		id : "M024",
		muti: true
	},
	{
		question : "以下哪些方式能有效的避免服务器的资源缓存",
		radios : [ '采用cdn优化资源','使用MD5重命名资源和引入','更新资源时添加必要的时间戳标记','模块化资源, 实现按需异步加载' ],
		id : "M025",
		muti: true
	}
];
