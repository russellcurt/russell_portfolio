# 7/26/2023:

Figured out how routing works:

- need to map out every single anchor element that links out and potentially replace all of them with a Link element
- need to add more route elements to page router in app.jsx

Figured out how displaying static svgs (w/o animations) works in react:

- need to distinguish between all static and dynamic svgs in the codebase
- need to figure out if i need to wrap all dynamic svgs in codebase in an img element so i can import similarly to static
- need to figure out how to animate dynamic svgs with state

General:

- need to figure out if Link elements can get styled by taking in specific classNames as props or like reg elements
- need to decide or clean any body targeted stylings (i.e like in home.jsx, the whole implementation is wrapped around a body element that probably could just be a div with a specific id or class name).

vanilla web solutions generally validate with server per page load through the DOM in MPAs.

In a react SPA, we'd be able to take the whole solution and load it once and only update things that need to be updated with state or simulated page routing to "other pages" via virtual DOM

# 7/29/2023:

Figured out how svgs work a few days ago with framer-motion allowing me to add draw animations on hover.

Figured out how to prop drill most data items to lower level components:

- need to figure out how to properly prop drill svgs with framer motion functionality down to lower level components

General:

- need to figure out states for home page, navbar, general scrolling and time fetch
  - try youtubing examples of how to implement each one of the above for react
- need to clean existing css styles (about.css fully cleaned)
- need to reorganize module structures (see about module for an example)

Next Time:
start on info.jsx; priority is to get svgs with framer motion capabilities properly displaying in info => need to figure out how to prop drill from data.jsx to info.jsx. note that there are code fragments in info where a local implementation works. would be nicer/cleaner to get things to work by prop drilling.

# 7/31/2023:

learned the difference when to use simple state vs some kind of extra library like redux: when the functionality of the state is only used within the scope of the component, better to just use a simple state as opposed to a library solution.

figured out the state management for home page

- need to figure out how to make it cleaner, look into using componentDidMount (component mounting) to affect the DOM to add event listeners for all the triggers at once, + the underlines.
- once the above is done, need to figure out how to make it into a component.

Also made an executive decision to trigger underlining only on leadletter trigger vs container trigger; the animation with container trigger proved to be too clunky during unit testing. unfortunately makes code more complicated but if component mounting is solved, it would make the code more readable and avoid having a larger component size.

# 8/2/2023:

For all intents and purposes, the Home module is complete and likely unable to be condensed into fewer lines of code. conditional inline stylings allow for the appropriate triggers to function and the right styles given specific compound conditions to take proper effect.

still need to create a modal/overlay module.
still need to figure out how to pull time efficiently per second without bogging down load times.

need to figure out how to do lazy loading for images

navwindow.jsx likely will have to manage state for each case study detail page; NavWindow can control en masse, setting booleans for each of the 4 sections to true for the selected section (paired with inline style change) while setting every other section to false.
then, in each respective case study detail page, we set conditional rendering depending on what is clicked (i.e something like:
overviewValue && <>render everything for this section<>
empathizeValue && <>render everything for this section<> etc...
)

look into styled-components for react

reference links for overlay:
https://www.kindacode.com/article/react-create-a-fullscreen-search-overlay-from-scratch/
https://codesandbox.io/s/react-fullscreen-overlay-sbjs4?file=/src/SearchOverlay.jsx

reference links for lazy loading:
https://www.youtube.com/watch?v=hJ7Rg1821Q0
https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/
https://www.abstractapi.com/guides/how-to-compress-an-image-in-react#:~:text=To%20optimize%20images%20in%20React,images%20from%20the%20public%20folder.

reference links for time fetching:

reference link for page scrolling:
https://codingbeautydev.com/blog/react-scroll-to-top-of-page/#:~:text=In%20React%2C%20to%20scroll%20to,behavior%3A%20'smooth'%20%7D%20.

# 8/9/2023:

Lots of modules were updated between this note and the last. Codebase is current and all old functionality from vanilla solution is now functional in a react implementation.

Primarily:
Topnav had a lot of modifications including but not limited to: scroll locking on overlay toggle, topnav/overlay button animation working properly, overlay toggle working in general, scroll down to hide nav but scroll up even a little bit to reveal hidden navbar, appropriate time fetching logic, with the child component overlay handling new route linking appropriately.

Work/Content Components/Content.jsx was modified to account for individual case study image overlays.

Case Studies module now has original intended functionality to swap between case study step sections and conditionally rendering sections based on what is clicked in the "top nav bar" of the case study window "pages".

Still need to consider lazy loading and image compression (need to talk to client about this)

FINE TUNING: remember to look at the react implemenation across different browsers. Currently, there needs to be consideration for space at the top for any extra favorites bar in chrome (as an example)

# 8/27/2023:

Top nav sizing 15%? (make location and time font size smaller too) - fine tune this

all non moving assets download pngs instead of svgs\*\*\*\*

