(function(win,$){
	var head = document.getElementsByTagName("head")[0];
	var ieCode = document.createTextNode("<!--[if IE]> <script>window.isIE = true;</script> <![endif]-->");
	head.appendChild(ieCode);

	var count = {};
	$.itemCount = function(key){
		count[key] = count[key] || 1;
		return count[key]++
	};

	var choice = function(item){
		var table = $.create('table'), 
			id = item.id;
		var queLine = table.insertRow(),
			que = queLine.insertCell(),
			ansHolder = $.create('span');
		var count = $.itemCount( "choice" );
		que.colSpan = 4;
		que.innerHTML = count + "." + item.question.replace(/<(.*?)>/g,"&lt;$1&gt;");
		ansHolder.className = "ans-holder";
		ansHolder.innerHTML = "(<em></em>)";
		que.appendChild(ansHolder);

		var ansLine = table.insertRow(1);
		for(var i=0; i<item.radios.length; i++){ 

			var ans = ansLine.insertCell(i),
				radio = $.create('input');
			radio.type = item.muti ? 'checkbox' : 'radio' ;
			radio.id = id + "-" + i;
			radio.name = id;
			radio.value = i+"";
			try{
				if(document.uniqueID){
					radio = $.create('<input type="' + (item.muti ? 'checkbox' : 'radio') + '" id="' + id + "-" + i + '" name="' + id + '" value="' + i + '" >'); 	// IE6/7的hack 	
				} 
			}catch(e){

			};
			ans.appendChild( radio );
			ans.innerHTML += '<label for="'+radio.id+'" >' + 'ABCDEFG'.charAt(radio.value) + '. ' + (""+item.radios[i]).replace(/<(.*?)>/g,"&lt;$1&gt;") + '</label>'; 
		}
		que.setAttribute('colspan',4);
		
		var result = ansHolder.children[0];
		$.attchEvent(table,'click',function(e){
			var d = e.target;
			if( d.tagName.toUpperCase() === "INPUT" ){
				if( item.muti ){
					var c = 'ABCDEFG'.charAt(d.value);
					if( result.innerHTML.indexOf(c) > -1 ){
						result.innerHTML = result.innerHTML.replace(c,"");
					}else{
						result.innerHTML = (result.innerHTML+c).split("").sort().join("");
					}
				}else{
					result.innerHTML = 'ABCDEFG'.charAt(d.value);
				}
			}
		});
		table.className = "choice";
		return ( table );
	};

	var code = function(item){
		var table = $.create('table'), 
			id = item.id;
		var queLine = table.insertRow(),
			que = queLine.insertCell(),
			ansHolder = $.create('span');
		var count = $.itemCount( "code" );

		que.innerHTML = count + "." + item.question.replace(/<(.*?)>/g,"&lt;$1&gt;");
		ansHolder.className = "ans-holder";
		var ansLine = table.insertRow(1), ans = ansLine.insertCell();
		var textarea = $.create("textarea");
		radio.id = id + "-" + i;
		radio.name = id;
		ans.appendChild( textarea );
		table.className = "code";
		return (table);
	};

	var head = document.getElementsByTagName("head")[0];
	var load = function(url,cbk){
		var spt = document.createElement("script");
		spt.type= "text/javascript";
		spt.src = url;
		head.appendChild(spt);
		spt.onload = cbk;
		if( window.isIE ){
			spt.onreadystatechange = function(){
				if(this.readyState=='loaded' || this.readyState=='complete' ){
					typeof cbk === "function" ? cbk.call(this) : "";
				}
			};
		}
	};

	win.Exam = {
		attchEvent: $.attchEvent,
		choice:choice,	//单选
		load:load,
		cookie:{
			set:function(c_name,value,expiredays){
				var finalValue = escape(value);
				var exdate = new Date();
				exdate.setDate(exdate.getDate() + (expiredays|| 1) );
				document.cookie=c_name+ "=" +finalValue+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
			},
			get:function(c_name){
				if (document.cookie.length>0){
					var c_start=document.cookie.indexOf(c_name + "=");
					if (c_start!=-1){ 
						c_start=c_start + c_name.length+1 ;
						c_end=document.cookie.indexOf(";",c_start);
						if (c_end==-1) c_end=document.cookie.length;
							return unescape(document.cookie.substring(c_start,c_end));
			  			} 
					}
				return "";
			}
		}
		
	};

	var renderStyle = function () {
		var indexes = []
		var random2in5 = function (i) {
			var a = Math.floor(Math.random() * 5)
			var b = (Math.floor(Math.random() * 4) + a + 1) % 5
			indexes.push(a + i)
			indexes.push(b + i)
		}
		for(var i = 0; i < document.getElementsByTagName('table').length; i += 5) {
			random2in5(i)
		}
		return indexes.map(function (n) { return 'table:nth-child(' + (n + 1) + ')' }).join(',') + '{display: table}'
	}
	var style = document.createElement('style')
	head.appendChild(style)
	onkeydown = function (e) {
		e = e || window.event
		if (e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
			head.removeChild(style)
			style = document.createElement('style')
			style.media = 'print'
			style.innerHTML =  'table,.text-center {display: none}' + renderStyle()
			head.appendChild(style)
			print()
		}
	}
})(window,{ 
	attchEvent : function(d,type,fn){
		if( d.addEventListener ){
			return d.addEventListener(type,fn,false);
		}else{
			d.attachEvent("on"+type,function(e){
				var ev = e || window.event;
				ev.target = ev.target || ev.srcElement; 
				fn.call(d,ev);
			});
		}
	},
	create : function(tag){
		return document.createElement(tag);
	}
});