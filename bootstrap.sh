#!/usr/bin/env bash

name=$1
mkdir ${name}
source=template
cp -r ${source}/package.json ${name}
cp -r ${source}/src ${name}
cp -r ${source}/html ${name}
cp -r ${source}/tsconfig.json ${name}
cp -r ${source}/webpack.config.js ${name}
cp -r ${source}/.gitignore ${name}
sed -e "s/template/${name}/g" ${source}/package.json > ${name}/package.json
cd ${name}
npm i
open .
