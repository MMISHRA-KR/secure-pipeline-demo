<div align="center">
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                    P R O F E S S I O N A L   H E A D E R              -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00FF41,50:2088FF,100:0D1117&height=220&section=header&text=🔐%20Secure%20Pipeline%20Demo&fontSize=45&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=DevSecOps%20|%20CI%2FCD%20|%20Open%20Source%20Security&descAlignY=55&descSize=18" width="100%" alt="Secure Pipeline Demo Banner" />
<br/>
<!-- Animated Typing Header -->
<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=28&duration=3000&pause=1000&color=00FF41&center=true&vCenter=true&width=900&lines=🔐+Secure+Pipeline+Demo;🛡️+DevSecOps+Integration;⚡+Automated+Security+Scans;🚀+Open+Source+Security+Tools;🧪+Hands-On+Vulnerability+Training" alt="Typing SVG" />
<br/><br/>
<!-- Professional Status Badges Row -->
<p>
  <a href="https://github.com/MMISHRA-IR/secure-pipeline-demo/actions/workflows/security-scans.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/MMISHRA-IR/secure-pipeline-demo/security-scans.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=CodeQL%20Scan&labelColor=0D1117&color=00FF41" alt="CodeQL Scan" />
  </a>
  <a href="https://sonarcloud.io/">
    <img src="https://img.shields.io/badge/SonarCloud-Passing-4EAA25?style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=0D1117" alt="SonarCloud" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/PSScriptAnalyzer-Active-1E90FF?style=for-the-badge&logo=powershell&logoColor=white&labelColor=0D1117" alt="PSScriptAnalyzer" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/DevSecOps-Enabled-FF6C37?style=for-the-badge&logo=checkmarx&logoColor=white&labelColor=0D1117" alt="DevSecOps" />
  </a>
</p>
<p>
  <img src="https://img.shields.io/badge/Security-First-00FF41?style=flat-square&logo=shield&logoColor=white&labelColor=0D1117" alt="Security First" />
  <img src="https://img.shields.io/badge/CI%2FCD-Automated-00FF41?style=flat-square&logo=githubactions&logoColor=white&labelColor=0D1117" alt="CI/CD Automated" />
  <img src="https://img.shields.io/badge/Open%20Source-100%25-00FF41?style=flat-square&logo=opensourceinitiative&logoColor=white&labelColor=0D1117" alt="Open Source" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square&labelColor=0D1117" alt="MIT License" />
</p>
<br/>
<!-- Tech Stack Icons -->
<img src="https://skillicons.dev/icons?i=githubactions,nodejs,powershell,git&theme=dark&perline=4" alt="Tech Stack" />
</div>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                         📋 TABLE OF CONTENTS                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<details open>
<summary><h2>📑 Table of Contents</h2></summary>
🔐 Features
📦 Tools Used
🚀 How to Run
⚙️ GitHub Workflows
📊 CI/CD Pipeline Diagram
📄 License
📝 Repository Update Log
</details>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                            🔐 FEATURES                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">🔐 Features</h2>
<div align="center">
Table
🔍 Feature	🛠️ Tool	📊 Status
Static Analysis for JavaScript vulnerabilities	CodeQL	
 Active 
Secret scanning for hardcoded credentials	Gitleaks	
 Active 
Dependency vulnerability check	OWASP Dependency Check	
 Active 
SBOM generation	CycloneDX (cdxgen)	
 Active 
Sample vulnerable Node.js app	Node.js	
 Included 
Automated security scans	GitHub Actions	
 Automated 
</div>
CodeQL static analysis for JavaScript vulnerabilities
Gitleaks secret scanning for hardcoded credentials
OWASP Dependency Check integration
SBOM generation using CycloneDX
Node.js sample app with intentional vulnerabilities
GitHub Actions workflow for automated security scans
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                          📦 TOOLS USED                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">📦 Tools Used</h2>
<div align="center">
https://github.com/features/actions
https://codeql.github.com/
https://github.com/zricethezav/gitleaks
https://github.com/CycloneDX/cdxgen
https://owasp.org/www-project-dependency-check/
https://nodejs.org/
</div>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                          🚀 HOW TO RUN                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">🚀 How to Run</h2>
<div align="center">
<table>
<tr>
<td align="center" width="250">
1️⃣ Clone
bash
git clone https://github.com/MMISHRA-IR/secure-pipeline-demo.git
cd secure-pipeline-demo
</td>
<td align="center" width="250">
2️⃣ Install
bash
npm install
</td>
<td align="center" width="250">
3️⃣ Trigger
Push to main or open a Pull Request to trigger security scans
</td>
</tr>
</table>
</div>
Clone the repo
Install dependencies: npm install
Push code to main branch or open a pull request to trigger the security scans
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                       ⚙️ GITHUB WORKFLOWS                               -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">⚙️ GitHub Workflows</h2>
🔧 IaC Provisioning (iac.yml)
Trigger: Manual (workflow_dispatch)
Action: Runs iac-sample/provision.ps1 to create AD user/gMSA
Secrets: Uses AD_USER, AD_PASS stored in GitHub Secrets
🔐 Security Scan (security-scan.yml)
Trigger: On push to main
Action: Runs PSScriptAnalyzer + SonarCloud
Purpose: Validate PowerShell scripts and enforce secure coding standards
🚀 Deployment (deploy.yml)
Trigger: On release tag
Action: Deploys infrastructure/app to target environment
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                    📊 CI/CD PIPELINE DIAGRAM                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">📊 CI/CD Pipeline Diagram</h2>
<div align="center">
Mermaid
Code
Preview
🚀 Stage 3: Deploy

Release Tag
Deploy Infra
Deploy App
🔐 Stage 2: Security Scan

PSScriptAnalyzer
SonarCloud
CodeQL
Gitleaks
OWASP Dep-Check
🔧 Stage 1: IaC Provisioning

workflow_dispatch
provision.ps1
AD User / gMSA
🚀 Trigger

Push to main
Pull Request
Release Tag
</div>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                            📄 LICENSE                                   -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<h2 align="center">📄 License</h2>
<div align="center">
https://opensource.org/licenses/MIT
MIT
</div>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                      📝 REPOSITORY UPDATE LOG                           -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<details>
<summary><h2>📝 Repository Update Log</h2></summary>
GH Repository This is a test update to confirm GitHub sync
GH Repository This is a test update to confirm GitHub sync -SonarQube
GH Repository This is a test update to confirm GitHub sync -removing Qualitygates02
GH Repository - corrected workflow folder01
<!-- Triggering Docker GHCR workflow -->
Secure Pipeline Demo
Testing SonarCloud workflow trigger
Workflows
</details>
<br/>
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--                              FOOTER                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:2088FF,100:00FF41&height=120&section=footer&text=Built%20with%20💚%20for%20the%20DevSecOps%20community&fontSize=18&fontColor=ffffff&animation=twinkling&fontAlignY=75" width="100%" alt="Footer" />
</div>




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
