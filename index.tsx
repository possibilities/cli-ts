#!/usr/bin/env node

const minimist = require('minimist')

const moof = (moof: string) => {}

console.dir(minimist(process.argv.slice(2)))
