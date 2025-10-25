import Link from 'next/link';
import { Target } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Target className="w-16 h-16 text-morocco-red mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}