.PHONY: build check_release release

build:
	npm run dev:build

check_version:
ifndef VERSION
	$(error VERSION is undefined)
endif

release:
	git flow release start $(VERSION)
	npm version $(VERSION)
	git add package.json package-lock.json
	git commit -m "Bump version to $(VERSION)"
	git flow release finish -m "Release $(VERSION)" $(VERSION) > /dev/null
