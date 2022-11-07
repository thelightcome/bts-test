export const videos = () => {
  return app.gulp.src(app.path.src.videos)
    .pipe(app.gulp.dest(app.path.build.videos));
}