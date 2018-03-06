
const gulp = require('gulp'); //本地安装gulp所用到的地方
const babel = require('gulp-babel');
const connect=require('gulp-connect');
//编译es6
//gulp.task('change', function() {
//  gulp.src('js/*.js')
//      .pipe(babel())
//      .pipe(gulp.dest('dist'))
//})
//刷新浏览器
gulp.task('connect',function(){
	connect.server({
         livereload: true     
    });
})
//刷新html
gulp.task("html",function(){
	gulp.src("*.html")
	.pipe(connect.reload())
})
//刷新css
gulp.task("css",function(){
	 gulp.src("css/*.css")
	 .pipe(connect.reload())
})
//监听
gulp.task("watch",function () {
//	gulp.watch("js/*.js",['change'])
	gulp.watch("*.html",['html'])
	gulp.watch("*css/*.css",['css'])
})


//执行任务
gulp.task('default',['watch','connect','html','css'])























