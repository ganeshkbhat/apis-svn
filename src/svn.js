/**
 * 
 * Package: svn-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i svn-apis --save
 * Github: https://github.com/ganeshkbhat/apis-svn
 * npmjs Link: https://www.npmjs.com/package/svn-apis
 * File: src/svn.js
 * File Description: Using svn-apis instead of require to fetch files from svn repositories
 * 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require('path');
const fs = require('fs');
const { _getRoot } = require("root-dirs");


/** New Structure for Revamped version of index.js with better isolation, and independent functions */


/**
 *
 *
 * @param {*} requestOptions
 * @param {*} [data=null]
 * @param {*} options
 * @return {*} 
 * 
 * 
 */
function _searchSvn(requestOptions, data = null, options) {
    
}

function _findSvnRemoteFileUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}

function _findSvnRemoteRootUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}

function _findSvnRemotePackageJsonUrl(remoteUrl, options) {
    // Implement _getRoot logic and find the package.json url into remote package.json url with concurrency
}

/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _searchSvnFilesResultsModifier(results, options) {
    
}

/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _getDirContentResultsModifier(results, options) {
    
}


function _getSvnURLs() {
    return {
        svn: {}
    }
}


function _getSvnCommit(request, options) { }
function _getSvnSHAHash(request, options) { }
function _getSvnTagName(request, options) { }
function _getSvnBranchName(request, options) { }
function _getSvnContentFile(request, options) { }
function _getSvnContentDir(request, options) { }
function _getSvnContentDirRecursive(request, options) { }
function _getSvnTree(request, options) { }
function _getSvnTreeRecursive(request, options) { }
function _getSvnRepositories(request, options) { }
function _getSvnIssues(request, options) { }
function _getSvnLabels(request, options) { }
function _getSvnTopics(request, options) { }
function _getSvnUsers(request, options) { }
function _getSvnUserRepositories(request, options) { }
function _getSvnRepository(request, options) { }


module.exports._searchSvn = _searchSvn;
module.exports._findSvnRemoteFileUrl = _findSvnRemoteFileUrl;
module.exports._findSvnRemoteRootUrl = _findSvnRemoteRootUrl;
module.exports._findSvnRemotePackageJsonUrl = _findSvnRemotePackageJsonUrl;
module.exports._searchSvnFilesResultsModifier = _searchSvnFilesResultsModifier;
module.exports._getDirContentResultsModifier = _getDirContentResultsModifier;
module.exports._getSvnURLs = _getSvnURLs;
module.exports._getSvnCommit = _getSvnCommit;
module.exports._getSvnSHAHash = _getSvnSHAHash;
module.exports._getSvnTagName = _getSvnTagName;
module.exports._getSvnBranchName = _getSvnBranchName;
module.exports._getSvnContentFile = _getSvnContentFile;
module.exports._getSvnContentDir = _getSvnContentDir;
module.exports._getSvnContentDirRecursive = _getSvnContentDirRecursive;
module.exports._getSvnTree = _getSvnTree;
module.exports._getSvnTreeRecursive = _getSvnTreeRecursive;
module.exports._getSvnRepositories = _getSvnRepositories;
module.exports._getSvnIssues = _getSvnIssues;
module.exports._getSvnLabels = _getSvnLabels;
module.exports._getSvnTopics = _getSvnTopics;
module.exports._getSvnUsers = _getSvnUsers;
module.exports._getSvnUserRepositories = _getSvnUserRepositories;
module.exports._getSvnRepository = _getSvnRepository;


