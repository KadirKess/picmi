# SEO — Recommandations pour Pic'mi

## 1. Balises meta & Open Graph

- **Ajouter `og:title`, `og:description`, `og:image`** sur toutes les pages (actuellement absentes).
- **`og:image`** : créer une image 1200×630px avec le logo Pic'mi et une accroche visuelle forte.
- **`twitter:card`** : ajouter `summary_large_image` pour un meilleur rendu sur X/Twitter.
- **`canonical`** : ajouter des balises `<link rel="canonical">` sur chaque page pour éviter le contenu dupliqué.

```tsx
// À ajouter dans chaque page (Next.js Metadata API)
export const metadata: Metadata = {
  openGraph: {
    title: "Pic'mi — Location Photobooth Île-de-France",
    description: "...",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://picmi.fr/particuliers" },
}
```

---

## 2. Données structurées (Schema.org)

Ajouter du JSON-LD sur les pages clés pour améliorer le rich snippet Google :

- **`LocalBusiness`** sur la home :
  - `name`, `address` (88 rue Pierre Brossolette, 92250 La Garenne-Colombes), `telephone`, `email`, `areaServed: "Île-de-France"`, `url`, `logo`
- **`Service`** sur `/particuliers` et `/professionnels`
- **`FAQPage`** sur les sections FAQ (déjà présentes, à marquer en JSON-LD)
- **`PriceSpecification`** dans le simulateur de prix

---

## 3. Optimisation des titres et descriptions

| Page | Title actuel | Title recommandé |
|------|--------------|------------------|
| Home | — | `Pic'mi — Location Photobooth & Borne Photo Île-de-France` |
| /particuliers | Pic'mi - Particuliers & Entreprises | `Location Photobooth Mariage & Anniversaire — Pic'mi` |
| /professionnels | Pic'mi - Professionnels & Associations | `Photobooth en Partenariat pour Bars, Clubs & Festivals — Pic'mi` |
| /contact | Pic'mi - Nous Contacter | `Contactez Pic'mi — Devis & Réservation Photobooth` |

---

## 4. Mots-clés à cibler

**Principaux (fort volume) :**

- location photobooth Île-de-France
- location borne photo mariage
- photobooth anniversaire Paris

**Longue traîne (conversion élevée) :**

- location photobooth mariage Île-de-France prix
- borne photo selfie événement entreprise
- photobooth sans animateur autonome
- location photobooth bar club Paris

**À intégrer dans les H2/H3 et paragraphes** des pages `/particuliers` et `/professionnels`.

---

## 5. Contenu manquant

- **Page d'accueil (`/`)** : ajouter un bloc texte avec les mots-clés principaux (actuellement très visuel, peu de texte indexable).
- **Alt text des images** : vérifier que toutes les `<Image>` ont un `alt` descriptif (pas juste "photo").
- **Créer un blog** ou section "Conseils" : articles sur "comment choisir son photobooth", "idées animations mariage", etc. Contenu long = meilleur classement.
- **Témoignages** : ajouter les noms complets et entreprises pour crédibilité E-E-A-T.

---

## 6. Performance technique

- **Google PageSpeed** : vérifier le score (objectif > 90 mobile). Points d'attention :
  - Passer les images `.svg` du hero en `next/image` avec `priority`
  - Limiter les animations CSS sur mobile
- **`robots.txt`** : créer `/public/robots.txt` avec `Sitemap: https://picmi.fr/sitemap.xml`
- **Sitemap XML** : générer `/sitemap.xml` automatiquement via Next.js (`app/sitemap.ts`)

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://picmi.fr', lastModified: new Date() },
    { url: 'https://picmi.fr/particuliers', lastModified: new Date() },
    { url: 'https://picmi.fr/professionnels', lastModified: new Date() },
    { url: 'https://picmi.fr/contact', lastModified: new Date() },
  ]
}
```

---

## 7. Google Business Profile

- Créer/revendiquer la fiche **Google My Business** pour Pic'mi / Jouzosesa.
- Ajouter : adresse, zone d'intervention (Île-de-France), catégorie "Location de matériel de fête", photos, horaires.
- Encourager les clients satisfaits à laisser un avis Google (fort impact local SEO).

---

## 8. Maillage interne

- Sur la home, ajouter des liens textuels vers `/particuliers` et `/professionnels` avec des ancres descriptives (ex: "louer un photobooth pour votre mariage").
- Lier les pages entre elles dans les sections FAQ (ex: "Vous êtes un professionnel ? Voir notre offre partenaires →").

---

## 9. Backlinks

- Contacter des **blogs mariage** et **sites d'annuaires événementiels** (Mariages.net, The Wedding Corner, etc.) pour obtenir des liens entrants.
- S&apos;inscrire sur les annuaires locaux IDF : PagesJaunes, Yelp, Hotfrog.
- Créer des partenariats avec des traiteurs / photographes et s&apos;échanger des liens.
