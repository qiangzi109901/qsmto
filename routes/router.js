
var Index = require('./control/index');
var Filter = require('./control/filter');
module.exports = function(app){

    app.use(Filter.renderFilter);
    app.get('/',Index.index);


    //自动渲染后台页面
    app.get(['/admin/:homePage'],Index.auto);

    //错误页面
    app.get('/404', Index.page404);
    app.get('/500', Index.page500);

}