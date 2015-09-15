module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		stylus: {
			compileDev: {
				options: {
					compress: false
				},
				files: {
					'build/public/assets/css/core.css': 'build/public/assets/styls/core.styl'
				}
			},
			compileDist: {
				options: {
					compress: true
				},
				files: {
					'build/public/assets/css/core.css': 'build/public/assets/styls/core.styl'
				}
			}
		}

	});

	// Load tasks from "grunt-sample" grunt plugin installed via Npm.
	grunt.loadNpmTasks('grunt-contrib-stylus');


	// Default task.
	grunt.registerTask('default',
		[
			'stylus:compileDev'
		]
	);

};
