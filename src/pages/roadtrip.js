import { React, useState, useRef } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import osmProviders from '../osm-providers';
import "leaflet/dist/leaflet.css";
import L from "leaflet";


//icon for the stops on the trip, larger size because image smaller
const tripPin = new L.icon({
  iconUrl: require("../images/pushpin.png"),
  iconSize: [35, 35],
})

//icon for the start and end of the trip
const endIcon = new L.icon({
  iconUrl: require("../images/startend.png"),
  iconSize: [55, 55],
})
  
//Coordinates from Google search
const tripCoord = [
  [ 43.7044, -72.2887 ], //Dartmouth
  [ 45.5019, -73.5674 ], //Montreal
  [ 45.4215, -75.6972 ], //Ottowa
  [ 43.6532, -79.3832 ], //Toronto
  [ 43.0896, -79.0849 ], //Niagara Falls
  [ 42.8864, -78.8784 ], //Buffalo
  [ 38.9072, -77.0369 ], //D.C
  [ 36.1627, -86.7816 ], //Tennessee
  [ 41.8781, -87.6298 ], //Chicago
  [ 43.8554, -102.3397 ], //South Dakota
  [ 39.7392, -104.9903 ], //Colorado
  [ 44.5263, -109.0565 ], //Wyoming
  [ 47.6769, -122.2060 ], //Home
]

const Trip = () => {
  //played around with the center before finding a good center for US map
  const [center, setCenter] = useState({lat: 40.0910, lng: -95.7129});
  const ZOOM_LEVEL = 4;
  const mapRef = useRef();

  return (
    //didn't put classname page as div because map becomes off-centered when that happens
    <div>
        <h1 className='header'>My cross-country roadtrip!</h1>
        <p className='bodyText' style={{margin: '10px'}}>
          During the month of June 2022, my family went on a cross-country roadtrip where we traveled through 19
          states and 2 Canadian provinces. Below is the approximate journey we took, starting fom the blue pin on the 
          east coast (at Dartmouth) and ending at the blue pin on the west coast (Kirkland, WA).
        </p>
        <p className='bodyText' style={{fontWeight: 'bold', fontStyle: 'italic', margin: '10px'}}>
          Click on the pins below to read more about each of our stops on the trip!
        </p>
        <div className='map'>
          <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            style={{width: '80vw'}}
          >
            <TileLayer url={osmProviders.maptiler.url} attribution={osmProviders.maptiler.attribution} />

            {/****** BELOW ARE ALL THE MAP MARKERS FOR THE TRIP *******/}

            <Polyline pathOptions={{ color: 'purple'}} positions={tripCoord} />

            {/* starting point: Dartmouth */}
            <Marker position={tripCoord[0]} icon={endIcon}>
              <Popup>
                <h3>1: Dartmouth College (START)</h3>
                <b>My freshman year finished, and the roadtrip began!</b>
              </Popup>
            </Marker>

            {/* Montreal */}
            <Marker position={tripCoord[1]} icon={tripPin}>
              <Popup>
                <h3>2: Montreal, Quebec</h3>
                <b>
                  A really beautiful city. As Quebec is a French-speaking province, it was a little hard to communicate there.
                </b>
              </Popup>
            </Marker>

            {/* Ottowa */}
            <Marker position={tripCoord[2]} icon={tripPin}>
              <Popup>
                <h3>3: Ottowa, Ontario</h3>
                <b>Parliament Hill was such a cool experience. We went on a tour of the House of Commons.</b>
              </Popup>
            </Marker>

            {/* Toronto */}
            <Marker position={tripCoord[3]} icon={tripPin}>
              <Popup>
                <h3>4: Toronto, Ontario</h3>
                <b>We visited my dad's old classmate that he hasn't seen since university! We also toured Casa Loma.</b>
              </Popup>
            </Marker>

            {/* Niagara Falls */}
            <Marker position={tripCoord[4]} icon={tripPin}>
              <Popup>
                <h3>5: Niagara Falls, Canada</h3>
                <b>The Canadian side of Niagara Falls was gorgeous! I loved jogging back and forth along the scenic path. </b>
              </Popup>
            </Marker>

            {/* Buffalo, NY: buffalo-style pizza is severely underappreciated */}
            <Marker position={tripCoord[5]} icon={tripPin}>
              <Popup>
                <h3>6: Buffalo, NY</h3>
                <b>Back in the US! We tried Bocce Club Pizza, and buffalo-style pizza is severly underappreciated.</b>
              </Popup>
            </Marker>

            {/* Washington D.C */}
            <Marker position={tripCoord[6]} icon={tripPin}>
              <Popup>
                <h3>7: Washington, D.C</h3>
                <b>
                  A fun and packed day of walking around seeing the Capitol, White House, Supreme Court, 
                  Washington Monument, Smithsonian Museums, and more.
                </b>
              </Popup>
            </Marker>

            {/* Tennessee */}
            <Marker position={tripCoord[7]} icon={tripPin}>
              <Popup>
                <h3>8: Nashville and Knoxville, Tennessee.</h3>
                <b>
                  A great time trying southern food, touring the Country Music Hall of Fame, and enjoying the live 
                  music. We also explored the Smoky Mountains and saw black bear cubs up close! A personal 
                  highlight was getting to see the Parthenon and Athena Parthenos replicas.
                </b>
              </Popup>
            </Marker>

            {/* Chicago, IL  */}
            <Marker position={tripCoord[8]} icon={tripPin}>
              <Popup>
                <h3>9: Chicago, IL</h3>
                <b>
                  Highlights: the Bean, the Riverwalk, good dim sum, and the Navy Pier where we also got to watch
                  an international sailing competition! Canada won!
                </b>
              </Popup>
            </Marker>

            {/* South Dakota */}
            <Marker position={tripCoord[9]} icon={tripPin}>
              <Popup>
                <h3>10: South Dakota</h3>
                <b>
                  So many cool places and experiences: the Badlands (not only the unique land formations, but also
                  the animals like bison, prairie dogs, and big-horned sheep!), the Black Hills, Mount Rushmore, 
                  Wind Cave National Park, and a mammoth museum!
                </b>
              </Popup>
            </Marker>

            {/* Colorado */}
            <Marker position={tripCoord[10]} icon={tripPin}>
              <Popup>
                <h3>11: Colorado</h3>
                <b>
                  The Rocky Mountains were breathtaking, and there were so many animals such as deer and marmots. 
                  Colorado-style pizza was also quite good!
                </b>
              </Popup>
            </Marker>

            {/* Wyoming */}
            <Marker position={tripCoord[11]} icon={tripPin}>
              <Popup>
                <h3>12: Cody, WY</h3>
                <b>
                  We got to visit Old Trail Town, a historic reconstruction on the original townsite of Cody where 
                  we were able to see pieces of history from the 'Wild West.' We didn't get to explore much of 
                  Yellowstone because of the even/odd license plate restrictions, but we got to explore Shoshone 
                  National Forest instead.
                </b>
              </Popup>
            </Marker>

            {/* end point: Kirkland, WA (not actual home address) */}
            <Marker position={tripCoord[12]} icon={endIcon}>
              <Popup>
                <h3>13: Kirkland, WA (END)</h3>
                <b>After a month on the road, we were finally home!</b>
              </Popup>
            </Marker>

          </MapContainer>
        </div>
    </div>
  );
};
 

export default Trip;