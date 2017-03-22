# Jobscript

> Redesign of JobScript Assessment test using VueJS

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# should open automatically in default browser
npm run dev
```

## Explaination of Design

### Styling

The original idea was to implement this using Bootstrap and Vue, though issues in getting Bootstrap to cooperate lead to the decision to remove it and manually create mixins instead. While the result isn't as "pretty" as I would have liked for this project, I think the current styles would make a good prototype to work off of to implement an actual mobile-first version of the JobScript assessment.

To keep this project in line with at least some of the styling on The Whether's site, I also constrained the App's outmost view to a max of 600px. For ease of generating the HTML as quickly as possible, I used Pug templates with Vue's `v-for` directive to quickly produce the example elements in the first two sections.

### Events

I used custom events triggered by the `Back` and `Next/Submit` buttons (which only emit a `completed` event), combined with a filtering event handler in Assessment, to trigger the direction to move for the assessment. The filter in Assessment then emits its own events (`regress` and `progress` here) for the Landing component so the current completed status can be modified appropriately and be reflected in the Progress component. The Back and Next buttons are automatically enabled and disabled based on whether the user is currently looking at the first or last sub-route for the assessment.

### Components

Sections 1 and 2 currently demonstrate two different sets of components, similar to what I saw within the assessment. Section 1 demonstrates a list of 24 checkboxes that are reactive to the width of the current screen. Section 2 demonstrates questions using radio buttons to determine the answer; the answers appear next to the question at higher screen resolutions (width > 360px), and under it at lower resolutions (width <= 360px).

Sections 3 through 8 and Assessment Complete exist primarily to demonstrate that the Progress indicators work as intended for all sections.

## Issues & Moving Forward

### Browsers

This project was developed on a Linux Mint 18.1 system and tested in both Chrome and Firefox browsers. I have not checked this project in IE 9+, Edge, Safari, or Opera browsers, so I can't say for sure how it will behave in them at this time. For behavior differences between Chrome and Firefox, please see the Known Issues section below.

### Drawbacks

Sections 3 and 4 mention two major drawbacks to the current implementation. The first is that each section of the assessment must be its own component. The second is that it presently does not account for completed sections on refresh. I am, however, confident that this could be fixed through dynamic routing.

### Moving Forward: PDF handling

One feature that I would also like to see implemented with this redesign is a way for the user to view their assessment results in-browser without needing to download the PDF. Though I did not implement it for this project, I believe [viewerjs](http://viewerjs.org/) would be an acceptable project to use, as it seems to be fairly straightforward to implement. There is also a [3rd party NodeJS wrapper](https://www.npmjs.com/package/node-viewerjs) for the project, which I had considered using for this project. However, as this project's primary purpose was to prototype a solution to bringing the assessment itself to a mobile-friendly format, I felt it was outside of the problem scope to go ahead and implement it.

### Known Issues

- In Chrome (on Linux), toggling the device toolbar scales the entire app rather than allowing it to resize manually.
  - Manually changing the width of the window does not share this bug and allows the app to resize as expected.
  - This issue does not occur in Firefox when toggling Responsive Design Mode.
- Section 2 has an additional issue in Chrome that causes the radio buttons for any after the first in a given row to appear smaller.
  - This issue is not present in Firefox.
