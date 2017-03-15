---
title: JobScript Assessment Notes
...

# Pre-Assessment

- Page responds to width changes reasonably well
	+ Progress & Tips change from sitting side-by-side to stacked upon page narrowing
- Assessment is in an `iframe` element; why?
	+ Possible cause for lack of responsiveness of the assessment
	+ Consider pulling out of an `iframe` and load into a `router-view` element instead
	
# Assessment

- `iframe` loads responsively without reloading the entire page
- Design of each section helps guide users to narrowing in to their preferred topics within each overarching category (section)
- Both progress indicators update after each section
- Progress indicator at top of page shows which sections have been completed
	+ Would like to also see this show the remaining sections as well, or at least the current section
	+ `Complete Date` should be updated to show the actual date that the section was completed
- Form tables have a bit too much contrast
	+ Particular shade of blue used makes it more difficult to read the font
		* Observation: Table colors should be set in CSS rather than table attributes
		* Consider changing odd-numbered table rows to a lighter color
			- light gray or a lighter blue

# Post-Assessment

- Consider ways to display the PDF in-browser, along with the download link
	+ Many browsers' internal PDF viewers include the download link in the display
	+ ~~PDF.js may be an effective solution to this~~ ViewerJS seems like it will be easier to use than Mozilla's PDF.js
- Action Plan link points at an invalid location (Redirects to Mediacom search)