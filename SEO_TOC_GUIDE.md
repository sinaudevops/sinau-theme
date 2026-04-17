# SEO & Table of Contents Guide

This guide explains how to manage SEO metatags and the Table of Contents (ToC) for your articles.

## 1. Search Engine Optimization (SEO)

The theme automatically generates Social Meta Tags (Open Graph for WhatsApp/Facebook/LinkedIn and Twitter Cards) and Canonical URLs.

### How to optimize your post preview:
1.  **Description:** Use the `description` parameter in the Front Matter for a custom search result snippet. If empty, Hugo will use the first few sentences as a summary.
2.  **Images:** The theme natively supports **Leaf Bundles**. To set a preview image, simply name your image `featured.jpg` (or similar) inside the post folder. Hugo's internal templates will automatically pick up images from the Page Resources.
3.  **Canonical URL:** Automatically generated based on your site's baseURL and page slug to prevent duplicate content issues.

Example Front Matter:
```yaml
description: "A deep dive into setting up Nginx as a reverse proxy."
image: "featured.jpg"
```

## 2. Table of Contents (ToC)

The ToC is smart and responsive. It helps readers navigate long technical articles.

### Automatic Visibility:
- **Default:** ToC is hidden for short posts. It only appears if the article has **more than 400 words**.
- **Manual Show:** To force show the ToC, add `toc: true` to the Front Matter.
- **Manual Hide:** To force hide the ToC (even if > 400 words), add `toc: false`.

### ToC Configuration:
- The ToC only captures **H2** and **H3** headings to keep the list clean.
- Ensure your headings follow a logical hierarchy (H2 for main sections, H3 for sub-sections).

Example Front Matter:
```yaml
toc: true # Force show the Table of Contents
```

## Tips for Better SEO
- Always use descriptive titles and alt texts for images.
- Keep your descriptions between 150-160 characters.
- Ensure your technical notes have enough content (Word Count) to trigger the ToC, as it also helps Search Engines understand your document structure.
