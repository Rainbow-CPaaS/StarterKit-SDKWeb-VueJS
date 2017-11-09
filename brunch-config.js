module.exports = {
    
        "files": {
            "javascripts": {
                "joinTo": {
                    'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
                    'app.js': /^app/,
                },
                "order": {
                    "before": [
                    ]
                }
            },
            "stylesheets": {joinTo: 'app.css'}
        },
    
        "plugins": {
            "babel": {presets: ['latest', 'es2015']},
            "copycat":{
                "sdk" : ["node_modules/rainbow-web-sdk/dist/lib/vendors-sdk.min.js", "node_modules/rainbow-web-sdk/dist/lib/rainbow-sdk.min.js"],
                verbose : true, //shows each file that is copied to the destination directory
                onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
              }
        },
    
        "npm": {
            "enabled": true,
            "globals": {
                "$": "jquery",
                "jQuery": "jquery",
                "moment": "moment",
                "angular": "angular"
            }
        }
    };
