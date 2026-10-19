# ePortfolio – Maxence Blanzat (CAM L3, ENSEEIHT)

Site statique (HTML + CSS, sans framework ni build) pour le module 1 du cours d'anglais CAM L3.
Le contenu du site est en anglais.

## Structure

```
eportfolio-cam-l3/
├── index.html        → Welcome
├── projects.html     → Engineering Courses (projets N7)
├── civic.html        → Civic Engagement
├── mobility.html     → Mobility
├── careers.html      → Careers (page évaluée : pitch, CVs, LinkedIn, role models, mobilités)
├── sports.html       → Sports and Interests
├── style.css         → feuille de style unique, partagée par toutes les pages
├── .nojekyll         → indique à GitHub Pages de servir les fichiers tels quels
└── assets/
    ├── img/          → photo de profil et images de projets
    └── cv/           → CV_EN.pdf et CV_FR.pdf
```

Pour voir le site en local : double-cliquer sur `index.html` (il s'ouvre dans le navigateur).

---

## 1. Déployer sur GitHub Pages (pas à pas)

### a) Créer le dépôt sur GitHub
1. Se connecter sur <https://github.com> (créer un compte si besoin).
2. Cliquer sur **+** (en haut à droite) → **New repository**.
3. Nom du dépôt : `eportfolio` (par exemple).
4. Visibilité : **Public** (obligatoire pour GitHub Pages avec un compte gratuit).
5. **Ne rien cocher** (pas de README, pas de .gitignore, pas de licence) : le projet en a déjà un.
6. Cliquer sur **Create repository**.

### b) Pousser le projet
Le dépôt git local est déjà initialisé avec un premier commit. Dans un terminal (PowerShell) :

```powershell
cd "$HOME\Desktop\eportfolio-cam-l3"
git remote add origin https://github.com/VOTRE-PSEUDO/eportfolio.git
git push -u origin main
```

Remplacer `VOTRE-PSEUDO` par votre nom d'utilisateur GitHub. La première fois, une fenêtre
de connexion GitHub s'ouvre (Git Credential Manager) : se connecter via le navigateur.

### c) Activer GitHub Pages
1. Sur la page du dépôt : **Settings** → **Pages** (menu de gauche).
2. Section **Build and deployment** → **Source** : `Deploy from a branch`.
3. **Branch** : `main`, dossier `/ (root)` → **Save**.
4. Attendre 1 à 2 minutes puis recharger la page : l'adresse du site s'affiche,
   du type `https://VOTRE-PSEUDO.github.io/eportfolio/`.

C'est ce lien qu'il faut déposer sur Moodle (avant le 1er novembre).

### d) Mettre à jour le site ensuite
Après chaque modification :

```powershell
cd "$HOME\Desktop\eportfolio-cam-l3"
git add .
git commit -m "Update careers page"
git push
```

Le site en ligne se met à jour automatiquement en 1 à 2 minutes.

---

## 2. Remplacer les placeholders

Tous les éléments à compléter apparaissent sur le site dans des **blocs jaunes en pointillés**
(classe CSS `todo`) commençant par `TODO:`. Pour les retrouver tous :

```powershell
Select-String -Path *.html -Pattern "TODO"
```

ou, dans VS Code : `Ctrl+Shift+F` → `TODO`.

Une fois un contenu rédigé, **supprimer entièrement le bloc** `<div class="todo">…</div>`
(ou `<span class="todo">…</span>`) et le remplacer par votre texte. Avant de rendre le
portfolio, il ne doit plus rester aucun bloc jaune.

### Photo de profil
- Mettre votre photo dans `assets/img/`, par ex. `assets/img/profile.jpg` (format carré, ~400×400 px).
- Dans `index.html`, remplacer `assets/img/profile.svg` par `assets/img/profile.jpg`.

### Images de projets
- Ajouter vos images dans `assets/img/` (ex. `projet-convertisseur.jpg`).
- Dans `projects.html`, les insérer dans la carte du projet concerné :
  `<img src="assets/img/projet-convertisseur.jpg" alt="Description de l'image">`

### CVs
- Remplacer `assets/cv/CV_EN.pdf` et `assets/cv/CV_FR.pdf` par vos vrais CVs,
  **en gardant exactement ces noms de fichiers** (les boutons pointent dessus).

### Vidéo Elevator Pitch (careers.html)
1. Mettre la vidéo en ligne sur YouTube avec la visibilité **Non répertoriée** (Unlisted).
2. Récupérer son identifiant : dans `https://www.youtube.com/watch?v=AbCdEf12345`, c'est `AbCdEf12345`.
3. Dans `careers.html`, remplacer `VIDEO_ID` dans l'URL de l'iframe :
   `https://www.youtube-nocookie.com/embed/AbCdEf12345`

### LinkedIn (careers.html)
- Remplacer `YOUR-PROFILE` (deux fois) par l'identifiant de votre profil
  (`https://www.linkedin.com/in/<identifiant>/`).
- Sur LinkedIn : *Profil → Ajouter un profil dans une autre langue* pour créer la version anglaise.

### Role models et projets de mobilité (careers.html)
- Les postes et entreprises des 3 role models (DGA, Thales, MBDA) sont des **suggestions**
  cohérentes avec votre projet : remplacez-les par les personnes réellement interviewées
  (My Job Glasses, alumni N7…).
- Chaque projet de mobilité est relié à un role model (`#mobility-1` ↔ `#role-model-1`, etc.).
  Si vous changez un role model, adaptez la carte de mobilité correspondante.
- Vérifier auprès du service des relations internationales de l'N7 les accords existants.

---

## 3. Rappel des livrables (Moodle, 1er novembre)

- [ ] CVs en anglais et en français
- [ ] LinkedIn en anglais et en français (optionnel mais recommandé)
- [ ] Vidéo elevator pitch 2–3 min en anglais : présent → passé (très bref) → futur,
      3 role models analysés, 3 projets de mobilité internationale alignés
