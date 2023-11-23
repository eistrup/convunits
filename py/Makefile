PROJECT_NAME := convunits

.PHONY: help test lint unit_test

.SILENT help:
	echo "Entry points for ${PROJECT_NAME} project: \n"
	echo " - lint : Run a linter check on a project codebase"
	echo " - unit_test : Run project unit tests"
	echo " - test : Run linter and tests"

test: lint unit_test

lint:
	pylint convunits
	pytype --config pytype.cfg

unit_test:
	pytest -s tests
