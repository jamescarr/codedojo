#!/usr/local/bin/node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../../.npm/less/1.0.21/dependencies")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../../.npm/less/1.0.21/package/lib/less/tree/directive"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
