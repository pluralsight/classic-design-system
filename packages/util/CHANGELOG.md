# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.4.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.4.0...@pluralsight/ps-design-system-util@5.4.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [5.4.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.3.4...@pluralsight/ps-design-system-util@5.4.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [5.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.3.3...@pluralsight/ps-design-system-util@5.3.4) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [5.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.3.2...@pluralsight/ps-design-system-util@5.3.3) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [5.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.3.1...@pluralsight/ps-design-system-util@5.3.2) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [5.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.3.0...@pluralsight/ps-design-system-util@5.3.1) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [5.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.2.0...@pluralsight/ps-design-system-util@5.3.0) (2020-10-08)


### Bug Fixes

* **util:** import references wrong dist folder ([5749388](https://github.com/pluralsight/design-system/commit/5749388e6497c89e8d4c74a461769db299c58926))
* **util:** use-portal detect browser on cleanup ([b5ceedb](https://github.com/pluralsight/design-system/commit/b5ceedb0c75cb56e2c93859bbfcf9ac794ec9481))


### Features

* **util:** add omit fn ([4229f94](https://github.com/pluralsight/design-system/commit/4229f9440a8759bf755f924f08587b59808325b3))





# [5.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.1.1...@pluralsight/ps-design-system-util@5.2.0) (2020-09-28)


### Features

* **util:** add use-portal ([f5b9667](https://github.com/pluralsight/design-system/commit/f5b9667e200bf05ef3b8f0c04786193f94fab52c))





## [5.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.1.0...@pluralsight/ps-design-system-util@5.1.1) (2020-09-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [5.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.0.2...@pluralsight/ps-design-system-util@5.1.0) (2020-09-17)


### Features

* **util:** add keyMirror fn ([c853e0e](https://github.com/pluralsight/design-system/commit/c853e0eb2ca065a573faab8379ba07b8316a1bce))
* **util:** export types ([9482a7c](https://github.com/pluralsight/design-system/commit/9482a7c98e7bac77f8cae88fd27b8aee68d59fa1))





## [5.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.0.1...@pluralsight/ps-design-system-util@5.0.2) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@5.0.0...@pluralsight/ps-design-system-util@5.0.1) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@4.1.0...@pluralsight/ps-design-system-util@5.0.0) (2020-09-09)


* Feat/dropdown patterns (#1125) ([f2c348c](https://github.com/pluralsight/design-system/commit/f2c348c8dd086cb53cc1fc7fcf9ef1ba1a5fc84c)), closes [#1125](https://github.com/pluralsight/design-system/issues/1125)


### BREAKING CHANGES

* remove focus on mount from actionmenu

* docs(site): update actionmenu and dropdown





# [4.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@4.0.1...@pluralsight/ps-design-system-util@4.1.0) (2020-08-31)


### Features

* **util:** add stylesFor helper ([340c779](https://github.com/pluralsight/design-system/commit/340c7791a7e42a9f101e9ec819d7c5acd28c10bb))





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@4.0.0...@pluralsight/ps-design-system-util@4.0.1) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.5.0...@pluralsight/ps-design-system-util@4.0.0) (2020-08-11)


### Features

* **actionmenu:** rebuild actionmenu to support variable uses ([#1088](https://github.com/pluralsight/design-system/issues/1088)) ([0248ef3](https://github.com/pluralsight/design-system/commit/0248ef32d4676fc57de7352a390d034219503538))


### BREAKING CHANGES

* **actionmenu:** drops origin prop from action menu. adds Dropdown.Item to Dropdown. renames Util menu key listener. use Fragment for menu on Dropdown and nested on ActionMenu.  new ActionMenu.Ellipsis component and ActionMenu.Icon components. deprecated ActionMenu prop should mount on focus





# [3.5.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.4.0...@pluralsight/ps-design-system-util@3.5.0) (2020-08-10)


### Features

* **util:** add usePrevious; export isFunction ([8a36327](https://github.com/pluralsight/design-system/commit/8a36327a9f37311124666c6cf4a455b67cbae752))
* **util:** new method for cloning while preserving refs ([86345f0](https://github.com/pluralsight/design-system/commit/86345f03822ed6f67cb9ebf94a2139845c150b1e))





# [3.4.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.3.0...@pluralsight/ps-design-system-util@3.4.0) (2020-08-06)


### Features

* **util:** new method for cloning while preserving refs ([c76246a](https://github.com/pluralsight/design-system/commit/c76246a69cc3a9641f915f3cb548518314202a7d))





# [3.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.2.1...@pluralsight/ps-design-system-util@3.3.0) (2020-07-17)


### Features

* **util:** add shallowCompare fn ([751b371](https://github.com/pluralsight/design-system/commit/751b3715155e2da3abfb2c781fce6b6e33854de1))
* **util:** add useResizeObserver hook ([fea5353](https://github.com/pluralsight/design-system/commit/fea5353705d648d9df5ee7f6555569efc43f98f5))





## [3.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.2.0...@pluralsight/ps-design-system-util@3.2.1) (2020-05-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





# [3.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.1.1...@pluralsight/ps-design-system-util@3.2.0) (2020-05-05)


### Features

* **util:** move createUniversalPortal to util package ([073b80b](https://github.com/pluralsight/design-system/commit/073b80b06ed9f9f9a50797ddc99dff08a8c78400))





## [3.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.1.0...@pluralsight/ps-design-system-util@3.1.1) (2020-04-24)


### Bug Fixes

* **searchinput:** clear button visible only w/text ([59fc346](https://github.com/pluralsight/design-system/commit/59fc346aa42397f17fbec42b0c575e923e4af35b))





# [3.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.12...@pluralsight/ps-design-system-util@3.1.0) (2020-04-08)


### Features

* **util:** add useToggle hook ([6054a62](https://github.com/pluralsight/design-system/commit/6054a62f093834a9ed4d12879fbee434994267ca))





## [3.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.10...@pluralsight/ps-design-system-util@3.0.11) (2020-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [3.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.8...@pluralsight/ps-design-system-util@3.0.10) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [3.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.6...@pluralsight/ps-design-system-util@3.0.8) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [3.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.4...@pluralsight/ps-design-system-util@3.0.6) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [3.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.2...@pluralsight/ps-design-system-util@3.0.3) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))





## [3.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.1...@pluralsight/ps-design-system-util@3.0.2) (2019-12-05)


### Bug Fixes

* **dropdown:** dev can set width thus truncating long input & options ([fd365be](https://github.com/pluralsight/design-system/commit/fd365be6ab6bb8c385fbe3c0ad8ae398b9ad7864))





## [3.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@3.0.0...@pluralsight/ps-design-system-util@3.0.1) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.5...@pluralsight/ps-design-system-util@3.0.0) (2019-11-04)


### Code Refactoring

* **util:** esm export ([55cbd9d](https://github.com/pluralsight/design-system/commit/55cbd9d))


### BREAKING CHANGES

* **util:** import patterns





## [2.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.4...@pluralsight/ps-design-system-util@2.0.5) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [2.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.3...@pluralsight/ps-design-system-util@2.0.4) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.2...@pluralsight/ps-design-system-util@2.0.3) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.1...@pluralsight/ps-design-system-util@2.0.2) (2019-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@2.0.0...@pluralsight/ps-design-system-util@2.0.1) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))





# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.3.0...@pluralsight/ps-design-system-util@2.0.0) (2019-03-04)


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **theme:** bump to react 16.3 to use forwardrefs api





# [1.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.7...@pluralsight/ps-design-system-util@1.3.0) (2019-01-17)


### Features

* **util:** add color#transparentize ([058290a](https://github.com/pluralsight/design-system/commit/058290a))





## [1.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.5...@pluralsight/ps-design-system-util@1.2.7) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [1.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.5...@pluralsight/ps-design-system-util@1.2.6) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [1.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.4...@pluralsight/ps-design-system-util@1.2.5) (2018-12-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





## [1.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.3...@pluralsight/ps-design-system-util@1.2.4) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-util





<a name="1.2.3"></a>
## [1.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.2...@pluralsight/ps-design-system-util@1.2.3) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-util

<a name="1.2.1"></a>
## [1.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.2.0...@pluralsight/ps-design-system-util@1.2.1) (2018-06-14)


### Bug Fixes

* root index.js to not require compilation ([2316b0d](https://github.com/pluralsight/design-system/commit/2316b0d))




<a name="1.2.0"></a>
# [1.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.40...@pluralsight/ps-design-system-util@1.2.0) (2018-06-05)


### Features

* **util:** add props whitelisting util ([2a52d81](https://github.com/pluralsight/design-system/commit/2a52d81))




<a name="1.1.40"></a>
## [1.1.40](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.40) (2017-08-08)




<a name="1.1.39"></a>
## [1.1.39](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.39) (2017-08-07)




<a name="1.1.38"></a>
## [1.1.38](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.38) (2017-08-07)




<a name="1.1.37"></a>
## [1.1.37](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.37) (2017-08-07)




<a name="1.1.36"></a>
## [1.1.36](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.36) (2017-08-01)




<a name="1.1.35"></a>
## [1.1.35](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.35) (2017-08-01)




<a name="1.1.34"></a>
## [1.1.34](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.34) (2017-07-21)




<a name="1.1.33"></a>
## [1.1.33](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.33) (2017-07-20)




<a name="1.1.32"></a>
## [1.1.32](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.32) (2017-07-20)




<a name="1.1.31"></a>
## [1.1.31](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.31) (2017-07-20)




<a name="1.1.30"></a>
## [1.1.30](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.30) (2017-07-18)




<a name="1.1.29"></a>
## [1.1.29](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.29) (2017-07-12)




<a name="1.1.28"></a>
## [1.1.28](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.28) (2017-07-12)




<a name="1.1.27"></a>
## [1.1.27](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.27) (2017-07-11)




<a name="1.1.26"></a>
## [1.1.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.26) (2017-07-11)




<a name="1.1.25"></a>
## [1.1.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.25) (2017-07-11)




<a name="1.1.24"></a>
## [1.1.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.24) (2017-07-11)




<a name="1.1.23"></a>
## [1.1.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.23) (2017-07-11)




<a name="1.1.22"></a>
## [1.1.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.22) (2017-07-11)




<a name="1.1.21"></a>
## [1.1.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.21) (2017-07-11)




<a name="1.1.20"></a>
## [1.1.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.20) (2017-07-11)




<a name="1.1.19"></a>
## [1.1.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.19) (2017-06-29)




<a name="1.1.18"></a>
## [1.1.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.18) (2017-06-28)




<a name="1.1.17"></a>
## [1.1.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.17) (2017-06-28)




<a name="1.1.16"></a>
## [1.1.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.16) (2017-06-22)




<a name="1.1.15"></a>
## [1.1.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.15) (2017-06-22)




<a name="1.1.14"></a>
## [1.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.14) (2017-06-22)




<a name="1.1.13"></a>
## [1.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.13) (2017-06-22)




<a name="1.1.12"></a>
## [1.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.12) (2017-06-20)




<a name="1.1.11"></a>
## [1.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.11) (2017-06-20)




<a name="1.1.10"></a>
## [1.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.9...@pluralsight/ps-design-system-util@1.1.10) (2017-06-20)




<a name="1.1.9"></a>
## [1.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.8...@pluralsight/ps-design-system-util@1.1.9) (2017-06-20)




<a name="1.1.8"></a>
## [1.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.7...@pluralsight/ps-design-system-util@1.1.8) (2017-06-20)




<a name="1.1.7"></a>
## [1.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.6...@pluralsight/ps-design-system-util@1.1.7) (2017-06-20)




<a name="1.1.6"></a>
## [1.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.5...@pluralsight/ps-design-system-util@1.1.6) (2017-06-15)




<a name="1.1.5"></a>
## [1.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.4...@pluralsight/ps-design-system-util@1.1.5) (2017-06-15)




<a name="1.1.4"></a>
## [1.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.3...@pluralsight/ps-design-system-util@1.1.4) (2017-06-15)




<a name="1.1.3"></a>
## [1.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.2...@pluralsight/ps-design-system-util@1.1.3) (2017-06-02)




<a name="1.1.2"></a>
## [1.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-util@1.1.1...@pluralsight/ps-design-system-util@1.1.2) (2017-06-01)




<a name="1.1.0"></a>
# 1.1.0 (2017-05-18)


### Features

* **tests:** integrate jest; make css and lerna work ([a8ed565](https://github.com/pluralsight/design-system/commit/a8ed565))
* **util:** initial import new package; capitalize fn ([5f76ded](https://github.com/pluralsight/design-system/commit/5f76ded))
