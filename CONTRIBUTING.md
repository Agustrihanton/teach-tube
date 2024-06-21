# Contributing

Everyone is welcome to collaborate on this project, but please consider the following:

- Resources must be relevant to the project's goals.
- Resources should not be duplicated; a text search in the README file should be sufficient to find this answer.
- The list of resources is written in TypeScript; if you need help with this, please open an issue with the resource information.

## Adding Resources

- Resources are organized alphabetically in separate files in the `resources` folder; use the resource's `name` property to determine the appropriate file.
- In that file, maintain alphabetical order, again based on the resource's `name` property.

### Resource Format

Each resource is entered into an object, as follows:

```typescript
// resources/f.ts
 {
    name: "A deep dive into optimizing LCP",
    categories: ["Core Web Vitals", "Web Development", "Frontend Development"],
    keywords: ["optimize Web", "lcp", "tips"],
    description:
      "There is no shortage of advice on the web about improving page load performance, and yet, of the three Core Web Vitals, Largest Contentful Paint (LCP) is still the hardest metric for most sites to consistently meet the recommended 'good' threshold. ",
    url: "https://www.youtube.com/watch?v=fWoI9DXmpdk",
  },
```

Note that:

- `name` is a **string** and **required**.
- `description` is a **string** and **required**.
- `categories` is an **array of strings** and **required**.
- `url` is the **YouTube URL** and **required**.
- `keywords` is an **array of strings** and **optional**.
  - A resource can belong to a maximum of 3 categories and a minimum of 1 category.
  - Use `keywords` to enhance visibility in search results.
  - Available categories are listed in `types/category.ts`.
  - If the category you need is not listed, you can add it and explain in the PR why it is needed.
  - If your editor supports TypeScript, it should suggest available categories as you type.

## Editing Resources

If you find that an existing resource can be improved with some edits, feel free to make modifications.

## Other Contributions

Contributions not related to resources are also accepted, but please open an issue explaining the changes you have in mind before making a pull request.

## Updating README and DB

Please only change the files in the `resources` folder, as I will manually update the `README` and `DB` when merging requests.

## Need Help?

The list of resources is created in TypeScript, and if you are unable to contribute for this or any other reason, feel free to open an issue explaining your situation, so other developers can help you add your resource to the list.

---

## Thank you for contributing
