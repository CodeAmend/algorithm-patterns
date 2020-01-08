let exitCode = 0

process.on('exit', () => {
  process.exit(exitCode);
});

function ok() {
  try {
    console.assert.apply(null, arguments);
  } catch(e) {
    exitCode = 1;
    console.log('FAIL:', e.message);
  }
}

module.exports = { ok };
