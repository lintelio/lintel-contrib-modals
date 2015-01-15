lintel-contrib-modals
=====================

> Modals for lintel.

[![npm](https://img.shields.io/npm/v/lintel-contrib-modals.svg)](https://www.npmjs.com/package/lintel-contrib-modals)
[![Bower](https://img.shields.io/bower/v/lintel-contrib-modals.svg)](https://github.com/lintelio/lintel-contrib-modals)


## Getting Started
This module requires Lintel.

If you haven't used [Lintel](http://lintel.io/) before, be sure to check out the [Getting Started](http://lintel.io/getting-started) guide, as it explains how to install and use this module. Once you're familiar with that process, you may install this module with this command:

```shell
bower install lintel-contrib-modals --save
```

Once the module has been installed, you will have to load it in your main SASS file:

```scss
@import "bower_components/lintel-contrib-modals/sass/modals.scss"
```

This module also includes a JavaScript component, which you will have to load separately.

```html
<script src="bower_components/lintel-contrib-modals/dist/modals.min.js" type="text/javascript"></script>
```

You can use [wiredep](https://github.com/taptapship/wiredep) or [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) to automatically inject files in your build process.


## Variables
Check the vars file in the `sass` folder to see the full list of variables you can customize.

#### $modal-padding-y & $modal-padding-x  
Change default modal paddings.

The following vars are available for finer grained control (and default to these 2):

  - $modal-header-padding-y
  - $modal-header-padding-x
  - $modal-body-padding-y
  - $modal-body-padding-x
  - $modal-footer-padding-y
  - $modal-footer-padding-x

#### $modal-bg
Default value: `#fff`  

#### $modal-border
Default value: `rgba(0,0,0,.6)`  

#### $modal-border-radius
Default value: `$border-radius-base`  

#### $modal-box-shadow
Default value: `$box-shadow-dark`  

#### $modal-z-index
Default value: `$z-index-3xl`  

#### $modal-xs-width
Default value: `400px`  

#### $modal-sm-width
Default value: `500px`  

#### $modal-md-width
Default value: `600px`  

This is the default modal width.

#### $modal-lg-width
Default value: `700px`  

#### $modal-xl-width
Default value: `800px`  

#### $modal-header-border
Default value: `$border-base`  

#### $modal-footer-border
Default value: `$border-base`  

#### $modal-overlay-bg
Default value: `rgba(0,0,0,.5)`  

#### $modal-overlay-bg-fallback
Default value: `#333`  

NOTE: If you do not want a fallback, set the fallback to the same value as the bg.

```sass
$modal-overlay-bg-fallback: $modal-overlay-bg;
```

#### $modal-overlay-padding-y & $modal-overlay-padding-y
Default value: `$cushion-base`  

#### $modal-*-bg
Change the background for a specific (`*`) state. Ex: `primary`, `secondary`, `error`, `warning`, `success`, `info`

#### $modal-*-border
Change the border-color for a specific (`*`) state. Ex: `primary`, `secondary`, `error`, `warning`, `success`, `info`

#### $modal-*-text
Change the text color for a specific (`*`) state. Ex: `primary`, `secondary`, `error`, `warning`, `success`, `info`

#### $modal-center-y
Default value: `true`  

Determines whether to vertically center the modal for browsers that support flexbox. See usage below.


## Mixins
Check the mixins file in the `sass` folder to see how you can extend this module.

#### modal-state($bg, $border, $text)
Change this mixin to customize what each state does.

```scss
@mixin modal-state($bg, $border, $text) {
  .modal-header,
  .modal-footer {
    @if $bg     { background-color: $bg; }
    @if $border { border-color: $border; }
    @if $text   { color: $text; }
  }
}
```


## Examples

#### Modal
```html
<div class="modal">
  <div class="modal-container">
    <div class="modal-dialog">
      <form>
        <div class="modal-header">
          <h1 class="modal-title">
            <a href="modal-title-link">Modal Title</a>
          </h1>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">
              Email
              <input class="form-control" type="text" placeholder="Email">
            </label>
          </div>
          <div class="form-group">
            <label class="form-label">
              Password
              <input class="form-control" type="password" placeholder="Password">
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn-group float-right">
            <button class="btn" type="button">
              Cancel
            </button>
            <button class="btn-primary" type="submit">
              OK
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
```

#### Modal Header
```html
<div class="modal-header">
  <h1 class="modal-title">
    Modal Title
  </h1>
</div>
```

#### Modal Header with Linked Title
```html
<div class="modal-header">
  <h1 class="modal-title">
    <a href="modal-title-link">Modal Link Title</a>
  </h1>
</div>
```

#### Modal Header with Right Side Actions
NOTE: There should be no whitespace after `.modal-header-actions`. See [Fighting the Space Between Inline Block Elements](http://css-tricks.com/fighting-the-space-between-inline-block-elements/).

```html
<div class="modal-header">
  <div class="modal-header-actions">
    <div class="btn-group">
      <button class="btn" type="button">
        Cancel
      </button>
      <button class="btn btn-primary" type="submit">
        OK
      </button>
    </div>
  </div><!--
  -->
  <h1 class="modal-title">
    <a href="modal-title-link">Modal Title</a>
  </h1>
</div>
```

#### Modal Header with Close Button
```html
<div class="modal-header">
  <button type="button" class="modal-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <h1 class="modal-title">
    <a href="modal-title-link">Modal Link Title</a>
  </h1>
</div>
```

#### Modal Header with Close Button in Right Side Actions
```html
<div class="modal-header">
  <div class="modal-header-actions">
    <button type="button" class="modal-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div><!--
  --><h1 class="modal-title">
    <a href="modal-title-link">Modal Link Title</a>
  </h1>
</div>
```

#### Modal Body
```html
<div class="modal-body">...</div>
```

#### Modal Footer
```html
<div class="modal-footer">
  <div class="btn-group">
    <button class="btn" type="button">
      Back
    </button>
  </div>
```

#### Modal Footer with Right Side Actions
NOTE: There should be no whitespace after `.modal-footer-actions`. See [Fighting the Space Between Inline Block Elements](http://css-tricks.com/fighting-the-space-between-inline-block-elements/).
```html
<div class="modal-footer">
  <div class="modal-footer-actions">
    <div class="btn-group">
      <button class="btn" type="button">
        Cancel
      </button>
      <button class="btn btn-primary" type="submit">
        OK
      </button>
    </div>
  </div><!--
  --><div class="btn-group">
    <button class="btn" type="button">
      Back
    </button>
  </div>
```

#### Vertical Center
If the body has the class `.flexbox`, the modal will be centered using flexbox. **DO NOT ADD THIS CLASS MANUALLY**. Nothing bad will probably happen if you do, but it's not recommended. This class should be added by [modernizr](http://modernizr.com/). Set `$modal-center-y` to `false` if you wish to disable this feature.

```html
<body class="flexbox">
  <div class="modal">...</div>
</body>
```

#### Sizes
```html
<div class="modal-container modal-xs">...</div>
<div class="modal-container modal-sm">...</div>
<div class="modal-container modal-lg">...</div>
<div class="modal-container modal-xl">...</div>
<div class="modal-container modal-max">...</div>
```

#### Full Height and Width
```html
<div class="modal-container modal-max modal-full">...</div>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
