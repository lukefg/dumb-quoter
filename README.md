# Dumb Quoter

*Replace smart quotes with dumb ones, plus other formatting simplifications.*

This simple package contains a single function that replaces smart quotes and other Unicode punctuation with simplified "dumb" versions.

If text is highlighted, changes are only made to the selected portion. Otherwise, the entire document is changed.

Originally for [Pixelberry Studios](http://www.pixelberrystudios.com/) content writers. Modeled after [smart-quotes-plus](https://github.com/blakegarretson/smart-quotes-plus).

#### Current Replacements
Input|Character Name|Unicode|Output
:-------:|:-------:|:-------:|:------:
`“` or `”`|double quote|U201C, U201D|`"`
`‘` or `’`|single quote|U2018, U2019|`'`
`…`|horizontal ellipsis|U2026|`...`
`–`|en dash|U2013|`-`
`—`|em dash|U2014|`--`

#### Example
![Example of package in action](https://raw.githubusercontent.com/lukefg/dumb-quoter/master/screenshots/screenshot.png)
