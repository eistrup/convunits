## convunits
Multi-language Unit-Converter Library.

Implemented with language-agnostic unit & quantity definitions to allow implementation of the library in different languages. Supports conversion between units of the same (physical) quantity and supports different symbols for one same unit as long as all symbols are unique. Option to generate conversion expression as a SQL-compatible string.

The Typescript version is contained in the "ts" directory and published to https://www.npmjs.com/package/convunits

The Python version is contained in the "py" directory and published in https://pypi.org/project/convunits

# Notes

The initial work was an extended version of the publicly available npm package https://www.npmjs.com/package/convert-units. At the time the goal was to quickly add some missing units in the existing quantities and, for example, added the "resistivity", the "slowness", the "pressureGradient" and the "volumeFlowRate" quantities.

Later, we rewrote the library to have the feature of recognizing a unit by its standard representation (unit key) but also by its non-standard representations (unit symbols), which can be added easily - in one place only, this library. This allows for multiple symbols to be recognized as one unit only ("feet", "foot", "ft" or "Ft" all are the same unit). In this rewrite we also updated the tests to run them on build, guaranteeing aswell there are no duplicate occurrences of same symbol.

Now, as the main feature, the unit definitions were extracted to JSON files, outside the code. This allows for the plugging in of a library in any other language, besides the original typescript in /ts directory. That was already done in python (see /py directory).