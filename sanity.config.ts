import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["siteSettings", "pageHome", "pageAbout", "pageServices"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton items
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem()
              .title("Home Page")
              .id("pageHome")
              .child(S.document().schemaType("pageHome").documentId("pageHome")),
            S.listItem()
              .title("About Page")
              .id("pageAbout")
              .child(S.document().schemaType("pageAbout").documentId("pageAbout")),
            S.listItem()
              .title("Services Page")
              .id("pageServices")
              .child(S.document().schemaType("pageServices").documentId("pageServices")),
            
            S.divider(),

            // Regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-05-12' }),
  ],
})
