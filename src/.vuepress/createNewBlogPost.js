const fs = require("fs")
const moment = require("moment")
const slugify = require("slugify")
const title = process.argv.slice(2)[0]
const slug = slugify(title, { lower: true })

fs.writeFile(
  `src/_posts/${moment().format("YYYY-MM-DD")}-${slug}.md`,
  `---
title: ${title}
pemalink: ${slug}
date: ${moment().format("YYYY-MM-DD HH:MM:SS")}
type: post
excerpt:
tags:
  - Static
---

  `,
  function(err) {
    if (err) throw err
    console.log("File is created successfully.")
    console.log(title, slug)
  }
)
