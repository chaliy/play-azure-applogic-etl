.PHONY: apply, dump

RESOURCE_GROUP=play-azure-applogic-etl

gen:
	yaml2json template.yml > azuredeploy.gen.json

apply: gen
	azure group deployment create -q -m complete -f azuredeploy.gen.json -e azuredeploy.parameters.json $(RESOURCE_GROUP) default

show:
	azure group deployment show $(RESOURCE_GROUP)

list:
	azure group deployment list $(RESOURCE_GROUP)

destroy:
	azure group deployment create -m complete -f purge.json $(RESOURCE_GROUP) default

dump:
	azure group export $(RESOURCE_GROUP) dump
