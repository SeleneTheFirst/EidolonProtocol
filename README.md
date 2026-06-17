# Eidolon Protocol

A dependency-free quotation site for GitHub Pages.

## Editing quotations

Edit only `quotes.js`.

A quote may use one line:

```javascript
{
  lines: [
    "A one-line quotation."
  ]
}
```

Or several lines:

```javascript
{
  lines: [
    "First displayed line.",
    "Second displayed line."
  ]
}
```

Attribution is optional:

```javascript
{
  lines: [
    "A quotation with attribution."
  ],
  attribution: {
    author: "Author Name",
    source: "Source Title",
    year: "2026"
  }
}
```

Any attribution field may be omitted.

## Publish with GitHub Pages

1. Open repository **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`.
5. Save.