about - redesign whole page (content may not have been altered too much but need to reposition using the new about page layout on main design in curt's figma)
RESUME LINK - initially, 'here' is underlined but hovering over the whole button section will trigger style change to underline whole button text content
INFO UNDERLINES: hovering over whole sections underlines the title of the section (vs old svg draw)

case studies - need to figure out how to do intersection stylings (try googling codepen examples), adapt envision "window" stylings to other case study pages.
figure out how to do lazy loading + placeholders using the new

contact footer - github pages to link to project repo (DONE, WE USED A LINK ON THE GITHUB PAGES IN THE MESSAGE SECTION AT THE BOTTOM)

Footer - double check to make sure each link will function properly (maybe ask curt for his links out) (DONE)

home - double check the viewheight spacing (need to figure out why random white spaces sometimes show up and check for other browsers/devices) (DONE)

recreation - begin accordion stylings that will eventually have a carousel. see following sites as reference:
http://sf.gabeferreira.com/#programmers
https://justinjay.wang/

regular landing - nothing? double check

topnav - nothing? double check

work - nothing

# 8/29/2023:

about - done for now
case studies - still need intersection and adopting envision window to rest + images (try throttling net to other peoples' portfolio pages to see how their sites handle lazyloading if at all)
contact - done
footer - done
home - done
recreation - need make a custom accordion component (bootstrap failed with their stylings) got functionality kind of working for collapse and conditional rendering.
regular landing - done
topnav - done
work - done

# 8/31/2023:

about - done for now
case studies - still need intersection and adopting envision window to rest + images (try throttling net to other peoples' portfolio pages to see how their sites handle lazyloading if at all)
contact - done
footer - done
home - done
recreation - scroll restoration (maybe not cuz going back by clicking top from pages with content does a relative screen scroll), do we need footer on these pages?
regular landing - done
topnav - done
work - done

# 9/6/2023:

change padding on case study detail header images if we're going to migrate to lazyloading component

ask curt about borders on images like on echo case study image. (it's not part of styling in that case)

still need to figure out scroll restoration and reset (see preventScrollReset attribute for Link in react router dom stuff)

wait for confirmation from curt before finishing recreation images.

resize logic is fucked; factor needs to be a constant value but we need to figure out how to dynamically find that value for other things.
maybe based on margin?

# 9/10/2023:

need to remove/manage scroll restoration/return functions.

need to process the rest of the recreation assets and styled.

- try also testing for lower sized native image sizes to cut down on file size.
  style the rest of the case study pages.
- need to do math per page with images rendered by LazyLoad component to calc static factor values to pass in as props.

# 9/12/2023:

0.7 factor for resize on case study pages,
0.77 factor for max screen.
1032:580.5 for cs pages to maintain aspect ratio

can wrap resize img component in a wrapper div to style for centering (flex center or otherwise)

# 9/13/2023:

html styling was fucking up topnav functionality because it, paired with the overflow issues on csd pages, prevented topnav event listeners from working.

fixed now, as issue was with the csd window having a 100vw width value (csd-window being the container to the content within so setting it to 100vw was pointless if we were defining the children to total 100vw [77 and 23 for content-space and right-nav respectively]).

# 9/14/2023:

accordion had to be rewritten to handle max 1 panel active (others close if they are not the focus) and have everything work as expected from before.

envision csd is updated but certain images need to be modified. weird behavior with overscroll (for trackpad and mobile implemenations)
occurs at the top of the csd pages that interferes with the intersection observer in part because of the existence of a top-fixed-hiding-on-scroll topnav component.

need to figure out where to add overscroll-behavior: none in the css somewhere that does not ruin the intersection observer logic and the other interactions we have (so not body).

make sure to check code for any FLAGs

# 9/16/2023:

<ResizeImg
                  initialWidth="1032"
                  initialHeight="580.5"
                  img={echoImg7}
                  lqip={echoImg7LQIP}
                  factor="0.7"
                />

                Set your media query ranges based on the unique needs of your design. For example, if we wanted to follow the Bootstrap standards for our design, we would use the following media queries:

576px for portrait phones
768px for tablets
992px for laptops
1200px for large devices

need to test out other screen sizes for breakpoints

# 9/27/2023:
fixed about page but need to fix image resizing and lazy loading.

problem: 
need images to lazy load for better user experience but need to adjust to fill or be contained within its parent container.

solutions:
simple way to do this is use css to control images background paired with inherent image element attributes. 
pros to this:
-images controlled by css therefore easier to deal with
cons to this:
-lazy loading is controlled by browser so we have less control over how it works

react gives the users more control over how the browser will lazy load the images especially considering things with intersection observer thresholds.
pros to this: 
-more control over the whole user experience considering things like when the user will start to see images/consideration for
when and how much the image is on the screen.
cons to this:
-very specific sizes prevents us from customizing images to fit so readily/conveniently within parent containers.

# 9/30/2023:
considering the project specifications, browser will be handling lazy loading (non react solution will be used).

# 10/6/2023:
need to rework all the places that used to use resizeimg component.

header
echo
envision
fda
soi
hatch
akasha
photography
typography
visualizer

need to delete resizeimg component after
double check the media queries for casestudy.css (they seem to not be needed?)

FIGURE OUT SPACING IN CASE STUDY PAGES. ECHO IS WHAT THINGS SHOULD LOOK LIKE BUT HATCH IS WHAT IT SHOULDN'T LOOK LIKE (LOOK AT HATCH IMAGE 3) IT LIKELY HAS SOMETHING TO DO WITH THE INTERACTION BETWEEN THE CSS WIDTH VALUES

# 10/7/2023:
need to run final passes after decision on width values in work sections are decided.

# 10/28/2023:
routing via react-router-dom cannot be handled by github pages.
need to install gh-pages dependency at least
reloading has a 404 issue due to react router not vite

needed to migrate data to a new repo because:
1. i didn't know how to configure the old one to handle deployment on github pages
2. curt needed to own the repo anyway. 

reference to test for routing:
https://www.youtube.com/watch?v=uEEj2c3_ydg

# 10/29/2023:
worked out initial issues with new repo for deploying vite react app w/ react-router-dom routing with test pages.
also migrated all the data from the other repo and modified linking/routing so places go where they need to. 
testing UI to make sure nothing breaks + fixing what is broken.

note to curt that the debugging onclick on home page's R (in Russell) still exists as opposed to the onmouseenter/onmouseleave pair in case we need to test for other browsers.

also remind curt to test for other browsers.

technically portfolio is live.
