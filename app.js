// var express = require('express');
// var path = require('path');
// var url = require('url');
// var favicon = require('favicon');
// var logger = require('logger');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

// var app = express();

// // 设定port变量，意为访问端口
// app.set('port', process.env.PORT || 8888);
// // 设定views变量，意为视图存放目录
// app.set('views', path.join(__dirname, 'views'));
// // 设定view engine变量，意为网页的模板引擎
// app.set('view engine', 'html');
// app.use(favicon());
// // app.use(logger('dev'));
// app.use(bodyParser());
// app.use(methodOverride());
// // app.use(app.router);
// // 设定静态文件目录，比如本地文件
// // 目录为node_express_demo/public/images，访问
// // 网址则显示为http://localhost:8888/images
// app.use(express.static(path.join(__dirname, 'public')));
// // 以上代码中的set方法用于设定内部变量，use方法用于调用express的中间件
// app.listen(app.get('port'));

// 所谓“路由”，就是指为不同的访问路径，指定不同的处理方法
// var express = require('express');
// var app = express();
// // 指定根路径及处理方法
// // app.get('/', function(req, res){
// // 	res.send('Hello World!');
// // });
// // 需要指定HTTP头信息的写法
// app.get('/', function(req, res){
// 	var body = 'Hello World! 你好！小新';
// 	res.setHeader('Content-Type', 'text/plain;charset=utf8');
// 	// res.writeHead(200, {
// 	// 	'Content-Type': 'text/plain;charset=utf8',
// 	// 	// 'Content-Length': body.length,
// 	// });
// 	res.end(body);
// });
// // app.get('/api', function(req, res){
// // 	res.send({
// // 		name: '小新',
// // 		age: 24,
// // 		position: 'front-end-enginner'
// // 	});
// // });
// var api = require('./routes/api');
// app.get('/api', api.index);
// app.get('/about', api.about);
// app.use(api.notFound);
// // 上面代码的get方法，表示处理客户端发出的GET请求。
// // 相应的，还有app.post、app.put、
// // app.del（delete是JavaScript保留字，所以改叫del）方法。
// app.listen(8080);

// 静态网页模板
// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/views/index.html');
// });
// app.get('/about', function(req, res){
// 	res.sendFile(__dirname + '/views/about.html');
// });
// app.get('/article', function(req, res){
// 	res.sendFile(__dirname + '/views/article.html');
// });
// app.use(function(req, res){
// 	res.sendFile(__dirname + '/views/notFound.html');
// });
// app.listen(8080);

// 动态网页模板
// var express = require('express');
// var app = express();

// // 加载hbs模块
// var hbs = require('hbs');
// // 指定模板文件所在的目录
// // app.set('views', './public');
// app.set('views', './views');
// // 指定模板文件的后缀名为html
// app.set('view engine', 'html');
// // 运行hbs模块
// app.engine('html', hbs.__express);;
// app.get('/', function(req, res){
// 	res.render('index');
// });
// app.get('/about', function(req, res){
// 	res.render('about');
// });
// app.get('/article', function(req, res){
// 	res.render('article');
// });
// app.use(function(req, res){
// 	res.render('notFound');
// });
// app.listen(8888);

// 渲染是指将数据代入模板的过程
// var express = require('express');
// var app = express();
// var hbs = require('hbs');
// var bodyParser = require('body-parser');
// var path = require('path');
// // 加载数据模板
// var blogEngine = require('./blog');
// app.set('view engine', 'html');
// app.engine('html', hbs.__express);
// // app.set('views', __dirname + '/views');
// // app.set('view engine', 'hbs');
// // app.engine('hbs', hbs.__express);
// // hbs.registerPartials(__dirname + '/views');
// // // 指定静态文件目录
// // app.use(express.static(path.join(__dirname + '/public')));
// // app.use(bodyParser()); // Now deprecated
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.get('/', function(req, res){
// 	res.render('index', {title: '最近文章', entries: blogEngine.getBlogEntries()});	
// });
// app.get('/about', function(req, res){
// 	res.render('about', {title: '自我介绍'});
// });
// app.get('/article/:id', function(req, res){
// 	var entry = blogEngine.getBlogEntry(req.params.id);
// 	res.render('article', {title: entry.title, blog: entry});
// });
// app.listen(8888);

// express.router的用法
// 从4.0开始，路由器功能成了一个单独的组件Express.Router
// var express = require('express');
// var app = express();
// var router = express.Router();
// router.get('/', function(req, res){
// 	res.send('首页');
// });
// router.get('/about', function(req, res){
// 	res.send('关于');
// });
// router.use(function(req, res){
// 	res.send('404');
// });
// app.use('/', router);
// app.listen(8888);

// router.route方法
// var express = require('express');
// console.log('express: ', express);
// var app = express();
// console.log('app: ', app)
// var router = express.Router();
// console.log('router: ', router);
// router.route('/api')
// 	.post(function(req, res){
// 		res.end('This is post request!');
// 	})
// 	.get(function(req, res){
// 		// Bear.find(function(err, bears){
// 		// 	if(err){
// 		// 		res.send('err_msg: ' + err.message);
// 		// 	}else{
// 		// 		res.json(bears);
// 		// 	}
// 		// });
// 		res.end('This is get request!');
// 	});
// // router中间件
// router.use('/', function(req, res, next){
// 	console.log(req.method, req.url);
// 	res.end(req.method + req.url);
// 	next();
// });
// router.use(function(req, res){
// 	res.end('404 error!');
// });
// // 对路径参数的处理
// router.param('name', function(req, res, next, name){
// 	// 对name进行验证或其他处理
// 	console.log(name);
// 	req.name = name;
// 	next();
// });
// router.get('/hello/:name', function(req, res){
// 	res.send('hello ' + req.name + '!');
// });
// app.use('/', router);
// app.listen(8888);
// console.log('Server is running!');
// 注意，中间件的放置顺序很重要，等同于执行顺序。
// 而且，中间件必须放在HTTP动词方法之前，否则不会执行。

// app.route实际上是express.Router()的缩写形式
// var express = require('express');
// var app = express();
// app.route('/login')
// 	.get(function(req, res){
// 		res.send('this is the login form');
// 	})
// 	.post(function(req, res){
// 		console.log('processing');
// 		res.send('processing the login form!');
// 	});
// app.listen(8888);
// console.log('Server is running!');

// 上传文件
// var express = require('express');
// var app = express();
// var path = require('path');
// app.use(express.static(path.join(__dirname + '/public')));
// var router = express.Router();
// var multer = require('multer');
// var uploading = multer({
// 	dest: __dirname + './public/uploads/',
// 	// 设定限制，每次最多上传1个文件，文件大小不超过1MB
// 	limit: {
// 		fileSize: 1000000,
// 		files: 1
// 	}
// });
// router.post('/upload', uploading, function(req, res){
// 	console.log('req: ', req);
// 	console.log('res: ', res);
// });
// module.exports = router;
// app.listen(8888);














































































































