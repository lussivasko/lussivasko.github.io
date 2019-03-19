var gulp = require('gulp');
    less = require('gulp-less'),			
    
    
gulp.task('mytask', function () {
        return gulp.src('source-files')	
            .pipe(plugin())					
            .pipe(gulp.dest('folder'))		
    })

        
gulp.task('less', function () {
        return gulp.src('app/less/**/*.less')
            .pipe(less())
            .pipe(gulp.dest('app/css'))
    })
 gulp.task('watch', function() {
        gulp.watch('app/less/**/*.less', ['less'])
        
    });