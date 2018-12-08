#!/usr/bin/env node

const minimist = require('minimist')
const args: any = minimist(process.argv.slice(2))

console.dir(args)
