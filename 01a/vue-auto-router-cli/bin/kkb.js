#!/usr/bin/env node
console.log('cli...')

const program = require('commander')
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
    // .action( name => {
    //     console.log('init '+ name)
    // })
program.parse(process.argv)
