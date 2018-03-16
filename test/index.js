import test from 'ava'
import isPlainObj from 'is-plain-obj'
import tempWrite from 'temp-write'
import eslint from 'eslint'

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId);

function runEslint(filePaths, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    })

    return linter.executeOnFiles(filePaths).results[0].messages;
}

test('main', t => {
    const conf = require('../index');

    t.true(isPlainObj(conf));
    t.true(isPlainObj(conf.rules));

    const errors = runEslint(['./test/cases/has-error.vue'], conf);
    t.true(hasRule(errors, 'vue/valid-v-once'));
});

test('no errors', t => {
    const conf = require('..');

    const errors = runEslint(['./test/cases/no-error.vue'], conf);
    t.deepEqual(errors, []);
});
