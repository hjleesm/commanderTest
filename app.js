const { Command } = require('commander');
const packageJson = require('./package.json');

const program = new Command();

program
    .requiredOption('-n, --name <name>', 'file name')
    .option('-c, --compress', 'compress', false)
    .version(packageJson.version)
    .parse();

console.log(program.opts().name);
console.log(program.opts().compress);