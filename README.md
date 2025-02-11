# 🎭 Allumee Show  

## 📌 Description  
Allumee Show est une application permettant de gérer un spectacle avec une liste de **scènes et transitions**.  
L'utilisateur peut :  
- Ajouter, modifier et supprimer des scènes  
- Gérer les transitions entre scènes  
- Modifier la durée des scènes et des transitions  
- Réorganiser les scènes par **Drag & Drop**  
- Sauvegarder et recharger les données  

Le projet est développé avec **Next.js**, **TypeScript**, **TailwindCSS** et **React Hooks**.  

---

## 🚀 Installation  

sh
git clone https://github.com/HTU9HTU9/allumee-show.git
cd allumee-show
npm install
npm run dev

➡️ Accéder à http://localhost:3000

---

## 🎮 Fonctionnalités  

### 🔹 Gestion des scènes  
- **Ajout de scènes** : possibilité d'ajouter de nouvelles scènes au spectacle.  
- **Modification des scènes** : changement du **nom** et de la **durée** d'une scène.  
- **Suppression des scènes** : suppression d'une scène avec mise à jour des transitions associées.  

### 🔹 Gestion des transitions  
- **Création automatique des transitions** : lorsqu'une nouvelle scène est ajoutée.  
- **Mise à jour dynamique des transitions** : si une scène est renommée ou supprimée.  
- **Modification des transitions** : possibilité de changer la durée d'une transition.  

### 🔹 Réorganisation des scènes  
- **Drag & Drop** : déplacement des scènes avec la souris.  
- **Mise à jour des transitions** après un réarrangement.  

### 🔹 Sauvegarde et récupération des données  
- **Sauvegarde automatique** : stockage des scènes et transitions dans `localStorage`.  
- **Chargement des données** : récupération des données sauvegardées ou chargement d'un exemple par défaut.  
- **Réinitialisation** : suppression des scènes et remise à zéro avec une scène par défaut.  

### 🔹 Calcul des durées  
- **Affichage de la durée totale du spectacle**.  
- **Affichage de la durée totale des scènes**.  
- **Affichage de la durée totale des transitions**.  
