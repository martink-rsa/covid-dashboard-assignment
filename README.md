# Covid Dashboard assignment:

![image](https://user-images.githubusercontent.com/52622303/120093224-15433000-c119-11eb-89ce-21d5929c3f32.png)

## Intro:

I had the task of building out a Covid dashboard using an API endpoint provided to me.

The project requirements were:

1. Be a Covid dashboard;
2. Make use of Redux using the toolkit;
3. Include an auto-complete/lookahead search.

I had the weekend to finish the assignment but not all of the weekend available to me. The project took approximately 6-8 hours to complete, however about 2-3 hours were used in building bar graph components that never made it into the final build.

## Installing and Get Started Guide

### Clone the repo

Copy the files to your computer.

### Install dependencies: `yarn` or `npm install`

Install the dependencies.

### Start dev server: `yarn start` or `npm start`

Server should start at `localhost:3000`.

## Tech/stack:

The following was used in the app:
* React
* Redux with Toolkit
* styled-components
* react-simple-maps (uses  d3)
* Font Awesome icons

Not in build:
* d3 (Built bar charts)
* Recharts (Built bar charts)

## Task notes:

1. The data from the API was incomplete and had to be processed:

The data had multiple entries per country that had to be consolidated. In addition to this:
* some countries weren't included in the data; 
* some country's entries had incomplete data;
* some country's entries had errors in  the data. 

I opted to shape my own object when the API call was made so that dealing with the data was more manageable. I chose to use a hash table for my data instead of an array so that I could access the countries using a key. This had the advantage of O(1) time complexity over the original O(n).

The data from the endpoint didn't give much leeway in terms of representing the data. It only contained the figures "Confirmed", "Recovered", "Active" and "Deaths", all of which are being represented in the App as cards. There was no period data so I couldn't build out graphs e.g. line graph showing changes over a period of time.

2. Bar charts

I built my own bar graphs, used d3 to make bar graphs and also used the library Recharts to build even more bar graphs. Unfortunately, I chose not to use any of them at the of the project as I didn't have suitable data to make use of a bar graph (the range is too far between the 4 stats available). The bar graphs would have been suitable if I was to compare stats between countries but this feature wasn't included in the app.

## Thoughts:

It's been a while since I've worked with Redux and it was fun to use with the toolkit. I've  managed to further develop my d3 skills so I feel like I have learnt something while building out this app.
