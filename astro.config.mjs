// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";

// https://astro.build/config
export default defineConfig({
  site: "https://christinetham.github.io/starlight-obsidian",
  integrations: [
    starlight({
      title: "My Docs",
      plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: "./vault",
        }),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        // Add the generated sidebar group to the sidebar.
        obsidianSidebarGroup,
      ],
    }),
  ],
});
