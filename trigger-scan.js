// trigger-scan.js
// This file is used to trigger the multi-environment CodeQL scan

function scanTrigger(env) {
  console.log(`CodeQL scan triggered for ${env} environment`);
}

scanTrigger('test');
