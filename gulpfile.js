var gulp = require('gulp');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function(){
  var wiredep = require('wiredep').stream;
  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});

  var injectOptions = {
    ignorePath: '/public'
  };

  return gulp.src('./src/views/*.html')
                  .pipe(wiredep(options))
                  .pipe(inject(injectSrc, injectOptions))
                  .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], function(){
  var options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 3000
    },
    watch: jsFiles
  };

  return nodemon(options)
          .on('restart', function(env){
            console.log('Restarting....'); 
          });
});
