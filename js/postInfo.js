<%
	$include["js/answer.js"];
	$include["js/questions.js"];
	var data = request.post;
	var validators = {};
	var username = data.name || '';
	$include["js/userInfo.js"];
	$include["js/validator.js"];
%>
(function(E){
	var username = document.getElementById('username');
	
<%
	var path = require('path');
	var fs = require('fs');
	if(!username
		|| !qqValidator(username)
	){
		print('alert("请输入你的QQ号码方便记录!")');
	}else{
		var filepath = path.join(request.util.conf.root, '/answers/', username + '.json');
		var stats = fs.existsSync(filepath);
		if(stats){
			data = JSON.parse(fs.readFileSync(filepath));
			print('alert("您已经提交过答案，得分为: ' + data.score + '")');
			for (var k in data.answer) {
				var ok = answers[k] === data.answer[k].toString();
				validators[k] = ok ? 'result-right' : 'result-wrong';
			}
		}else if(choice.filter(function(item){return !data[item.id]}).length){
			print('alert("有未完成题目！")')
		}else{
			var score = (choice.filter(function(que){
				var ok = answers[que.id] === data[que.id].toString();
				validators[que.id] = ok ? 'result-right' : 'result-wrong';
				return ok;
			}).length / choice.length * 100).toFixed(1);
			if(username !== '807704186'){
				fs.writeFileSync(filepath, JSON.stringify({
					answer: data,
					score: score,
					postDate: new Date().toLocaleString()
				}, null, 2));
			}
			print('alert("您的得分为: ' + score + '")');
		}
	}
%>
	var post = <%=JSON.stringify(data)%>;
	var validators = <%=JSON.stringify(validators)%>;
	username.value = '<%=username%>';

	for(var name in post){
		var items = document.getElementsByName(name);
		if(items[0]){
			items[0].parentNode.parentNode.parentNode.getElementsByTagName('em')[0].className = validators[name];
		}
		for (var i = 0; i < items.length; i++) {
			if(post[name].toString().indexOf(items[i].value) != -1){
				items[i].click();
			}
		}
	}
	E.cookie.set('username', '<%=username%>');
})(Exam);