[![Build Status](https://travis-ci.com/MusicalPatterns/metadata.svg?branch=master)](https://travis-ci.com/MusicalPatterns/metadata)

# Musical Patterns - Metadata

```
interface Presentable {
    description?: string,
    formattedName?: string,
    order?: number,
}

interface Metadata extends Presentable {
    mostRecentPublish: string,
    musicalIdeaIllustrated: string,
    originalPublish: string,
    version: string,
}
```

- `mostRecentPublish` and `version` are managed by the `@musical-patterns/cli` service when shipping the code.
- `originalPublish` is set by the `main` repo when running the `new.sh` pattern script.
- `musicalIdeaIllustrated` is a special subtitle for the pattern when displayed in the pattern list of the `@musical-patterns/playroom`.
- `description` is here used to store the HTML string for the post about the pattern which can be super long and contain images and links and all that jazz.
- `formattedName` allows you to specify exactly what you want to show up as the title of your pattern in the `@musical-patterns/playroom`. Otherwise, it will title case your pattern's Id.
- `order` allows you to override the default sorting of your pattern in the `@musical-patterns/playroom`'s pattern list. Any pattern with a provided order will come first, then the patterns are sorted by `originalPublish`.

