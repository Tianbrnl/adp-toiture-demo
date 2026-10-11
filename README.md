# ADP Toiture SA — Démonstration Web Interactive

Une reproduction moderne, interactive et fidèle de la maquette du site web pour **ADP Toiture SA**, entreprise spécialisée en ferblanterie, couverture et étanchéité basée à Genève, Suisse.

---

## 🌟 Points Forts & Fonctionnalités

- **Identité Visuelle & Typographie Suisse** : Palette fidèle (Rouge `#E52320`, Blanc, Anthracite `#13161C`), typographie soignée *Inter*, espacements précis et micro-animations.
- **Photographies Architecturales Haute Définition** :
  - **Hero** : Artisan ferblantier façonnant du zinc avec vue sur le Jet d'eau de Genève et les montagnes.
  - **Services** : Couverture (tuiles terre cuite), Ferblanterie (chéneaux & zinc), Étanchéité (bitume au chalumeau), Fabrication sur mesure (pliage numérique en atelier).
  - **Entreprise** : Photo d'équipe en polo corporate devant le fourgon floqué ADP Toiture dans l'atelier genevois.
  - **Réalisations** : 4 projets géolocalisés à Genève (Entretien, Étanchéité terrasse, Rénovation mansarde, Habillage cuivre).
- **Navigation & Défilement Fluide** : En-tête fixe avec numéro direct `078 760 96 36`, bouton CTA devis, défilement vers chaque section et menu tiroir mobile responsive.
- **Modales Interactives Accessibles** : Fenêtres de détail pour chaque service et projet avec spécifications techniques et options.
- **Formulaire de Devis Interactif** :
  - Sélection des prestations et du type de bâtiment.
  - Validation des champs requis côté client en temps réel.
  - Écran de confirmation interactif (conforme aux contraintes de démonstration sans prétendre transmettre un e-mail réel).
- **Logos Partenaires Vectoriels Purs** : Implenia, Losinger Marazzi, Racines Carrées, De Gand Paysage, M Étanchéité Sàrl.

---

## 🛠️ Stack Technique

- **React 19**
- **Vite 8**
- **Lucide React** (icônes vectorielles légères et modernes)
- **Vanilla CSS3** (Design system complet, sans dépendance superflue)

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez ensuite votre navigateur sur [http://localhost:5173/](http://localhost:5173/).

### 3. Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

### 4. Prévisualiser le build de production
```bash
npm run preview
```

---

## 🌐 Déploiement

Le projet est une application statique (SPA) sans backend requis. Elle peut être déployée instantanément sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Glisser-déposer le dossier `dist/` ou `netlify deploy --prod`
- **GitHub Pages** : Déploiement automatique via GitHub Actions sur la branche `gh-pages`
- **Firebase Hosting** : `firebase deploy --only hosting`

---

## 📄 Mentions & Crédits
Conçu comme une démonstration commerciale pour **ADP Toiture SA** (Genève, Suisse).
