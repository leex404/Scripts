/*
elpass.js

[rewrite_local]
^https:\/\/api\.elpass\.app\/device\/init url script-response-body https://raw.githubusercontent.com/leex404/Scripts/master/elpass.js
[mitm]
hostname=api.elpass.app
*/

var obj = JSON.parse($response.body)
obj["license"]["policy"]="eyJkZXZpY2VJRCI6IjI3MjRDMTkzNDZBRSIsImRidXVpZCI6ImViOTZkYTgwLWMyZWEtMTFlYi1hNTM2LWEzZDUyNWY5MTRhZiIsInBvbGljeUV4cGlyYXRpb25EYXRlIjo0MDg0MDEwMzA1LCJzdWJzY3JpcHRpb25FbmREYXRlIjo0MDg0MDA5NTYyLCJub3ciOjE2MjI1NjA3MDUsImV4cGlyZWQiOmZhbHNlLCJyZXZva2VkIjpmYWxzZX0=";
$done(JSON.stringify(obj));
