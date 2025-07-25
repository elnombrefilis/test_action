const core = require('@actions/core');
try {
    const name = core.getInput('name');
    console.log(`Hello ${name}!`);
    console.log(`Your secret is ${secrets}!`)
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
    
}