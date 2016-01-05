<%
	var Cookies = {};
    request.headers.cookie && request.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
	var username = Cookies.username;
%>

(function(E){
	var username = document.getElementById('username');
	username.value = '<%=username%>';
})(Exam);
