# Secure Pipeline Demo

A hands-on demo of integrating security into CI/CD pipelines using open-source tools.

## 🔐 Features
- CodeQL static analysis for JavaScript vulnerabilities
- Gitleaks secret scanning for hardcoded credentials
- OWASP Dependency Check integration
- SBOM generation using CycloneDX
- Node.js sample app with intentional vulnerabilities
- GitHub Actions workflow for automated security scans

## 📦 Tools Used
- GitHub Actions
- CodeQL
- Gitleaks
- cdxgen
- OWASP Dependency Check
- Node.js

## 🚀 How to Run
1. Clone the repo  
2. Install dependencies: `npm install`  
3. Push code to `main` branch or open a pull request to trigger the security scans

## 📄 License
MIT

![CodeQL Scan](https://github.com/MMISHRA-IR/secure-pipeline-demo/actions/workflows/security-scans.yml/badge.svg)

# GH Repository This is a test update to confirm GitHub sync 
# GH Repository This is a test update to confirm GitHub sync -SonarQube
# GH Repository This is a test update to confirm GitHub sync -removing Qualitygates02
# GH Repository - corrected workflow folder01
<!-- Triggering Docker GHCR workflow -->
# Secure Pipeline Demo
Testing SonarCloud workflow trigger 

## Workflows

## ⚙️ GitHub Workflows

### IaC Provisioning (`iac.yml`)
- **Trigger**: Manual (`workflow_dispatch`)
- **Action**: Runs `iac-sample/provision.ps1` to create AD user/gMSA
- **Secrets**: Uses `AD_USER`, `AD_PASS` stored in GitHub Secrets

### Security Scan (`security-scan.yml`)
- **Trigger**: On push to `main`
- **Action**: Runs PSScriptAnalyzer + SonarCloud
- **Purpose**: Validate PowerShell scripts and enforce secure coding standards

### Deployment (`deploy.yml`)
- **Trigger**: On release tag
- **Action**: Deploys infrastructure/app to target environment





