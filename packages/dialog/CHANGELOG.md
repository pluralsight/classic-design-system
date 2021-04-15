# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [13.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@13.0.0...@pluralsight/ps-design-system-dialog@13.0.1) (2021-04-15)


### Bug Fixes

* **dialog:** properly order the conditional exports in package ([9b67438](https://github.com/pluralsight/design-system/commit/9b67438aa48666a7b27bf1ff2f541c6156612885))





# [13.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@12.0.0...@pluralsight/ps-design-system-dialog@13.0.0) (2021-04-14)


### Code Refactoring

* **dialog:** add exports to package.json as alternate entry point ([29f3adc](https://github.com/pluralsight/design-system/commit/29f3adc2e4cc701c18d822a392d36414b9d7390b))
* **dialog:** convert to esm ([09210c8](https://github.com/pluralsight/design-system/commit/09210c83f1c083b4b662233e7781253f5808d530))


### BREAKING CHANGES

* **dialog:** add exports to package.json
* **dialog:** Drop cjs; esm only; all in on tree shaking
* **dialog:** Remove file imports (eg, packageName/react)





# [12.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.7...@pluralsight/ps-design-system-dialog@12.0.0) (2021-04-05)


### flexibility

* remove base from color scale & add parseToRgb ([#1696](https://github.com/pluralsight/design-system/issues/1696)) ([b5abe62](https://github.com/pluralsight/design-system/commit/b5abe62c164f47cde093b6fce1381af2cb47e21e))


### BREAKING CHANGES

* update color.base usages to color[6]

* feat(core): remove colorsBackgroundUtility.base update parseToRgb()
* switch colorsBackgroundUtility.base usage to

* feat(core): adds colorsBackgroundUtilityCsv

* test(core): update snapshot





## [11.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.6...@pluralsight/ps-design-system-dialog@11.0.7) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [11.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.5...@pluralsight/ps-design-system-dialog@11.0.6) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [11.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.4...@pluralsight/ps-design-system-dialog@11.0.5) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [11.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.3...@pluralsight/ps-design-system-dialog@11.0.4) (2021-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [11.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.2...@pluralsight/ps-design-system-dialog@11.0.3) (2021-02-25)


### Bug Fixes

* **dialog:** update peerDep version ([0f482f3](https://github.com/pluralsight/design-system/commit/0f482f319dabafefa4f10f61a2cd82bc9dba577e))





## [11.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.1...@pluralsight/ps-design-system-dialog@11.0.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [11.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@11.0.0...@pluralsight/ps-design-system-dialog@11.0.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [11.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@10.1.0...@pluralsight/ps-design-system-dialog@11.0.0) (2021-02-16)


* new icon size and updated button (#1608) ([86a5acc](https://github.com/pluralsight/design-system/commit/86a5acc1be39c58dba78f3f563453b69ec851034)), closes [#1608](https://github.com/pluralsight/design-system/issues/1608)


### BREAKING CHANGES

* small is now xSmall please update your sizing

* refactor(docs): document additional icon size

* refactor(button): spacing tweaks to match designs

* test(button): update snapshots

Co-authored-by: Edward Irby <EdwardIrby@users.noreply.github.com>





# [10.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@10.0.3...@pluralsight/ps-design-system-dialog@10.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [10.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@10.0.2...@pluralsight/ps-design-system-dialog@10.0.3) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [10.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@10.0.1...@pluralsight/ps-design-system-dialog@10.0.2) (2021-02-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [10.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@10.0.0...@pluralsight/ps-design-system-dialog@10.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [10.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.17...@pluralsight/ps-design-system-dialog@10.0.0) (2021-01-25)


### Build System

* **dialog:** update to react@17 ([e23f796](https://github.com/pluralsight/design-system/commit/e23f79664e1655264446e8a1c15fe41c20a55237))


### BREAKING CHANGES

* **dialog:** react@17 peerDependency upgrade





## [9.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.16...@pluralsight/ps-design-system-dialog@9.0.17) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.15...@pluralsight/ps-design-system-dialog@9.0.16) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.14...@pluralsight/ps-design-system-dialog@9.0.15) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.13...@pluralsight/ps-design-system-dialog@9.0.14) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.12...@pluralsight/ps-design-system-dialog@9.0.13) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.11...@pluralsight/ps-design-system-dialog@9.0.12) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.10...@pluralsight/ps-design-system-dialog@9.0.11) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.9...@pluralsight/ps-design-system-dialog@9.0.10) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [9.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.8...@pluralsight/ps-design-system-dialog@9.0.9) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.7...@pluralsight/ps-design-system-dialog@9.0.8) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.6...@pluralsight/ps-design-system-dialog@9.0.7) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.5...@pluralsight/ps-design-system-dialog@9.0.6) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.4...@pluralsight/ps-design-system-dialog@9.0.5) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.3...@pluralsight/ps-design-system-dialog@9.0.4) (2020-11-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.2...@pluralsight/ps-design-system-dialog@9.0.3) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.1...@pluralsight/ps-design-system-dialog@9.0.2) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [9.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@9.0.0...@pluralsight/ps-design-system-dialog@9.0.1) (2020-11-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [9.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.7...@pluralsight/ps-design-system-dialog@9.0.0) (2020-11-13)


### Code Refactoring

* **dialog:** always render modal in a portal ([b9b5564](https://github.com/pluralsight/design-system/commit/b9b5564bf5dc92a8bad53ded3731ca2c3753bab2))


### BREAKING CHANGES

* **dialog:** Modal always renders in a portal. Made breaking change
since it's uncertain whether this change in layout will affect users
visually.





## [8.4.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.6...@pluralsight/ps-design-system-dialog@8.4.7) (2020-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.4.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.5...@pluralsight/ps-design-system-dialog@8.4.6) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.4.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.4...@pluralsight/ps-design-system-dialog@8.4.5) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.4.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.3...@pluralsight/ps-design-system-dialog@8.4.4) (2020-11-02)


### Bug Fixes

* **dialog:** bug with stylesFor lookup ([708e495](https://github.com/pluralsight/design-system/commit/708e495d05d26ae95f6c96abf8cbf29ea971c990))





## [8.4.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.2...@pluralsight/ps-design-system-dialog@8.4.3) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.4.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.1...@pluralsight/ps-design-system-dialog@8.4.2) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.4.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.4.0...@pluralsight/ps-design-system-dialog@8.4.1) (2020-10-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [8.4.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.3.2...@pluralsight/ps-design-system-dialog@8.4.0) (2020-10-26)


### Features

* requested pr changes ([35cc723](https://github.com/pluralsight/design-system/commit/35cc72391adac7b6c3586d3f20f4ba919a74c4ab))
* **dialog:** change extensions ([1ccdab8](https://github.com/pluralsight/design-system/commit/1ccdab8ffd402370051b17a6d99bcf69bff8a813))
* **dialog:** config updates ([bea3bc8](https://github.com/pluralsight/design-system/commit/bea3bc881ab408e9e1ce46b6a7e893e4a49a5030))
* **dialog:** ts conversion ([538adf2](https://github.com/pluralsight/design-system/commit/538adf2b77152be612372cc18b103a617d8af5af))
* **dialog:** ts conversion ([665b666](https://github.com/pluralsight/design-system/commit/665b666c54079c9af50f47720bb87281a46f41b5))





## [8.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.3.1...@pluralsight/ps-design-system-dialog@8.3.2) (2020-10-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.3.0...@pluralsight/ps-design-system-dialog@8.3.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [8.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.10...@pluralsight/ps-design-system-dialog@8.3.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.9...@pluralsight/ps-design-system-dialog@8.2.10) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.8...@pluralsight/ps-design-system-dialog@8.2.10) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.8...@pluralsight/ps-design-system-dialog@8.2.9) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.7...@pluralsight/ps-design-system-dialog@8.2.8) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.6...@pluralsight/ps-design-system-dialog@8.2.7) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.5...@pluralsight/ps-design-system-dialog@8.2.6) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.4...@pluralsight/ps-design-system-dialog@8.2.5) (2020-09-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.3...@pluralsight/ps-design-system-dialog@8.2.4) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.2...@pluralsight/ps-design-system-dialog@8.2.3) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.1...@pluralsight/ps-design-system-dialog@8.2.2) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.2.0...@pluralsight/ps-design-system-dialog@8.2.1) (2020-09-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [8.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.21...@pluralsight/ps-design-system-dialog@8.2.0) (2020-09-01)


### Features

* **dialog:** stylesFor dialog_content ([3a6cf94](https://github.com/pluralsight/design-system/commit/3a6cf94e2ddd95d66a53ac1945913f3f9c9cbd63))





## [8.1.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.20...@pluralsight/ps-design-system-dialog@8.1.21) (2020-08-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.19...@pluralsight/ps-design-system-dialog@8.1.20) (2020-08-25)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.18...@pluralsight/ps-design-system-dialog@8.1.19) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.17...@pluralsight/ps-design-system-dialog@8.1.18) (2020-08-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.16...@pluralsight/ps-design-system-dialog@8.1.17) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.15...@pluralsight/ps-design-system-dialog@8.1.16) (2020-08-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.14...@pluralsight/ps-design-system-dialog@8.1.15) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.13...@pluralsight/ps-design-system-dialog@8.1.14) (2020-06-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.12...@pluralsight/ps-design-system-dialog@8.1.13) (2020-05-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.11...@pluralsight/ps-design-system-dialog@8.1.12) (2020-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.10...@pluralsight/ps-design-system-dialog@8.1.11) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [8.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.9...@pluralsight/ps-design-system-dialog@8.1.10) (2020-05-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.8...@pluralsight/ps-design-system-dialog@8.1.9) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.7...@pluralsight/ps-design-system-dialog@8.1.8) (2020-05-05)


### Bug Fixes

* **dialog:** remove focus ring ([e366bfa](https://github.com/pluralsight/design-system/commit/e366bfa6fb69b9e2c6fb5913fdd88c028728a810))





## [8.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.6...@pluralsight/ps-design-system-dialog@8.1.7) (2020-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.5...@pluralsight/ps-design-system-dialog@8.1.6) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.4...@pluralsight/ps-design-system-dialog@8.1.5) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.3...@pluralsight/ps-design-system-dialog@8.1.4) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.3...@pluralsight/ps-design-system-dialog@8.1.4) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.2...@pluralsight/ps-design-system-dialog@8.1.3) (2020-04-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [8.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.1...@pluralsight/ps-design-system-dialog@8.1.2) (2020-03-27)


### Bug Fixes

* **core:** letter spacing values ([a1d14b3](https://github.com/pluralsight/design-system/commit/a1d14b3218b832848403198f8a9d9d7e53e2e763))





## [8.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.1.0...@pluralsight/ps-design-system-dialog@8.1.1) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [8.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.0.2...@pluralsight/ps-design-system-dialog@8.1.0) (2020-03-11)


### Features

* **dialog:** add optional returnFocus prop ([5936915](https://github.com/pluralsight/design-system/commit/593691565683f457148cad9e4fe3191cfd2aafbc))





## [8.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@8.0.1...@pluralsight/ps-design-system-dialog@8.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.1.2...@pluralsight/ps-design-system-dialog@8.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.1.1...@pluralsight/ps-design-system-dialog@7.1.2) (2020-02-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.1.0...@pluralsight/ps-design-system-dialog@7.1.1) (2020-02-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [7.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.33...@pluralsight/ps-design-system-dialog@7.1.0) (2020-02-18)


### Features

* **button:** removes featureFlags consumer and old styles ([88046f4](https://github.com/pluralsight/design-system/commit/88046f4768f5d78dfa8c6b31b2fd756e700626ef))
* **text:** removes featureFlags consumer and old styles ([5a2b7fc](https://github.com/pluralsight/design-system/commit/5a2b7fc05c1be6e0baa61ccc050e0c721d64ebea))





## [7.0.33](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.32...@pluralsight/ps-design-system-dialog@7.0.33) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.32](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.31...@pluralsight/ps-design-system-dialog@7.0.32) (2020-02-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.31](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.30...@pluralsight/ps-design-system-dialog@7.0.31) (2020-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.30](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.29...@pluralsight/ps-design-system-dialog@7.0.30) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.29](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.28...@pluralsight/ps-design-system-dialog@7.0.29) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.28](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.27...@pluralsight/ps-design-system-dialog@7.0.28) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.27](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.26...@pluralsight/ps-design-system-dialog@7.0.27) (2020-01-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.25...@pluralsight/ps-design-system-dialog@7.0.26) (2020-01-24)


### Bug Fixes

* **dialog:** allow tail to show with overflow ([b039154](https://github.com/pluralsight/design-system/commit/b039154a780dc0173ec6c0ad3f093f0e91d9f8ba))
* **dialog:** use forwarded ref ([d0419e0](https://github.com/pluralsight/design-system/commit/d0419e0263853736da9c44eb242356f590ad3630))





## [7.0.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.24...@pluralsight/ps-design-system-dialog@7.0.25) (2020-01-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.22...@pluralsight/ps-design-system-dialog@7.0.24) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.20...@pluralsight/ps-design-system-dialog@7.0.22) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.18...@pluralsight/ps-design-system-dialog@7.0.20) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.17...@pluralsight/ps-design-system-dialog@7.0.18) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.16...@pluralsight/ps-design-system-dialog@7.0.17) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.15...@pluralsight/ps-design-system-dialog@7.0.16) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.14...@pluralsight/ps-design-system-dialog@7.0.15) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.13...@pluralsight/ps-design-system-dialog@7.0.14) (2020-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.12...@pluralsight/ps-design-system-dialog@7.0.13) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.10...@pluralsight/ps-design-system-dialog@7.0.11) (2020-01-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.9...@pluralsight/ps-design-system-dialog@7.0.10) (2019-12-19)


### Bug Fixes

* **dialog:** allow vert overflow/scroll ([68018f4](https://github.com/pluralsight/design-system/commit/68018f4db1935b333078d574a09b58240cd3e332))





## [7.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.8...@pluralsight/ps-design-system-dialog@7.0.9) (2019-12-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.7...@pluralsight/ps-design-system-dialog@7.0.8) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.6...@pluralsight/ps-design-system-dialog@7.0.7) (2019-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.5...@pluralsight/ps-design-system-dialog@7.0.6) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))





## [7.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.4...@pluralsight/ps-design-system-dialog@7.0.5) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.3...@pluralsight/ps-design-system-dialog@7.0.4) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.2...@pluralsight/ps-design-system-dialog@7.0.3) (2019-12-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.1...@pluralsight/ps-design-system-dialog@7.0.2) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





## [7.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@7.0.0...@pluralsight/ps-design-system-dialog@7.0.1) (2019-11-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.6...@pluralsight/ps-design-system-dialog@7.0.0) (2019-11-04)


### Code Refactoring

* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **dialog:** esm export refactor ([3e68220](https://github.com/pluralsight/design-system/commit/3e68220))
* **focusmanager:** esm export refactor ([0cd0620](https://github.com/pluralsight/design-system/commit/0cd0620))
* **text:** esm export refactor ([a1a6345](https://github.com/pluralsight/design-system/commit/a1a6345))
* **theme:** esm export refactor ([dee9f11](https://github.com/pluralsight/design-system/commit/dee9f11))
* **util:** esm export ([55cbd9d](https://github.com/pluralsight/design-system/commit/55cbd9d))


### BREAKING CHANGES

* **text:** import pattern
* **dialog:** import pattern
* **util:** import patterns
* **core:** import patterns
* **theme:** new import pattern
* **focusmanager:** new import pattern





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.5...@pluralsight/ps-design-system-dialog@6.0.6) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.4...@pluralsight/ps-design-system-dialog@6.0.5) (2019-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.3...@pluralsight/ps-design-system-dialog@6.0.4) (2019-10-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.2...@pluralsight/ps-design-system-dialog@6.0.3) (2019-10-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.1...@pluralsight/ps-design-system-dialog@6.0.2) (2019-09-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [6.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@6.0.0...@pluralsight/ps-design-system-dialog@6.0.1) (2019-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@5.0.0...@pluralsight/ps-design-system-dialog@6.0.0) (2019-08-26)


### Bug Fixes

* **dialog:** use object.values instead of .keys ([6830741](https://github.com/pluralsight/design-system/commit/6830741))


### Code Refactoring

* **dialog:** convert to use functional component and forward refs ([7add398](https://github.com/pluralsight/design-system/commit/7add398))


### BREAKING CHANGES

* **dialog:** react v16.8 is the minimum version





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.16...@pluralsight/ps-design-system-dialog@5.0.0) (2019-08-09)


### Build System

* **dialog:** move theme package to peerDeps ([5596a43](https://github.com/pluralsight/design-system/commit/5596a43))


### BREAKING CHANGES

* **dialog:** @pluralsight/ps-design-system-theme is now a peerDependency and
must be installed separately





## [4.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.15...@pluralsight/ps-design-system-dialog@4.0.16) (2019-08-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.14...@pluralsight/ps-design-system-dialog@4.0.15) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.13...@pluralsight/ps-design-system-dialog@4.0.14) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.12...@pluralsight/ps-design-system-dialog@4.0.13) (2019-07-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.11...@pluralsight/ps-design-system-dialog@4.0.12) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.10...@pluralsight/ps-design-system-dialog@4.0.11) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.9...@pluralsight/ps-design-system-dialog@4.0.10) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.8...@pluralsight/ps-design-system-dialog@4.0.9) (2019-05-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.7...@pluralsight/ps-design-system-dialog@4.0.8) (2019-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.6...@pluralsight/ps-design-system-dialog@4.0.7) (2019-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.5...@pluralsight/ps-design-system-dialog@4.0.6) (2019-05-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.4...@pluralsight/ps-design-system-dialog@4.0.5) (2019-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.3...@pluralsight/ps-design-system-dialog@4.0.4) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))





## [4.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.2...@pluralsight/ps-design-system-dialog@4.0.3) (2019-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.1...@pluralsight/ps-design-system-dialog@4.0.2) (2019-03-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@4.0.0...@pluralsight/ps-design-system-dialog@4.0.1) (2019-03-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@3.0.2...@pluralsight/ps-design-system-dialog@4.0.0) (2019-03-04)


### Bug Fixes

* **dialog:** remove underlay animation to remove blink ([6c78109](https://github.com/pluralsight/design-system/commit/6c78109)), closes [#473](https://github.com/pluralsight/design-system/issues/473)


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **theme:** bump to react 16.3 to use forwardrefs api





## [3.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@3.0.1...@pluralsight/ps-design-system-dialog@3.0.2) (2019-02-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [3.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@3.0.0...@pluralsight/ps-design-system-dialog@3.0.1) (2019-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.14...@pluralsight/ps-design-system-dialog@3.0.0) (2019-01-08)


### Features

* **dialog:** require a11y label if modal ([24b9f50](https://github.com/pluralsight/design-system/commit/24b9f50)), closes [#239](https://github.com/pluralsight/design-system/issues/239)


### BREAKING CHANGES

* **dialog:** aria-label is required if model prop is true





## [2.3.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.13...@pluralsight/ps-design-system-dialog@2.3.14) (2019-01-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.12...@pluralsight/ps-design-system-dialog@2.3.13) (2018-12-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.10...@pluralsight/ps-design-system-dialog@2.3.12) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.10...@pluralsight/ps-design-system-dialog@2.3.11) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.9...@pluralsight/ps-design-system-dialog@2.3.10) (2018-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.8...@pluralsight/ps-design-system-dialog@2.3.9) (2018-12-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.7...@pluralsight/ps-design-system-dialog@2.3.8) (2018-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.6...@pluralsight/ps-design-system-dialog@2.3.7) (2018-11-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.5...@pluralsight/ps-design-system-dialog@2.3.6) (2018-11-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.4...@pluralsight/ps-design-system-dialog@2.3.5) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.3...@pluralsight/ps-design-system-dialog@2.3.4) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.2...@pluralsight/ps-design-system-dialog@2.3.3) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.1...@pluralsight/ps-design-system-dialog@2.3.2) (2018-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





## [2.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.3.0...@pluralsight/ps-design-system-dialog@2.3.1) (2018-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





# [2.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.17...@pluralsight/ps-design-system-dialog@2.3.0) (2018-11-12)


### Bug Fixes

* **dialog:** fix warnings and stories related to overlay click disabling ([de4783d](https://github.com/pluralsight/design-system/commit/de4783d))


### Features

* **dialog:** trap focus if model or has onClose prop ([44abea5](https://github.com/pluralsight/design-system/commit/44abea5))
* **dialog:** use focuslock to aid in accessibility ([8feb500](https://github.com/pluralsight/design-system/commit/8feb500)), closes [#260](https://github.com/pluralsight/design-system/issues/260)





## [2.2.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.16...@pluralsight/ps-design-system-dialog@2.2.17) (2018-11-09)


### Bug Fixes

* upgrade storybook and fix issues with require.context ([ba6a6e8](https://github.com/pluralsight/design-system/commit/ba6a6e8))





## [2.2.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.15...@pluralsight/ps-design-system-dialog@2.2.16) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-dialog





<a name="2.2.15"></a>
## [2.2.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.14...@pluralsight/ps-design-system-dialog@2.2.15) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.14"></a>
## [2.2.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.13...@pluralsight/ps-design-system-dialog@2.2.14) (2018-10-18)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.13"></a>
## [2.2.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.12...@pluralsight/ps-design-system-dialog@2.2.13) (2018-10-10)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.12"></a>
## [2.2.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.11...@pluralsight/ps-design-system-dialog@2.2.12) (2018-09-25)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.10"></a>
## [2.2.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.9...@pluralsight/ps-design-system-dialog@2.2.10) (2018-07-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.9"></a>
## [2.2.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.8...@pluralsight/ps-design-system-dialog@2.2.9) (2018-07-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.8"></a>
## [2.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.7...@pluralsight/ps-design-system-dialog@2.2.8) (2018-07-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.7"></a>
## [2.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.6...@pluralsight/ps-design-system-dialog@2.2.7) (2018-07-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.6"></a>
## [2.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.5...@pluralsight/ps-design-system-dialog@2.2.6) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.5"></a>
## [2.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.4...@pluralsight/ps-design-system-dialog@2.2.5) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.4"></a>
## [2.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.3...@pluralsight/ps-design-system-dialog@2.2.4) (2018-06-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.3"></a>
## [2.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.2...@pluralsight/ps-design-system-dialog@2.2.3) (2018-06-14)


### Bug Fixes

* root index.js to not require compilation ([2316b0d](https://github.com/pluralsight/design-system/commit/2316b0d))




<a name="2.2.2"></a>
## [2.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.1...@pluralsight/ps-design-system-dialog@2.2.2) (2018-06-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.1"></a>
## [2.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.2.0...@pluralsight/ps-design-system-dialog@2.2.1) (2018-06-05)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.2.0"></a>
# [2.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.16...@pluralsight/ps-design-system-dialog@2.2.0) (2018-05-21)


### Features

* add module entry for each component ([f3110da](https://github.com/pluralsight/design-system/commit/f3110da))




<a name="2.1.16"></a>
## [2.1.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.15...@pluralsight/ps-design-system-dialog@2.1.16) (2018-05-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.15"></a>
## [2.1.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.14...@pluralsight/ps-design-system-dialog@2.1.15) (2018-04-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.14"></a>
## [2.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.12...@pluralsight/ps-design-system-dialog@2.1.14) (2018-04-14)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.13"></a>
## [2.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.12...@pluralsight/ps-design-system-dialog@2.1.13) (2018-04-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.12"></a>
## [2.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.11...@pluralsight/ps-design-system-dialog@2.1.12) (2018-03-27)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.11"></a>
## [2.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.10...@pluralsight/ps-design-system-dialog@2.1.11) (2018-03-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.10"></a>
## [2.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.9...@pluralsight/ps-design-system-dialog@2.1.10) (2018-03-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.9"></a>
## [2.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.8...@pluralsight/ps-design-system-dialog@2.1.9) (2018-03-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.8"></a>
## [2.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.7...@pluralsight/ps-design-system-dialog@2.1.8) (2018-03-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.7"></a>
## [2.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.6...@pluralsight/ps-design-system-dialog@2.1.7) (2018-02-23)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.6"></a>
## [2.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.5...@pluralsight/ps-design-system-dialog@2.1.6) (2018-02-13)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.5"></a>
## [2.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.4...@pluralsight/ps-design-system-dialog@2.1.5) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.4"></a>
## [2.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.3...@pluralsight/ps-design-system-dialog@2.1.4) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.3"></a>
## [2.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.2...@pluralsight/ps-design-system-dialog@2.1.3) (2018-02-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.2"></a>
## [2.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.1...@pluralsight/ps-design-system-dialog@2.1.2) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.1"></a>
## [2.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.1.0...@pluralsight/ps-design-system-dialog@2.1.1) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-dialog

<a name="2.1.0"></a>
# [2.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-dialog@2.0.0...@pluralsight/ps-design-system-dialog@2.1.0) (2018-02-06)


### Features

* **dialog:** allow referencing dom element via innerRef prop ([8187455](https://github.com/pluralsight/design-system/commit/8187455))




<a name="2.0.0"></a>
# 2.0.0 (2018-02-06)


### Code Refactoring

* **dialog:** rename underlay -> overlay; fade overlay ([a2d19e0](https://github.com/pluralsight/design-system/commit/a2d19e0))


### Features

* **dialog:** new component ([41f4fcd](https://github.com/pluralsight/design-system/commit/41f4fcd))


### BREAKING CHANGES

* **dialog:** rename disableCloseOnUnderlayClick to disableCloseOnOverlayClick
* **dialog:** change css .psds-dialog__underlay to .psds-dialog__overlay
