&lt;div align="center"&gt;

&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;
&lt;!--                    P R O F E S S I O N A L   H E A D E R              --&gt;
&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;

&lt;img src="https://capsule-render.vercel.app/api?type=waving&color=0:00FF41,50:2088FF,100:0D1117&height=220&section=header&text=🔐%20Secure%20Pipeline%20Demo&fontSize=45&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=DevSecOps%20|%20CI%2FCD%20|%20Open%20Source%20Security&descAlignY=55&descSize=18" width="100%" alt="Secure Pipeline Demo Banner" /&gt;

&lt;br/&gt;

&lt;!-- Animated Typing Header --&gt;
&lt;img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=28&duration=3000&pause=1000&color=00FF41&center=true&vCenter=true&width=900&lines=🔐+Secure+Pipeline+Demo;🛡️+DevSecOps+Integration;⚡+Automated+Security+Scans;🚀+Open+Source+Security+Tools;🧪+Hands-On+Vulnerability+Training" alt="Typing SVG" /&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;!-- Professional Status Badges Row --&gt;
&lt;p&gt;
  &lt;a href="https://github.com/MMISHRA-IR/secure-pipeline-demo/actions/workflows/security-scans.yml"&gt;
    &lt;img src="https://img.shields.io/github/actions/workflow/status/MMISHRA-IR/secure-pipeline-demo/security-scans.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=CodeQL%20Scan&labelColor=0D1117&color=00FF41" alt="CodeQL Scan" /&gt;
  &lt;/a&gt;
  &lt;a href="https://sonarcloud.io/"&gt;
    &lt;img src="https://img.shields.io/badge/SonarCloud-Passing-4EAA25?style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=0D1117" alt="SonarCloud" /&gt;
  &lt;/a&gt;
  &lt;a href="#"&gt;
    &lt;img src="https://img.shields.io/badge/PSScriptAnalyzer-Active-1E90FF?style=for-the-badge&logo=powershell&logoColor=white&labelColor=0D1117" alt="PSScriptAnalyzer" /&gt;
  &lt;/a&gt;
  &lt;a href="#"&gt;
    &lt;img src="https://img.shields.io/badge/DevSecOps-Enabled-FF6C37?style=for-the-badge&logo=checkmarx&logoColor=white&labelColor=0D1117" alt="DevSecOps" /&gt;
  &lt;/a&gt;
&lt;/p&gt;

&lt;p&gt;
  &lt;img src="https://img.shields.io/badge/Security-First-00FF41?style=flat-square&logo=shield&logoColor=white&labelColor=0D1117" alt="Security First" /&gt;
  &lt;img src="https://img.shields.io/badge/CI%2FCD-Automated-00FF41?style=flat-square&logo=githubactions&logoColor=white&labelColor=0D1117" alt="CI/CD Automated" /&gt;
  &lt;img src="https://img.shields.io/badge/Open%20Source-100%25-00FF41?style=flat-square&logo=opensourceinitiative&logoColor=white&labelColor=0D1117" alt="Open Source" /&gt;
  &lt;img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square&labelColor=0D1117" alt="MIT License" /&gt;
&lt;/p&gt;

&lt;br/&gt;

&lt;!-- Tech Stack Icons --&gt;
&lt;img src="https://skillicons.dev/icons?i=githubactions,nodejs,powershell,git&theme=dark&perline=4" alt="Tech Stack" /&gt;

&lt;/div&gt;

&lt;br/&gt;

&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;
&lt;!--              O R I G I N A L   C O N T E N T   S T A R T S              --&gt;
&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;

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
&lt;!-- Triggering Docker GHCR workflow --&gt;
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

&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;
&lt;!--              O R I G I N A L   C O N T E N T   E N D S                --&gt;
&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;

&lt;br/&gt;

&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;
&lt;!--                    B O N U S :  P I P E L I N E   D I A G R A M         --&gt;
&lt;!-- ═══════════════════════════════════════════════════════════════════════ --&gt;

&lt;h2 align="center"&gt;📊 CI/CD Pipeline Flow&lt;/h2&gt;

&lt;div align="center"&gt;

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#00FF41', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#2088FF', 'lineColor': '#00FF41', 'secondaryColor': '#0D1117', 'tertiaryColor': '#2088FF'}}}%%
flowchart LR
    subgraph TRIGGER["🚀 Trigger"]
        direction TB
        A1["Push to main"] --&gt; A2["Pull Request"]
        A2 --&gt; A3["Release Tag"]
    end

    subgraph STAGE1["🔧 Stage 1: IaC Provisioning"]
        direction TB
        B1["workflow_dispatch"] --&gt; B2["provision.ps1"]
        B2 --&gt; B3["AD User / gMSA"]
    end

    subgraph STAGE2["🔐 Stage 2: Security Scan"]
        direction TB
        C1["PSScriptAnalyzer"] --&gt; C2["SonarCloud"]
        C2 --&gt; C3["CodeQL"]
        C3 --&gt; C4["Gitleaks"]
        C4 --&gt; C5["OWASP Dep-Check"]
    end

    subgraph STAGE3["🚀 Stage 3: Deploy"]
        direction TB
        D1["Release Tag"] --&gt; D2["Deploy Infra"]
        D2 --&gt; D3["Deploy App"]
    end

    TRIGGER --&gt; STAGE1
    TRIGGER --&gt; STAGE2
    STAGE2 --&gt; STAGE3

    style TRIGGER fill:#0D1117,stroke:#2088FF,stroke-width:2px
    style STAGE1 fill:#0D1117,stroke:#00FF41,stroke-width:2px
    style STAGE2 fill:#0D1117,stroke:#FF6C37,stroke-width:2px
    style STAGE3 fill:#0D1117,stroke:#1E90FF,stroke-width:2px


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
