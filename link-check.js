#!/usr/bin/env node

'use strict';

var markdownLinkCheck = require('markdown-link-check');
var fs = require("fs");
var glob = require("glob");
var path = require("path");
var url = require("url");
var chalk = require("chalk");

var internalGCHosts = ["www.gcpedia.gc.ca"]
var files = glob.sync("**/*.md", {ignore: "node_modules/**/*.md"})

var deads = false;

files.forEach(function(file) {
  var markdown = fs.readFileSync(file).toString();
  var opts = {};
  opts.baseUrl = 'file://' + path.dirname(path.resolve(file));

  markdownLinkCheck(markdown, opts, function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }

    console.log(chalk.green("Reading: " + file));

    results.forEach(function (result) {
      if(result.status === "dead") {
        var target = url.parse(result.link);

        if(internalGCHosts.indexOf(target.hostname) == -1)
        {
          deads = true;
          console.log(chalk.red("Dead: " + result.link));
        } else if (result.statusCode == 500) {
          console.log(chalk.yellow("Server error on target: " + result.link));
        }
        else {
          console.log(chalk.yellow("Internal GC link: " + result.link));
        }
      }
    });
    if(deads) {
      console.error(chalk.red('\nERROR: dead links found!'));
      process.exit(1);
    }
  });
});
