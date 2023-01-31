#!/bin/bash
# A sample Bash script, by krishna
echo starting!


git add .
git commit -m "update"
git push origin master
npm run rollup
npm version patch
npm publish 


echo done!