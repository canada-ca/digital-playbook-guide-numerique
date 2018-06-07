#!/usr/bin/env node

'use strict';

var markdownLinkCheck = require('markdown-link-check');
var fs = require("fs");
var glob = require("glob");
var path = require("path");
var url = require("url");
var chalk = require("chalk");

var files = glob.sync("**/*.md", {ignore: ["node_modules/**/*.md", "**/digital-playbook.md", "**/guide-numerique.md"]})

var deads = false;

var opts = JSON.parse(fs.readFileSync(".markdown-link-check.json"));

opts.baseUrl = "file://" + path.resolve(__dirname, "_site/").replace(/\\/g, '/') + "/"

files.forEach(function(file) {
  var markdown = fs.readFileSync(file).toString();

  markdownLinkCheck(markdown, opts, function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }

    console.log(chalk.green("Reading: " + file));

    results.forEach(function (result) {
      if(result.status === "dead") {
        if (result.statusCode == 500) {
          console.log(chalk.yellow("Server error on target: " + result.link));
        }
        else {
          deads = true;
          console.log(chalk.red("Dead: " + result.link));
        }
      }
    });
    if(deads) {
      console.error(chalk.red('\nERROR: dead links found!'));
      process.exit(1);
    }
  });
});
