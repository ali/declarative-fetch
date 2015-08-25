#
# Vars
#

BIN=node_modules/.bin/
.DEFAULT_GOAL := all

#
# Tasks
#

validate:
	@${BIN}/standard

all: validate

.PHONY: standard all validate