// 该文件用于存放数据，采用CommonJS规范
var entries = [
	{id: 1, title: '第一篇', body: '第一篇正文', published: '2016/01/08'},
	{id: 2, title: '第二篇', body: '第二篇正文', published: '2016/02/08'},
	{id: 3, title: '第三篇', body: '第三篇正文', published: '2016/03/08'},
	{id: 4, title: '第四篇', body: '第四篇正文', published: '2016/04/08'},
	{id: 5, title: '第五篇', body: '第五篇正文', published: '2016/05/08'},
	{id: 6, title: '第六篇', body: '第六篇正文', published: '2016/06/08'},
	{id: 7, title: '第七篇', body: '第七篇正文', published: '2016/07/08'},
	{id: 8, title: '第八篇', body: '第八篇正文', published: '2016/08/08'},
	{id: 9, title: '第九篇', body: '第九篇正文', published: '2016/09/08'},
	{id: 10, title: '第十篇', body: '第十篇正文', published: '2016/10/08'},
];
exports.getBlogEntries = function(){
	return entries;
};
exports.getBlogEntry = function(id){
	for(var i = 0; i< entries.length; i ++){
		if(entries[i].id == id){
			return entries[i];
		}
	}
};