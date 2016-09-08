// exports.index = function(req, res){
// 	res.json(200, {name:'小新', age: 24, position: 'front-end-enginner'});
// }
// exports.about = function(req,res){
// 	res.send('这是关于页面！');
// }

module.exports = {
	index: function(req, res){
		res.send('这是首页！');
		// res.json(200, {name: '小新', age: 24, position: 'front-end-enginner'});
	},
	about: function(req,res){
		res.send('这是关于页面！');
	},
	notFound: function(req, res){
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('404 error! Not found the page!\n');
	}
}












