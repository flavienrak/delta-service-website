# Delta Service — Site Web Officiel

Site web vitrine de **Delta Service**, une entreprise spécialisée dans la location d'engins de chantier, le transport et les solutions logistiques, basée à Niamey, au Niger.

**Votre mission, notre passion.**

Le projet vise à développer une présence digitale professionnelle permettant aux particuliers, entreprises du BTP et professionnels de découvrir les équipements disponibles, consulter les services proposés et effectuer des demandes de devis en ligne.

🌐 **Site web :** https://www.deltaservicesniger.com

📍 **Localisation :** Delta, Cité des Progrès, Niamey, Niger.

---

## Présentation du projet

Delta Service propose des solutions adaptées aux différents besoins des chantiers à travers plusieurs catégories d'équipements :

- Terrassement
- Élévation
- Bâtiment et manutention
- Transport et logistique

Le site web a pour objectif de faciliter l'accès aux services de l'entreprise, de valoriser sa flotte d'engins et de simplifier le processus de demande de location.

## Fonctionnalités principales

### 1. Page d'accueil

- Présentation de l'entreprise.
- Mise en avant des principaux services.
- Présentation des catégories d'engins.
- Mise en avant des équipements.
- Présentation des engagements et avantages.
- Appels à l'action pour les demandes de devis.

### 2. Catalogue des engins

- Consultation des équipements.
- Organisation par catégories.
- Recherche et filtrage des engins.
- Fiches détaillées des équipements.
- Accès direct à une demande de devis.

### 3. Services

Présentation des différentes prestations :

- Location d'engins de chantier.
- Terrassement.
- Élévation et travaux en hauteur.
- Manutention.
- Transport de matériaux.
- Évacuation des déblais.
- Solutions logistiques.

### 4. Demande de devis

Un parcours simplifié en plusieurs étapes :

1. Choix de la catégorie et de l'engin.
2. Indication de la localisation du chantier.
3. Renseignement des informations relatives au besoin.
4. Saisie des coordonnées du client.
5. Récapitulatif et transmission de la demande.

### 5. Présentation de l'entreprise

- Présentation de Delta Service.
- Valeurs et engagements.
- Qualité et fiabilité.
- Réactivité et sécurité.

### 6. Contact

- Coordonnées téléphoniques.
- Adresse et localisation.
- Liens vers les réseaux sociaux.
- Formulaire de contact.

---

## Identité visuelle

L'interface reprend l'identité graphique de Delta Service.

| Élément           | Couleur   |
| ----------------- | --------- |
| Noir profond      | `#080A08` |
| Jaune fluorescent | `#DFFF00` |
| Blanc             | `#FFFFFF` |
| Gris anthracite   | `#191C1B` |

**Direction artistique :**

- Design industriel et moderne.
- Photographies professionnelles d'engins de chantier.
- Typographie forte et lisible.
- Interface responsive.
- Animations et interactions discrètes.
- Expérience utilisateur orientée conversion.

## Technologies utilisées

- **Framework :** Next.js
- **Bibliothèque UI :** React
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **Composants UI :** shadcn/ui
- **Icônes :** Lucide React

## Installation et configuration

### Prérequis

- Node.js (version compatible avec la version de Next.js utilisée).
- npm.
- Git.

### 1. Cloner le projet

```bash
git clone <repository-url>
```

### 2. Accéder au répertoire

```bash
cd delta-service
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine du projet.

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Ajouter les autres variables nécessaires selon les services effectivement intégrés.

### 5. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir ensuite :

http://localhost:3000

### 6. Générer la version de production

```bash
npm run build
```

### 7. Démarrer en production

```bash
npm run start
```

---

## Structure du projet

Organisation indicative du code :

```text
delta-service/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── equipment/
│   │   └── services/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── equipment/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── data/
│   ├── lib/
│   ├── hooks/
│   └── types/
│
├── .env.example
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Informations de contact

**Delta Service**

- Téléphone : +227 90 38 09 09
- Service client : +227 98 06 06 26
- Site web : https://www.deltaservicesniger.com
- Adresse : Delta, Cité des Progrès, Niamey, Niger.

### Réseaux sociaux

- Facebook : https://www.facebook.com/people/Delta-Service/61570828987164/
- Instagram : À compléter.
- LinkedIn : À compléter.

---

## Statut du projet

🚧 Projet en cours de développement.

Les informations relatives aux équipements, aux caractéristiques techniques, aux tarifs et aux disponibilités devront être confirmées auprès de Delta Service avant leur publication.

---

## Licence

Tous droits réservés © Delta Service.

Les éléments de marque, logos, photographies et contenus associés à Delta Service restent la propriété de leurs détenteurs respectifs.
