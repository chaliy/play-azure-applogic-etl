.PHONY: apply

apply:
	azure group deployment create -m complete -f template.json -e template.parameters.json play-azure-applogic-etl default

show:
	azure group deployment show play-azure-applogic-etl

destroy:
	azure group deployment create -m complete -f purge.json play-azure-applogic-etl default
