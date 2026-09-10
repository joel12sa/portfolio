# Graph Report - .  (2026-09-07)

## Corpus Check
- Corpus is ~4,408 words - fits in a single context window. You may not need a graph.

## Summary
- 197 nodes · 263 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Professional Profile & CV
- React UI Components
- Linting Tooling
- App TypeScript Config
- Runtime Dependencies
- Node TypeScript Config
- Deployment Pipeline
- i18n Translation Layer
- Web Fonts
- TypeScript Project References
- CSS
- N8N Automation

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 21 edges
2. `Franklin Joel Sasig Abrajan` - 21 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 16 edges
5. `Full Stack Developer Intern | Import-Quivenza LTA` - 13 edges
6. `scripts` - 7 edges
7. `Odoo Freelance Intern | Sellside SpA` - 7 edges
8. `build Job` - 6 edges
9. `deploy Job` - 5 edges
10. `Mobile Developer | Universidad Fuerzas Armadas – ESPE` - 5 edges

## Surprising Connections (you probably didn't know these)
- `GitHub Pages` --conceptually_related_to--> `Root Div`  [INFERRED]
  .github/workflows/deploy.yml → index.html
- `main.tsx Entry Point` --conceptually_related_to--> `npm`  [INFERRED]
  index.html → .github/workflows/deploy.yml
- `About()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/About/About.tsx → src/i18n/LanguageContext.tsx
- `Contact()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Contact/Contact.tsx → src/i18n/LanguageContext.tsx
- `Hero()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Hero/Hero.tsx → src/i18n/LanguageContext.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GitHub Pages Deployment Flow** — github_workflows_deploy_yml_deploy_to_github_pages, github_workflows_deploy_yml_build, github_workflows_deploy_yml_deploy, github_workflows_deploy_yml_github_pages [EXTRACTED 1.00]
- **Google Fonts Loading** — index_html_google_fonts, index_html_inter, index_html_space_grotesk, index_html_jetbrains_mono [EXTRACTED 1.00]
- **SPA Shell Concept** — index_html_root_div, index_html_main_tsx, index_html_spa_entry_point [INFERRED 0.85]
- **Full Stack Development Stack at Import-Quivenza LTA** — public_cv_franklin_joel_sasig_full_stack_developer_intern_import_quivenza_lta, public_cv_franklin_joel_sasig_python, public_cv_franklin_joel_sasig_fastapi, public_cv_franklin_joel_sasig_postgresql, public_cv_franklin_joel_sasig_next_js, public_cv_franklin_joel_sasig_jwt, public_cv_franklin_joel_sasig_docker, public_cv_franklin_joel_sasig_swagger_openapi, public_cv_franklin_joel_sasig_pytest [EXTRACTED 1.00]
- **Mobile CI/CD Pipeline at ESPE** — public_cv_franklin_joel_sasig_mobile_developer_universidad_fuerzas_armadas_espe, public_cv_franklin_joel_sasig_flutter, public_cv_franklin_joel_sasig_github_actions, public_cv_franklin_joel_sasig_firebase, public_cv_franklin_joel_sasig_github [EXTRACTED 1.00]
- **Cloud Authentication Stack** — public_cv_franklin_joel_sasig_cloud_integration_developer_self_employed, public_cv_franklin_joel_sasig_aws_amplify, public_cv_franklin_joel_sasig_amazon_cognito [EXTRACTED 1.00]

## Communities (15 total, 3 thin omitted)

### Community 0 - "Professional Profile & CV"
Cohesion: 0.07
Nodes (41): Agile/Kanban/Scrum, Amazon Cognito, AWS Amplify, CI/CD, Cloud Integration Developer | Self-Employed, Dart, Docker, Egresado – Ingeniería de Software | Universidad de las Fuerzas Armadas – ESPE (+33 more)

### Community 1 - "React UI Components"
Cohesion: 0.12
Nodes (21): App(), About(), Contact(), Hero(), Line, Terminal(), Iridescence(), IridescenceProps (+13 more)

### Community 2 - "Linting Tooling"
Cohesion: 0.08
Nodes (25): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals, devDependencies, eslint (+17 more)

### Community 3 - "App TypeScript Config"
Cohesion: 0.08
Nodes (23): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+15 more)

### Community 4 - "Runtime Dependencies"
Cohesion: 0.10
Nodes (20): ogl, dependencies, ogl, react, react-dom, react-pdf, name, private (+12 more)

### Community 5 - "Node TypeScript Config"
Cohesion: 0.10
Nodes (19): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+11 more)

### Community 6 - "Deployment Pipeline"
Cohesion: 0.29
Nodes (11): build Job, CI/CD Pipeline, deploy Job, Deploy to GitHub Pages Workflow, GitHub Pages, Node.js, npm, ubuntu-latest (+3 more)

### Community 7 - "i18n Translation Layer"
Cohesion: 0.40
Nodes (5): LanguageContextValue, Language, ProjectItem, Translations, WorkItem

### Community 8 - "Web Fonts"
Cohesion: 1.00
Nodes (4): Google Fonts, Inter Font, JetBrains Mono Font, Space Grotesk Font

## Knowledge Gaps
- **84 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+79 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Linting Tooling` to `Runtime Dependencies`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _84 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Professional Profile & CV` be split into smaller, more focused modules?**
  _Cohesion score 0.07317073170731707 - nodes in this community are weakly interconnected._
- **Should `React UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.12312312312312312 - nodes in this community are weakly interconnected._
- **Should `Linting Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `App TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._