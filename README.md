# Covid Dashboard assignment:

I had the task of building out a Covid dashboard using an API endpoint provided to me.

The project requirements were:

1. Be a Covid dashboard;
2. Make use of Redux using the toolkit;
3. Include an auto-complete/lookahead search.

I had the weekend to finish the assignment but not all of the weekend available to me. The project took approximately 6-8 hours to complete. Not all features intended for were made into the final build.

## Feedback/Thoughts

1. The data from the API was incomplete and had to be processed.

The data had multiple entries per country that had to be consolidated. Not all countries had data and many of the entries had incomplete data.

I opted to shape my own object when the API call was made so that dealing with the data was more manageable. I chose to use a lookup table for my countries instead of an array so that I could access the data O(1) instead of O(n).

The data from the endpoint didn't give much leeway in terms of representing the data. It only contained the figures "Confirmed", "Recovered", "Active" and "Deaths", all of which were represented in the App. There was no period data so I couldn't build out graphs like a line graph to show changes over a term.

2. Challenging to make UI components within the time frame.

I built my own bar graphs, used d3 to make bar graphs and also used the library Recharts to build even more bar graphs. Unfortunately, I chose not to use any of them at the of the project as I didn't have suitable data to make use of a bar graph (the range is too far between the 4 stats available).

## Closing:

It's been a while since I've worked with Redux and it was fun to use with the toolkit. I've also managed to further develop my d3 skills so I feel like I have gained something of value while building out this app.
