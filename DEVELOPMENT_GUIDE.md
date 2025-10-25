# 👨‍💻 GUIDE DE DÉVELOPPEMENT

## 🎯 AVANT DE COMMENCER

### Prérequis
- Node.js 18+ (LTS)
- npm ou yarn
- Git
- VS Code (recommandé)
- Connaissance Next.js 14
- Connaissance React 18
- Connaissance TypeScript

### Extensions VS Code
```
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)
```

---

## 🚀 SETUP INITIAL

### 1. Cloner et installer
```bash
git clone <repo>
cd 29-prototype-football-player-coaches-connexion
npm install
```

### 2. Créer branche feature
```bash
git checkout -b feature/ma-feature
```

### 3. Lancer dev server
```bash
npm run dev
# http://localhost:3000
```

### 4. Ouvrir dans VS Code
```bash
code .
```

---

## 📝 CONVENTIONS DE CODE

### Nommage
```typescript
// Composants: PascalCase
export function PremiumField() { }

// Fonctions: camelCase
function handlePositionClick() { }

// Constantes: UPPER_SNAKE_CASE
const POSITIONS = ['GK', 'CB', 'LB'];

// Types: PascalCase
type Player = { id: string; name: string };

// Fichiers: kebab-case
premium-field.tsx
coach-header.tsx
```

### Imports
```typescript
// Ordre: React → Next → Libs → Local
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { PremiumField } from '@/components/premium-field';
```

### Exports
```typescript
// Préférer named exports
export function MyComponent() { }

// Ou default pour pages
export default function Page() { }
```

---

## 🧩 CRÉER UN COMPOSANT

### Structure
```typescript
// components/my-component.tsx
'use client'; // Si interactif

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  const [state, setState] = useState(false);

  return (
    <div className={cn('p-4', state && 'bg-red-500')}>
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

### Avec Tailwind
```typescript
// Utiliser cn() pour fusionner classes
className={cn(
  'p-4 rounded-lg',
  isActive && 'bg-red-500',
  size === 'lg' && 'p-8'
)}
```

### Avec TypeScript
```typescript
// Toujours typer les props
interface Props {
  id: string;
  name: string;
  age?: number;
  onClick: (id: string) => void;
}

export function Component({ id, name, age, onClick }: Props) {
  // ...
}
```

---

## 📄 CRÉER UNE PAGE

### Structure
```typescript
// app/coach/my-page/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/my-endpoint');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>My Page</h1>
      {/* Content */}
    </div>
  );
}
```

---

## 🔌 CRÉER UN API ENDPOINT

### GET endpoint
```typescript
// app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    // Logique
    const data = { query };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

### POST endpoint
```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Logique
    const result = { success: true, data: body };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

---

## 🧪 TESTER LOCALEMENT

### Tester API avec curl
```bash
# GET
curl http://localhost:3000/api/players

# GET avec params
curl "http://localhost:3000/api/players?position=ST&limit=5"

# POST
curl -X POST http://localhost:3000/api/like \
  -H "Content-Type: application/json" \
  -d '{"videoId":"v-1","coachUserId":"c-1"}'
```

### Tester avec Thunder Client
1. Ouvrir Thunder Client (VS Code)
2. Créer nouvelle requête
3. Entrer URL: http://localhost:3000/api/...
4. Cliquer Send

### Tester composant
```typescript
// Créer fichier test
// components/__tests__/my-component.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../my-component';

describe('MyComponent', () => {
  it('renders title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

---

## 🔄 WORKFLOW GIT

### Créer feature
```bash
git checkout -b feature/add-messaging
```

### Commit régulièrement
```bash
git add .
git commit -m "feat: add messaging component"
```

### Messages commit
```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

### Push et PR
```bash
git push origin feature/add-messaging
# Créer PR sur GitHub
```

---

## 🐛 DEBUGGING

### Console logs
```typescript
console.log('Debug:', data);
console.error('Error:', error);
console.warn('Warning:', warning);
```

### DevTools
```
F12 → Console tab
F12 → Network tab (voir API calls)
F12 → Elements tab (inspecter DOM)
```

### React DevTools
```
Installer extension React DevTools
Voir component tree
Voir props/state
```

### Breakpoints
```typescript
// Ajouter debugger
debugger;

// Puis F12 → Sources tab
// Exécution s'arrête au breakpoint
```

---

## 📦 AJOUTER DÉPENDANCE

### npm
```bash
npm install package-name
npm install --save-dev package-name
npm uninstall package-name
```

### Exemple: Ajouter Zod
```bash
npm install zod
```

### Utiliser
```typescript
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  age: z.number().min(0)
});

const data = schema.parse({ name: 'John', age: 25 });
```

---

## 🎨 AJOUTER STYLE

### Tailwind classes
```typescript
<div className="p-4 bg-red-500 rounded-lg hover:bg-red-600">
  Content
</div>
```

### Custom CSS
```css
/* app/globals.css */
@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
  }
}
```

### Utiliser custom class
```typescript
<button className="btn-custom">Click me</button>
```

---

## 🚀 DÉPLOYER

### Build local
```bash
npm run build
npm run start
```

### Déployer sur Vercel
```bash
# 1. Push sur GitHub
git push origin main

# 2. Vercel build automatiquement
# 3. Déploiement en ~2 minutes
```

---

## ✅ CHECKLIST AVANT COMMIT

- [ ] Code formaté (Prettier)
- [ ] Pas de console.log() de debug
- [ ] Types TypeScript corrects
- [ ] Pas d'erreurs ESLint
- [ ] Tests passent
- [ ] Responsive design testé
- [ ] Pas de breaking changes
- [ ] Documentation mise à jour

---

## 📚 RESSOURCES

### Documentation
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TailwindCSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### Tutoriels
- Next.js App Router: https://nextjs.org/learn
- React Hooks: https://react.dev/reference/react
- TailwindCSS: https://tailwindcss.com/docs/installation

---

## 🆘 BESOIN D'AIDE ?

1. Lire la documentation
2. Chercher dans le code existant
3. Consulter les commentaires
4. Utiliser DevTools
5. Demander à l'équipe

---

**Bon développement ! 🚀**

