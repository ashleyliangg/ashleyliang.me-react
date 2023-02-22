# ashleyliang.me website
## Ashley Liang


## Overview
This website, after running npm deploy, will deploy to ashleyliang.me. This is a multi-page website that is both computer and laptop friendly. On a computer, you'd see a navigation bar with the different pages listed out. On a mobile device or screen with a smaller window, you'd see a drop-down icon with the different pages listed out there. Overall, this website was a really great process for me to learn React and React/HTML/JS/CSS's different features, try out different front-end skills, implement different APIs (I used leaflet and maptiler to visualize my roadtrip map), and debug using inspect element. The pages folder contains the .js files of the pages in my website, such as homepage.js for the homepage. The components folder contains the navigation bar and sidebar code.

## View At
ashleyliang.me

### Credits
While creating this website, I took a lot of information from different website and videos. To set up my React project, I followed the instructions from this website: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/. I learned how to create the dropdown menu (for mobile) with this video: https://www.youtube.com/watch?v=Nl54MJDR2p8&t=4458s. To create the roadtrip map with leaflet, this video was particularly helpful: https://www.youtube.com/watch?v=i9oX1upSKjI&list=PLKmmzLM3RgQVFqnNqn3CI2Cxg4Rd__VbK.

## Favorite Features
- Mobile friendly: sidebar navigation for smaller screen widths, almost every styling is with vw and vh to account for smaller devices
- Roadtrip map (can zoom in and out) with clickable pins that bring up popups with a description of my experience at that stop
- Hyperlinks in the images in the Contact page
- Styling on the homepage
- Photo gallery on home page

## My Experience
This website was the first time I've really had to use React. I helped fix some margin and styling in React during an internship my senior summer, but this was my first time creating something - especially from scratch - in React. It took me a few days to create the React app and get it to run because there were a lot of inital errors with setting up my GitHub repository through command line, pushing to the repository due to access issues, installing node.js/npm. Then, when I was attempting to connect my domain to the Github page, I had a typo in my package.json file which didn't let my React package to connect to the domain until I saw the typo a couple days later. Throughout the inital setup process, I learned a lot about how to search up my errors, installing packages, and adding packages to my PATH.

I then took some time to learn React through watching tutorials and making sense of the existing code in React website tutorials. I applied navigation bar features that I liked from other tutorial websites and videos into my own navigation bar. I also tried to add other features I wanted to have to my navigation bar. I initially had it so that my resume link on the navigation bar sent the user to my google drive link of my resume's PDF instead of another page on my website. However, later after asking for people's opinion, I decided to create a new page for the resume and embed it on there for user friendliness. 
I really wanted to make my website mobile-friendly, so I added a sidebar navigation screen if the screen window was less than 480px as well as played around with frontend styling to make the display nicer on mobile screens. Fixing styling details took up a significant amount of time, and I learned a lot about utilizing inspect element to try out different styling features before adding them to my code or figure out where the issue was occuring. Also, classnames were really helpful in identifying which component corresponded to which HTML tag in inspect element.

Another feature I had in mind when designing my website was a map to display my roadtrip so that I'd be able to try out the Google Maps API. I tried implementing the Google Maps API by installing the Google Maps API package, getting an API key, and following some online tutorials. However, although the div tags showed up on the website, the map wasn't showing up. After doing some searching, I realized that since Google automatically charges your account after a certain number of people visit your site, etc, the maps might not work until after inputting your credit card information. Because of this, I decided to use other free maps APIs instead. I tried out a couple APIs to see which worked best with what I had in mind with the maps feature, and I settled on using leaflet and maptiler. 

After I finished developing everything I wanted to have on my website, I asked people for feedback on how to improve it. From their suggestions, I added images for the programming languages I knew on my homepage, made the roadtrip map skinnier for easier scrollability, added a resume page with an embedded PDF, and added images for my contact page.

Another issue I had was embedding a PDF. The PDF wasn't showing up; a smaller version of my website was rendering onto the resume page instead. I was pretty confused on how to go about solving the issue, so I went to Dali's office hours. After switching from running npm through Ubuntu to Powershell, it produced an error with the PDF, so we were able to fix the error and render the PDF. After this, I had an issue where React's PDF component automatically creates div tags with specific styling, so I had to override this in my index.css. However, I still had issues of the PDF being weirdly blurry when I increased the width and height as well as the highlightable text not being in the same space as the PDF image, so I ended up converting it to a JPG, which made it look a lot nicer and still performed the same function I was going for.

Overall, I was proud that I was able to develop all these features with very little previous front-end experience as well as fix all the issues I had almost entirely on my own. I'm proud that I was able to persevere through all the issues that came up and didn't give up on a feature that I wanted just because it wouldn't work the first few times.

## How To Run Locally
To run files on your local computer, run `npm start`

## How To Deploy To Website
To deploy new changes to ashleyliang.me, run `npm run deploy`

## Available Scripts From React Package

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the React application to the domain.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
