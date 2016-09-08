var choice = [
	{
		question : "以下文档声明正确的是：",
		radios : [ "<!doctype html>","<!DOCTYPE HTML 4.01>","<!DOCTYPE XHTML 1.0>","<!DOCTYPE XHTML 1.0 Frameset>" ],
		desc: "HTML5的doctype极简，html标签的大小写不敏感",
		id : "M001"
	},
	{
		question : "以下均为自封闭标签的是：",
		radios : [ "html,script","link,style","meta,input","img,textarea" ],
		desc: "自封闭标签就是内部没有内容的标签",
		id : "M002"
	},
	{
		question : "以下标签包含顺序正确的有：",
		radios : [ "a>p>span","h2>p>a","ul>li>div","span>a>input" ],
		desc: "基本原则： block标签 > inline标签, 组合标签(ul>li, table>tr>td, dl>dt+dd) 父级标签的child不能是其他标签, 标题标签和段落标签互斥",
		id : "M003",
		muti: true
	},
	{
		question : "定义提供有关页面的元信息的标签是：",
		radios : [ "meta","DOCTYPE","base","var" ],
		desc: "base定义页面中所有对外链接基础路径，var语义化标签定义代码里面的变量声明，meta定义元信息",
		id : "M004"
	},
	{
		question : "使表单支持文件上传功能，至少需要设置form标签的哪些属性",
		radios : [ "action","name","method","enctype" ],
		desc: "action默认就是当前路径，name是给input设置的属性，method必须是POST，enctype需要设置为multipart/form-data才能上传文件",
		id : "M005",
		muti: true
	},
	{
		question : "以下有关样式表定义说法有误的是：",
		radios : [ "样式表都需要定义选择器","一组样式表可以定义多组属性","每组属性之间需要用;分隔","属性名不能使用字母和-以外的字符" ],
		desc: "IE8以前版本浏览器识别特殊的属性名",
		id : "M006",
		muti: true
	},
	{
		question : "以下选择器定义的样式表可作用于相同标签时，权重最高的是：",
		radios : [ ".main p.inner","div.main > p","body .main p",".header + .main p" ],
		desc: "选择器权重 id > class == [attribute] > tagName， 如果是混合的，先数一下权重高的选择器有几个，个数越多权重越高",
		id : "M007",
		muti: true
	},
	{
		question : "IE6中，以下CSS选择器被支持的有：",
		radios : [ "span + p","ul > li",":after",".nav.current" ],
		desc: "多个class选择器在IE6里面可以识别第一个，可以看做能够被支持，但是请不要再IE6里面使用",
		id : "M008",
		muti: true
	},
	{
		question : "下列均属于行内标签的一组是：",
		radios : [ "span,p","ul,li","a,strong","div,dl" ],
		desc: "没啥好说的，自己百度吧！",
		id : "M009"
	},
	{
		question : "下列哪些position定义时, left属性可以生效：",
		radios : [ "static","relative","fixed","absolute" ],
		desc: "除了默认的static定位，其他时候定位属性都可以生效",
		id : "M010",
		muti: true
	},
	{
		question : "以下javascript代码片段存在语法错误的是：",
		radios : [ "var fn = function(){};","Math.PI * 3","var c = 2.toString()","'7'-4" ],
		desc: "数字字面量直接使用属性运算符会被识别为小数点",
		id : "M011",
		muti: true
	},
	{
		question : "选择正确的通用JSON格式(非javascript对象)：",
		radios : [ '{name:"lili"}','["ok",{"id":2}]','{"amount":1.44e+10,"owner":null}','{"male":true,"friends":["a","b"]}' ],
		desc: "http://www.bejson.com/knownjson/aboutjson/",
		id : "M012",
		muti: true
	},
	{
		question : "代码 `var a = {a:2}, b; b = a; b.a = ++a.a - 2; 则: a.a的值为： ` ",
		radios : [ '0', '1', '2', '3' ],
		desc: "1.运算符优先级： 单目运算符 》 数值运算符 》赋值运算符； 2.对象赋值只是引用复制，指向的还是同一个对象",
		id : "M013"
	},
	{
		question : "以下不属于javascript中Array对象方法或属性的有：",
		radios : [ "splice,slice","sort,shuffle","concat,join","shift,unshift" ],
		desc: "shuffle不存在",
		id : "M014",
		muti: true
	},
	{
		question : "以下匹配javascript中变量名的正则表达式是：",
		radios : [ /^[a-zA-Z0-9]+$/,/^[\w\d]+$/,/^\w+$/,/^[a-zA-Z_\$]+[\w\$]*$/ ],
		desc: "变量名支持字母数字下划线和$",
		id : "M015"
	},
	{
		question : "表示请求被客户端缓存的HTTP-code为：",
		radios : [ 200,404,304,500 ],
		desc: "200: OK, 404: Not Found; 304: Not Modify; 500: Server Error",
		id : "M016"
	},
	{
		question : "下列哪项属于GET请求和POST请求的不同点：",
		radios : [ '支持form标签表单提交','支持XMLHttpRequest','支持文件上传','支持下载文件' ],
		desc: "上传文件需要POST",
		id : "M017",
		muti: true
	},
	{
		question : "对于服务器返回js资源文件正确的MIME为：",
		radios : [ 'text/script','application/javascript','text/javascript','script/text' ],
		desc: "application/javascript",
		id : "M018"
	},
	{
		question : "UserAgent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36  表示以下哪款浏览器",
		radios : [ 'Microsoft Windows IE','Apple Safari','Mozilla Firefox','Google Chrome' ],
		desc: "Chrome",
		id : "M019"
	},
	{
		question : "下列哪项信息一般不是浏览器发送给服务器的：",
		radios : [ 'cookie','user-agent','Accept-Encoding','Content-Type' ],
		desc: "cookie, user-agent, Accept-Encoding 都是请求发送时候可能携带的信息， Content-Type是指服务端响应的内容类型",
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
		desc: "媒体资源一般不受同源策略约束",
		id : "M022",
		muti: true
	},
	{
		question : "下列哪种常用的WEB服务器默认的端口号不含80：",
		radios : [ 'Apache','IIS','Tomcat','Nginx' ],
		desc: "Tomcat 默认的WEB服务器端口应该是8080",
		id : "M023",
		muti: true
	},
	{
		question : "以下哪些方式有利于从HTTP请求上对资源加载进行优化",
		radios : [ '合并过多的零碎文件','拆分过大的资源文件','服务器开启gzip压缩','对资源文件进行压缩' ],
		desc: "合并请求也压缩资源是HTTP请求优化的常用方式， 请求并发数控制在一定范围，文件大小不能过大，gzip也可以对资源进行很好的压缩",
		id : "M024",
		muti: true
	},
	{
		question : "以下哪些方式能有效的避免服务器的资源缓存",
		radios : [ '采用cdn优化资源','使用MD5重命名资源和引入','更新资源时添加必要的时间戳标记','模块化资源, 实现按需异步加载' ],
		desc: "cdn主要是从资源请求响应速度上面考虑的，并不直接考虑资源缓存相关，资源异步加载本身不是为了避免缓存，而是考虑到避免过渡加载",
		id : "M025",
		muti: true
	}
];
