###navigations
::john p : navigation news componentized(isolated) but also dynamic using some sort of route script
::: first isolate; come back in and 2 make it dynamic
::: john p uses nginclude for the navigation bars(***not sure if this is the best practice anymore***)


###dev environment

: issues regarding (html 5 mode) and (nested ui view in a shell directive):

: ui bootstrap & ui router projects(not using html5 mode)
::preface note on html 5 mode: both ui bootstrap & ui router projects not using html 5 mode in their git h-pages

::html 5 mode: unable to get it with github

::atom server::
::works well without html 5 mode & without shell component/directive(goes directly tohome page)
::atom-server: unable to html 5 mode working there as well
::architecture: john p uses nginclude 2 include all of main page elements
::::unable to get that the work: nginclude with a nested you are router you
::::the route does not registert he route does not register/read page/route
::behavior::
::server start: is not go to 'opening' route (in this case'/' need to type it in)
::after routers tighten: goes to the proper route and the nested ui router populates
::topnav is a directive in this show: no problem with that that populates(so it is isolated to the ui view  div)
::on refresh also a problem:: completely disappears

::github::
: behavior(with using a show and a nested you are relative(nginclude & dir))
::same behavior when upload it to git h
::::routing doesn't register
::::uiview in the html does  not render
:: pressing(or once on the correct route) ui view does populate
::::refreshing: but again refreshing does not work


###github & git (put this in git & git hub eventually at the end of this project)
:gh-pages & master  - how to work with and develop
::keeping them in sync
::1 way just work with gh-pagesand when you want to sync with master
:::: from  gh-pages
:::: git checkout master
:::: git pull origin gh-pages
:::: git push


###how to solve problems and move on fast
: break down & behavior:
: get to the nearest working base
: move on in the short term (don't get stuck)
: submit it as a question: or/and problem solve later or long term focused

###ngincludes changed to directives (by the end-for example footer)

###shell component/dir
: media working

###style guide routing(2) / routing in the individual components(1)
: (1)individual routing components using, seemingly, or angular js/ui router familiar pattern
:: meaning: injecting the state provider & setting/configuring state property(of the state provider)
:: in relative components route.js file
:: module config method also involved(obviously can be used multiple times 1 app )
[got the convention/clarification from issues on git style guide](https://github.com/johnpapa/angular-styleguide/issues/565)
O::core route: for otherwise and 404's using this convention
O: (2)set on the agenda told understand the style guide pattern

###gallery(testing & componentizing)
O: testing
O: componentizing


###toDateString: issues that are faced
::module(...) : all dependencies of the module you are injecting o calling in the specneed to be listed in the files section of karma config file***important***this caused me hours troubleshooting
: angular-marks in files: needs to be loaded before the spec files
::wildcarding in karma be careful: when wildcarding it loads the files often medically(or the way they find them) so the spec file may be loaded beforethe application files(controller might be loaded before the module)
