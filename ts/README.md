## "convunits" Typescript Unit-Converter Library

# Installation:

```
npm install convunits
```

# Usage

Import the Convert class and get a conversion result:
```
import { Convert } from 'convunits'
const result = new Convert(1).from('m').to('ft')
```
Then evaluate it to get the actual value:
```
console.log(result.evaluate()) // 3.28084
```
Or return .asString() to get the expression to be evaluated:
```
console.log(result.asString()) // "1*3.28084"
```

NOTE: this is an important feature because it generates SQL-compatible expressions of the conversion which allows to use it to generate SQL queries with unit conversion:
```
const sqlQuery = `SELECT length_in_source_unit * ${(new Convert(1).from(source_unit).to(target_unit)).asString()} AS length_in_target_unit FROM data;`
```
Where source_unit and target_unit are strings and existing symbols in the library.




list all quantities can be found in "Definitions"
```
import { Definitions } from 'convunits'
```

To retrieve the unit key (standard symbol) for any supported unit symbol use the method "findStandardUnit".
To retrieve the quantity for a given unit key (standard symbol) use the method "findQuantityBy".

```
import { findUnitStandard } from 'convunits'
import { findQuantityBy } from 'convunits'

const standardUnitSymbol = findUnitStandard('meter')
// standardUnitSymbol = 'm'
const quantity = findQuantityBy(standardUnitSymbol)
```

## Development

To test locally from development in the directory, build first:

```
npm install
npm run build
npm link convunits
```

Make sure you have ts-node installed, if not:
$ npm install -g ts-node

Test by playing around with the usage in tools/run.ts, then running it:

$ ts-node tools/run.ts




## Publish

Build the package:
$ npm run build

Login to npm (feistrup account):
$ npm login

Publish:
$ npm publish

## Release

If you want to release your changes in a new version:
Bump version in package.json, commit and tag it.

```
git add package.json
git commit -m "1.0.1"
git push origin main
```

Create a tag via command line or UI.

```
git tag -a v1.0.1 -m '1.0.1'
git push origin --tags
```

## Testing
Add the conversions you want to test in the respective .test.ts file inside /test/ directory
Run the unit tests as:
$ npm test

## JSON to TS definitions

We have script for automating the conversion of JSON to TS definitions.
One Typecript definition file will be generated in /ts/src/ts-definitions from each JSON file in /definitions:
$ npm run json-to-ts
This is integrated in the following command with formatting and tests:
$ npm run all

## Changing or adding new unit or quantity

For a new unit, go to the .json file of the quantity you are interested in.
Add the unit as an entry of the "units" attribute, respecting the format.
Add a test involving that unit in the unitttests.

For a new quantity, add the definition as .json file in /definitions directory, respecting the format.
Make sure to add the newly created quantity in definitions.ts imports and exported array.
Add tests involving that quantity as a separate test file, respecting the structure.

For rewriting concerned the definitions JSON files, use the migrateDifinitions.ts script in "/ts/tools/".
Adapt it accordingly with source and target directories plus necessary logic from and to those JSON strcutures.

Finally run:
$ npm run all
