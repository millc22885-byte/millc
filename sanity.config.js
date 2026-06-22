"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "millcautos",
  title: "MillC",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Cars")
              .schemaType("car")
              .child(S.documentTypeList("car").title("Cars")),
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .schemaType("blogPost")
              .child(S.documentTypeList("blogPost").title("Blog Posts")),
            S.listItem()
              .title("Reviews")
              .schemaType("review")
              .child(S.documentTypeList("review").title("Reviews")),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
