# Exoplanets_Explorer

In this project I've imported Kepler's telescope data of exoplanets in a .csv
format, parsed it and used a few filters to extract some top-notch Earth-like alternatives. Once again I've commented out parts of my code just for myself. These are not production-level comments as they are quite explanatory.

### Filtering

I've filtered the planets using three properties in the .csv file:

1. Disposition - (whether it's a confirmed exoplanet, is yet to be confirmed or a false positive)

2. Stellar flux values - [koi_insol] property. It's the energy of radiation emitted by the star passing every second through a unit area. It's a key factor in determining how habitable an exoplanet actually is.

3. Radii - [koi_prad] property. There are limits on how large a rocky planet can become before it starts to possess increasingly large amounts of water, hydrogen and helium as well as other volatiles making the planet a Neptune-like world with no real prospect of being habitable. 


### Result

After applying the mentioned filters this was the result:
![exoplanets](<Images/Screenshot from 2024-01-05 17-46-37.png>)

Kepler-442b deserves a special mention as this is a prime candidate 
for Earth-like conditions. Unfortunately, if we consider traveling at light-speed possible, it would still take a spacecraft about a 1000 years to travel from Earth's perspective to 442b.