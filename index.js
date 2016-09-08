var express = require('express');
var http = require('http');
var app = express();

// http://localhost:8080
// app.use(express.static(__dirname + '/public'));
// app.listen(8080);

// 生成动态网页
// app.get('/', function(req, res){
// 	var now = new Date();
// 	var nowTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
// 	res.send('Hello world! Now time is: ' + nowTime);
// });
// app.listen(8080);

// app.get()方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由（routing）”。
// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
// 	res.send('Hello world!');
// });
// app.get('/customer', function(req, res){
// 	res.send('customer page!');
// });
// app.get('/admin', function(req, res){
// 	res.send('admin page!');
// });
// app.listen(8080);

// 把路由封装到一个单独的文件中，router.js
// var express = require('express');
// var app = express();
// var router = require('./routes/router')(app);
// app.listen(8080);

// express框架建立在nodejs内置的http模块上
// var http = require('http');
// var app = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-type': 'text/plain'});
// 	res.end('Hello world!');
// });
// app.listen(8080, 'localhost');

// express框架的核心是对http模块的再包装
// express框架等于在http模块之上，加了一个中间层
// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
// 	res.send('Hello World!');
// });
// app.listen(8080);

// // 只传递request对象的中间件
// function uselessMiddleware(req, res, next){
// 	next();
// }
// // next就是下一中间件，如果带参数，则代表抛出一个错误，参数为错误文本
// function uselessMiddleware(req, res, next){
// 	next('出错了！');
// }
// 抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止

// use是express注册中间件的方法，它返回一个函数
// var express = require('express');
// var http = require('http');
// var app = express();
// app.use(function(req, res, next){
// 	console.log('In cones a ' + req.method + ' to ' + __dirname + req.url);
// 	next();
// });
// app.use(function(req, res, next){
// 	res.writeHead(200, {'Content-type': 'text/plain'});
// 	res.end('Hello World!\n');
// });
// http.createServer(app).listen(8080);

// var express = require('express');
// var http = require('http');
// var app = express();
// app.use(function(req, res, next){
// 	if(req.url == '/'){
// 		res.writeHead(200, {'Content-Type': 'text/plain'});
// 		res.end('Welcome to the homepage!\n');
// 	}else{
// 		next();
// 	}
// });
// app.use(function(req, res, next){
// 	if(req.url == '/about'){
// 		res.writeHead(200, {'Content-type': 'text/plain'});
// 		res.end('This is about page!');
// 	}else{
// 		next();
// 	}
// });
// app.use(function(req, res, next){
// 	res.writeHead(404, {'Content-Type': 'text/plain'});
// 	res.end('404 error! Not found the page!\n');
// });
// http.createServer(app).listen(8080);

// var express = require('express');
// var http = require('http');
// var app = express();
// app.use('/home', function(req, res, next){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Welcome to the home page!\n');
// });
// app.use('/about', function(req, res, next){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Welcome to the about page!\n');
// });
// app.use(function(req, res){
// 	res.writeHead(404, {'Content-Type': 'text/plain'});
// 	res.end('404 error! Not Found!\n');
// });
// http.createServer(app).listen(8080);

// express提供了use方法的一些别名，上面代码可以使用别名的形式来写
// 除了get方法以外，Express还提供post、put、delete方法，
// 即HTTP动词都是Express的方法
// var express = require('express');
// var http = require('http');
// var app = express();
// app.all('*', function(req, res, next){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	next();
// });
// app.get('/', function(req, res){
// 	res.end('Welcome to the home page!\n');
// });
// app.get('/about', function(req, res){
// 	res.end('Welcome to the about page!\n');
// });
// app.get('*', function(req, res){
// 	res.end('404 error! Not Found!\n');
// });
// http.createServer(app).listen(8080);

// 这些方法的第一个参数，都是请求路径，除了绝对匹配，还允许模式匹配
// app.get('hello:who', function(req, res){
// 	res.end('Hello, ' + req.params.who + '.');
// });

// 如果在模式匹配参数后面加上问号，表示参数可选
// app.get('/hello/:who?', function(req, res){
// 	if(req.params.id){
// 		res.end('Hello, ' + req.params.who + '.');
// 	}else{
// 		res.end('Hello Cuest.');
// 	}
// });

// 更复杂的模式匹配demo
// app.get('/form/:fid/thread/:tid', middleware);;
// app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
// 	var from = req.params[0];
// 	var to = req.params[1] || 'HEAD';
// 	res.send('commit range ' + from + '..' + to);
// });

// set方法用于指定变量的值
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');

// response对象
// response.redirect()方法允许网址重定向
// response.redirect('/hello/anime');
// response.redirect('http://www.example.com');
// response.redirect(301, 'http://www.example.com');

// response.sendFile()方法用于发送文件
// response.sendFile('/path/to/anime.mp4');

// response.render()方法用于渲染网页模板
// app.get('/', function(request, response){
// 	// response.render('index', {message: 'Hello world!'});
// 	// response.render(__dirname + '/public/index.html');
// 	// response.redirect('http://www.baidu.com');
// 	// response.redirect(__dirname + '/public/index.html');
// 	response.sendFile(__dirname + '/images/mylogo.jpg');
// });
// http.createServer(app).listen(8080);

// request对象
// request.ip属性用于获得HTTP请求的IP地址
// request.files用于获取上传的文件

// 使用express搭建HTTPS加密服务器
// var fs = require('fs');
// var options = {
// 	key: fs.readFileSync('E:/node_guide_demo/node_guide_demo/key.pem'),
// 	cert: fs.readFileSync('E:/node_guide_demo/node_guide_demo/cert.pem'),
// 	passphrase: '1234'
// };
// var https = require('https');
// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
// 	res.send('Hello World Expressjs');
// });
// var server = https.createServer(options, app);
// server.listen(8080);
// console.log('Server is running on port 8080');














