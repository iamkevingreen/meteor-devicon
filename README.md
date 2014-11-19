devicon V2 - Meteor Package
===============

*This is a packed version of devicon*

See the original [Devicon Repo](https://github.com/konpa/devicon)

# 

devicon aims to gather all logos representing development languages and tools.

See [devicon.fr](http://devicon.fr) (not up to date, coming really soon!)

## How to use

_2 ways of using devicon:_

### SVG icons

- Copy/paste svg code from [devicon](http://devicon.fr) (coming soon) or from svg file

```html
<!--  for git plain version -->
<svg class="devicon-git-plain" viewBox="0 0 128 128">
  <path fill="#F34F29" d="M124.742,58.378L69.625,3.264c-3.172-3.174-8.32-3.174-11.497,0L46.685,14.71l14.518,14.518c3.375-1.139,7.243-0.375,9.932,2.314c2.703,2.706,3.462,6.607,2.293,9.993L87.42,55.529c3.385-1.167,7.292-0.413,9.994,2.295c3.78,3.777,3.78,9.9,0,13.679c-3.78,3.78-9.901,3.78-13.683,0c-2.842-2.844-3.545-7.019-2.105-10.521L68.578,47.933l-0.002,34.341c0.922,0.455,1.791,1.063,2.559,1.828c3.779,3.777,3.779,9.898,0,13.683c-3.779,3.777-9.904,3.777-13.679,0c-3.778-3.784-4.088-9.905-0.311-13.683C58.079,83.169,59,82.464,60,81.992V47.333c-1-0.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983,20.333L3.229,58.123c-3.175,3.177-3.155,8.325,0.02,11.5l55.126,55.114c3.173,3.174,8.325,3.174,11.503,0l54.86-54.858C127.913,66.703,127.916,61.552,124.742,58.378z"/>
</svg>
```

- Add css rules in your stylesheet
```css
.devicon-git-plain {
  max-width: 2em;
}

/* if you want to change the original color */
.devicon-git-plain path {
  fill: #4691f6;
}
```

### Icons font

- Upload devicon.css and font files to your project

```html
  <link rel="stylesheet" href="devicon.css">

  <!--  if you want colored versions -->
  <link rel="stylesheet" href="devicon-colors.css">
```

- Add icon using <i> tag

```html
  <!--  for git plain version -->
  <i class="devicon-git-plain"></i>

  <!--  for git plain version with wordmark -->
  <i class="devicon-git-plain-wordmark"></i>

  <!--  for git plain version colored with git main color (devicon-color.css required) -->
  <i class="devicon-git-plain colored"></i>

  <!--  for git plain version with wordmark colored with git main color (devicon-color.css required) -->
  <i class="devicon-git-plain-wordmark colored"></i>
```

##### See devicon.json file for complete and up to date reference of icon's available versions.