// 🚨 CodeQL test
function risky(input) {
  return eval(input); // CodeQL will flag this
}

// 🚨 Gitleaks test
const secret = "ghp_test1234567890abcdef1234567890abcdef"; // Gitleaks will catch this
