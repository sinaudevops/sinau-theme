# SVG Icon Management System

This theme uses an optimized, inline SVG system powered by **Hugo Pipes**. This approach ensures fast performance by avoiding extra HTTP requests and allowing full control over icon colors via CSS.

## 1. How to Add New Icons

1. Find an SVG icon (e.g., from [Tabler Icons](https://tabler.io/icons)).
2. Save the `.svg` file in the directory: `assets/icons/`.
3. Ensure the SVG has `stroke="currentColor"` or `fill="currentColor"` so it can be styled with CSS.
4. Recommended: Remove hardcoded `width` and `height` from the SVG file, or set them to `24`, as they will be overridden by CSS.

## 2. Usage in Templates (HTML)

Use the `icon.html` partial to render an icon. You must pass a dictionary with at least the `name` (the filename without `.svg`).

```html
{{ partial "icon.html" (dict "name" "brand-github" "class" "my-custom-class") }}
```

### Parameters:
- `name` (required): The filename in `assets/icons/`.
- `class` (optional): CSS classes to be injected into the `<svg>` tag.

## 3. Usage in Content (Markdown)

You can use the `icon` shortcode directly inside your `.md` files:

```markdown
Here is a mail icon: {{< icon name="mail" class="text-blue" >}}
```

### Shortcode Parameters:
- `name` (or positional 0): The icon name.
- `class`: Optional CSS class.

## 4. CSS Styling Tips

Since the icons are rendered inline, you can use standard CSS to control their appearance:

```css
.my-icon {
  width: 24px;
  height: 24px;
  color: #5AA9E6; /* Change stroke/fill color */
  stroke-width: 1.5; /* Change thickness of stroke icons */
}
```

By default, the partial minifies the SVG code to keep your HTML output clean and light.
