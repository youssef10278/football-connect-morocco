#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification pré-déploiement...\n');

const checks = [
  {
    name: 'package.json existe',
    check: () => fs.existsSync('package.json'),
    fix: 'Créer un package.json valide'
  },
  {
    name: 'next.config.js configuré',
    check: () => fs.existsSync('next.config.js'),
    fix: 'Créer next.config.js'
  },
  {
    name: 'Scripts de build présents',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.scripts && pkg.scripts.build && pkg.scripts.start;
    },
    fix: 'Ajouter scripts "build" et "start" dans package.json'
  },
  {
    name: 'Dossier .next absent (build propre)',
    check: () => !fs.existsSync('.next'),
    fix: 'Supprimer le dossier .next: rm -rf .next'
  },
  {
    name: 'Dossier node_modules présent',
    check: () => fs.existsSync('node_modules'),
    fix: 'Installer les dépendances: npm install'
  },
  {
    name: 'TypeScript configuré',
    check: () => fs.existsSync('tsconfig.json'),
    fix: 'Créer tsconfig.json'
  },
  {
    name: 'Tailwind configuré',
    check: () => fs.existsSync('tailwind.config.js'),
    fix: 'Créer tailwind.config.js'
  }
];

let allPassed = true;

checks.forEach(({ name, check, fix }) => {
  const passed = check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${name}`);
  
  if (!passed) {
    console.log(`   💡 Solution: ${fix}`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 Toutes les vérifications sont passées !');
  console.log('🚀 Prêt pour le déploiement sur Railway');
  console.log('\nCommandes suivantes:');
  console.log('1. npm run build (pour tester)');
  console.log('2. git add .');
  console.log('3. git commit -m "Ready for Railway deployment"');
  console.log('4. git push origin main');
} else {
  console.log('⚠️  Certaines vérifications ont échoué');
  console.log('🔧 Corrigez les problèmes ci-dessus avant le déploiement');
  process.exit(1);
}

console.log('\n📚 Documentation: voir DEPLOYMENT.md');
