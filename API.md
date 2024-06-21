# API

The folder includes two files:

`categories.json` - A list of all categories

`resources.json` - A list of all resources

You can then use [Octokit](https://github.com/octokit) to fetch the data from the `db` folder.

Here's a minimal snippet on how to accomplish that:

```ts
import { Octokit } from "octokit";
async function fetchResources(file: string) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
  });

  const { data } = await octokit.rest.repos.getContent({
    owner: "Agustrihanton",
    repo: "teach-tube",
    path: `/db/${file}.json`,
  });

  if (!Array.isArray(data) && data.type === "file" && data.download_url) {
    const result = await fetch(data.download_url);

    if (!result.ok) {
      throw new Error(`Unexpected response ${result.statusText}`);
    }

    const jsonResponse = await result.json();

    return jsonResponse;
  }
  throw new Error("File not found or invalid file type");
}
```

The response will be an object with the following structure:

`categories.json`:

```ts
{
    "count": number,
    "data": [
        {
            "name": string,
            "slug": string
        }
    ]
}
```

`resources.json`:

```ts
{
    "count": number,
    "data": [
        {
            "name": string,
            "categories": [string],
            "description": string,
            "url": string,
            "keywords": [string]
        }
    ]
}
```
