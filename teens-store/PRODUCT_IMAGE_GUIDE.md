# Product image replacement guide

The supplied brief listed eight filenames, but those image files were not available to inspect or copy into this project at build time. The current files are illustrative SVG placeholders.

Replace these paths with real, approved cap photography:

- `public/products/cap-01.svg` — The Essential — Black
- `public/products/cap-02.svg` — The Stone Six-Panel
- `public/products/cap-03.svg` — The Core Snapback
- `public/products/cap-04.svg` — The Weekend Dad Cap
- `public/products/cap-05.svg` — The Studio Trucker

Recommended mapping once the real images are uploaded:

- Five main product images, one for each real cap.
- Three additional gallery/detail images distributed across the relevant products (front/side/back/detail), after confirming which cap each photo represents.

Update `lib/products.ts` image paths and each product's verified name, price, SKU, description, colour, material, fit, closure, stock, and category. Do not map an image to a cap unless the photo actually depicts that product. Use descriptive alt text and provide compressed AVIF/WebP variants for production.
