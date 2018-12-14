mapboxgl.accessToken = 'pk.eyJ1Ijoia2llYm8wMDkiLCJhIjoiY2pwbzRlM2lzMDN5MTQ4bG4zZGVrZWk0YyJ9.gPUAa31lClL7-CcfW8eeJg';

var mystyle = {
    "version": 8,
    "name": "data",
    "glyphs": "https://geodata.nationaalgeoregister.nl/beta/topotiles-viewer/font/{fontstack}/{range}.pbf",
    "sources": {
        "wm_vector":{
            "type": "vector",
            "url": "https://geodata.nationaalgeoregister.nl/beta/topotiles-viewer/styles/tilejson.json"
       }
    },
    "layers": [
        {
            "id":  "background",
            "type": "background",
            "paint": {
                "background-color":"#D6F1E9"
            }
        },
        {
            "id": "country",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "admin",
            "maxzoom": 20,
            "minzoom": 0,
            "filter": ["==", "lod1", "country"],
            "paint": {
                "fill-color" : "#ffffff",
                "fill-outline-color": "#cccccc"
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "water",
            "maxzoom": 20,
            "minzoom": 0,
            "paint": {
                "fill-color" : "#80bde3",
                "fill-outline-color": "#80bde3"
            }
        },
         {
            "id": "terrain_z0-Z12",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "terrain",
            "maxzoom": 12,
            "minzoom": 0,
            "paint": {
                "fill-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["open", "#fefcea"],
                        ["low_vegetation", "#ffffff"],
                        ["agriculture", "#ffffff"],
                        ["closed", "#ffffff"],
                        ["high_vegetation", "#C3DBB5"]
                    ],
                    "default": "#ffffff"
                }
            }
        },
         {
            "id": "terrain_z12-Z20",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "terrain",
            "maxzoom": 20,
            "minzoom": 12,
            "filter": [">=", "z_index", 0],
            "paint": {
                "fill-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["open", "#fefcea"],
                        ["low_vegetation", "#ffffff"],
                        ["agriculture", "#ffffff"],
                        ["closed", "#ffffff"],
                        ["high_vegetation", "#C3DBB5"]
                    ],
                    "default": "#ffffff"
                },
                "fill-outline-color": "#c1c1c1"
            }
        },
        {
            "id": "water_line",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "water-line",
            "maxzoom": 20,
            "minzoom": 10,
            "paint": {
                "line-color" : "#80bde3",
                "line-width": {
                    "stops":[
                        [10, 0.1],
                        [11, 0.3]
                ]
                }
            }
        },
        {
            "id": "urban_z0-Z12",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "urban",
            "maxzoom": 12,
            "minzoom": 0,
            "paint": {
                "fill-color" :{
                    "property": "lod1",
                    "type": "categorical",
                    "stops": [
                        ["urban_area", "#E3DCE7"],
                        ["buildings", "#cccccc"]
                    ]
                },
                "fill-outline-color": {
                    "property": "lod1",
                    "type": "categorical",
                    "stops": [
                        ["urban_area", "#E3DCE7"],
                        ["buildings", "#cccccc"]
                    ]
                }
            }
        },
        {
            "id": "urban_z12-Z20",
            "type": "fill",
            "source": "wm_vector",
            "source-layer": "urban",
            "maxzoom": 20,
            "minzoom": 12,
            "filter": [">=", "z_index", 0],
            "paint": {
                "fill-color" :{
                    "property": "lod1",
                    "type": "categorical",
                    "stops": [
                        ["urban_area", "#E3DCE7"],
                        ["buildings", "#cccccc"]
                    ]
                },
                "fill-outline-color": {
                    "property": "lod1",
                    "type": "categorical",
                    "stops": [
                        ["urban_area", "#c1c1c1"],
                        ["buildings", "#c1c1c1"]
                    ]
                }
            }
        },
        {
            "id": "roads_case",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 20,
            "minzoom": 6,
            "filter": ["==", "lod1", "roads"],
            "layout" :{
                "line-cap" : "round",
                "line-join": "round"
            },
            "paint": {
                "line-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["local", "#d1c1be"],
                        ["arterial", "#d1c1be"],
                        ["highway" , "#E69801"]
                    ]
                },
                "line-width" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["local", 2],
                        ["arterial", 3.4],
                        ["highway" , 4.1]

                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "roads_fill",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 20,
            "minzoom": 6,
            "filter": ["==", "lod1", "roads"],
            "layout" :{
                "line-cap" : "round",
                "line-join": "round"
            },
            "paint": {
                "line-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["local", "#ffffff"],
                        ["arterial", "#fdf6bb"],
                        ["highway" , "#f9e11e"]
                    ]
                },
                "line-width" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        [ "local", 1],
                        ["arterial", 1.8],
                        ["highway" , 2.1]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "train_case",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 20,
            "minzoom": 8,
            "filter": ["==", "lod2", "train"],
            "layout" :{
                "line-cap" : "round",
                "line-join" : "round"
            },
            "paint":{
                "line-color": "#999999",
                "line-width" :  3.5 ,
                "line-opacity": 1
            }
        },
        {
            "id": "train_fill",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 20,
            "minzoom": 8,
            "filter": ["==", "lod2", "train"],
            "layout" :{
                "line-cap" : "butt",
                "line-join" : "round"
            },
            "paint":{
                "line-color": "#ffffff",
                "line-width" :  2,
                "line-dasharray": {
                    "stops":[
                       [4, [1,3]],
                       [8 , [2,2.5]],
                       [10, [2,3]],
                       [12, [2,3]]
                    ]
                },
                "line-opacity": 1
            }
        },
         {
            "id": "province_borders",
            "type": "line",
            "source": "wm_vector",
            "source-layer": "admin",
            "maxzoom": 20,
            "minzoom": 0,
            "filter": ["==", "lod1", "province"],
            "paint": {
                "line-color" : "#cccccc",
                "line-width": 1
            }
        },
        {
            "id": "labels_highway",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 11,
            "minzoom": 7,
            "filter": ["==", "lod2", "highway"],
            "layout": {
                "symbol-placement": "point",
                "symbol-avoid-edges" : true,
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Regular_2_0"],
                "text-size":{
                    "stops":[
                        [0,0],
                        [8, 14],
                        [10, 16]
                    ]
                },
                "text-max-width": 2,
                "text-anchor": "center",
                "text-line-height": 1.5,
                "text-justify": "center",
                "text-padding": {
                    "stops":[
                        [7, 40],
                        [9, 50],
                        [11, 100]
                    ]
                },
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#FFF",
                "text-halo-color": "#FF7F7F",
                "text-halo-width": 5
            }
        },
        {
            "id": "water_labels",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "label",
            "maxzoom": 20,
            "minzoom": 10,
            "filter": ["==", "lod1", "water"],
            "layout": {
                "symbol-placement": "point",
                "symbol-avoid-edges" : false,
                "text-rotate": {
                    "type": "identity",
                    "property": "rotation"
                },
                "text-rotation-alignment":"map",
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Italic_2_0"],
                "text-size":14,
                "text-max-width": 100,
                "text-anchor": "center",
                "text-line-height": 1.5,
                "text-justify": "center",
                "text-padding": 2,
                "text-allow-overlap": true
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#007bc7"
            }
        },
         {
            "id": "building_labels",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "label",
            "maxzoom": 20,
            "minzoom": 17,
            "filter": ["==", "lod1", "building_number"],
            "layout": {
                "symbol-placement": "point",
                "symbol-avoid-edges" : false,
                "text-rotate": {
                    "type": "identity",
                    "property": "rotation"
                },
                "text-rotation-alignment":"map",
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Regular_2_0"],
                "text-size":14,
                "text-max-width": 5,
                "text-anchor": "center",
                "text-line-height": 1.5,
                "text-justify": "center",
                "text-padding": 5,
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#535353"
            }
        },
         {
            "id": "labels_roads_top10",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "infra",
            "maxzoom": 15,
            "minzoom": 11,
            "filter": ["==", "lod2", "arterial"],
            "layout": {
                "symbol-placement": "line",
                "symbol-avoid-edges" : false,
                "symbol-spacing" : 10,
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Regular_2_0"],
                "text-size":{
                    "stops":[
                        [11, 14],
                        [15, 14]
                    ]
                },
                "text-rotation-alignment": "map",
                "text-max-width": 100,
                "text-anchor": "center",
                "text-line-height": 1.5,
                "text-justify": "center",
                "text-padding": 30,
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#535353"
            }
        },
        {
            "id": "low_prior_labels",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "label",
            "maxzoom": 20,
            "minzoom": 8,
            "filter": ["==", "lod1", "residential"],
            "layout": {
                "visibility": "visible",
                "symbol-placement": "point",
                "symbol-avoid-edges" : false,
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Bold_2_0"],
                "text-size":{
                    "property": "z_index",
                    "type": "categorical",
                    "stops":[
                        [1, 10],
                        [10, 12],
                        [100, 14],
                        [1000, 16]
                    ],
                    "default": 10
                },
                "text-max-width": 5,
                "text-anchor": "center",
                "text-line-height": 1,
                "text-justify": "center",
                "text-padding": 20,
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#535353"
            }
        },
        {
            "id": "medium_prior_labels",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "label",
            "maxzoom": 20,
            "minzoom": 7,
            "filter": [">=", "z_index", 10000],
            "layout": {
                "visibility": "visible",
                "symbol-placement": "point",
                "symbol-avoid-edges" : false,
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Bold_2_0"],
                 "text-size":{
                    "property": "z_index",
                    "type": "categorical",
                    "stops":[
                        [10000, 16],
                        [100000, 18]
                    ],
                    "default": 10
                },
                "text-max-width": 5,
                "text-anchor": "center",
                "text-line-height": 1,
                "text-justify": "center",
                "text-padding": 20,
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#535353"
            }
        },
         {
            "id": "high_prior_labels",
            "type": "symbol",
            "source": "wm_vector",
            "source-layer": "label",
            "maxzoom": 20,
            "minzoom": 5,
            "filter": ["==", "z_index", 1000000],
            "layout": {
                "visibility": "visible",
                "symbol-placement": "point",
                "symbol-avoid-edges" : false,
                "text-field":"{name}",
                "text-font": ["Rijksoverheid Sans Text TT Bold_2_0"],
                "text-size": 20,
                "text-max-width": 5,
                "text-anchor": "center",
                "text-line-height": 1,
                "text-justify": "center",
                "text-padding": 20,
                "text-allow-overlap": false
            },
            "paint":{
                "text-opacity": 1,
                "text-color": "#535353"
            }
        }
    ]
}

var map = new mapboxgl.Map({
    container: 'map',
    style: mystyle,
    hash: true,
    zoom: 16,
    pitch: 60,
    bearing: 62.4,
    center: [ 52.0, 5.7]
});
// Make a GEOJSON
var wurjson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.663355588912964,
              51.981662141694045
            ],
            [
              5.663355588912964,
              51.98162084144629
            ],
            [
              5.663229525089264,
              51.98161423340314
            ],
            [
              5.6632187962532035,
              51.98154154486389
            ],
            [
              5.6631168723106375,
              51.98150189652005
            ],
            [
              5.66317856311798,
              51.98143085981622
            ],
            [
              5.6631168723106375,
              51.981407731562754
            ],
            [
              5.663221478462219,
              51.981297046184466
            ],
            [
              5.663275122642517,
              51.98131191438549
            ],
            [
              5.663347542285919,
              51.98124418142966
            ],
            [
              5.663446784019469,
              51.9812805259553
            ],
            [
              5.66356748342514,
              51.98124583345419
            ],
            [
              5.663634538650513,
              51.98131026236341
            ],
            [
              5.663685500621796,
              51.9812937421391
            ],
            [
              5.663795471191405,
              51.9814110355997
            ],
            [
              5.663736462593079,
              51.981427555780755
            ],
            [
              5.663800835609436,
              51.981500244504964
            ],
            [
              5.663725733757019,
              51.981526676739065
            ],
            [
              5.663693547248839,
              51.98155310895756
            ],
            [
              5.663693547248839,
              51.98161753742482
            ],
            [
              5.663570165634154,
              51.981619189435605
            ],
            [
              5.66357284784317,
              51.981655533656955
            ],
            [
              5.663355588912964,
              51.981662141694045
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.661853551864624,
              51.9823526761953
            ],
            [
              5.661858916282654,
              51.98191985437979
            ],
            [
              5.661971569061279,
              51.98190994238084
            ],
            [
              5.661998391151428,
              51.9823526761953
            ],
            [
              5.661853551864624,
              51.9823526761953
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.662513375282288,
              51.9823427642921
            ],
            [
              5.662502646446228,
              51.9818802063708
            ],
            [
              5.662910342216491,
              51.98189342237769
            ],
            [
              5.662910342216491,
              51.98196941434167
            ],
            [
              5.662620663642883,
              51.98195289436048
            ],
            [
              5.662583112716674,
              51.982326244448586
            ],
            [
              5.662534832954407,
              51.98233615635543
            ],
            [
              5.662513375282288,
              51.9823427642921
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.663071274757385,
              51.982190781501984
            ],
            [
              5.663060545921326,
              51.981906638380686
            ],
            [
              5.66319465637207,
              51.981916550380376
            ],
            [
              5.663135647773743,
              51.982184173542905
            ],
            [
              5.663071274757385,
              51.982190781501984
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.663092732429504,
              51.98228659679931
            ],
            [
              5.663076639175414,
              51.9822304292361
            ],
            [
              5.663146376609802,
              51.9822304292361
            ],
            [
              5.663157105445861,
              51.982276684881526
            ],
            [
              5.663092732429504,
              51.98228659679931
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.663323402404784,
              51.982253557064766
            ],
            [
              5.66346287727356,
              51.98195289436048
            ],
            [
              5.663602352142334,
              51.98196611034592
            ],
            [
              5.663768649101257,
              51.98227998885435
            ],
            [
              5.663650631904601,
              51.98227998885435
            ],
            [
              5.663527250289916,
              51.98200575827888
            ],
            [
              5.663398504257202,
              51.98226346898769
            ],
            [
              5.663323402404784,
              51.982253557064766
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.664031505584717,
              51.982147829750474
            ],
            [
              5.664272904396057,
              51.98213791780195
            ],
            [
              5.664294362068176,
              51.982184173542905
            ],
            [
              5.664020776748656,
              51.982197389460126
            ],
            [
              5.664015412330627,
              51.98225686103932
            ],
            [
              5.664283633232117,
              51.982243645139654
            ],
            [
              5.664294362068176,
              51.98230311665745
            ],
            [
              5.663908123970032,
              51.982309724599
            ],
            [
              5.663875937461852,
              51.98197271833719
            ],
            [
              5.6642675399780265,
              51.98196280634992
            ],
            [
              5.664288997650146,
              51.98203549420558
            ],
            [
              5.664036870002747,
              51.982025582232204
            ],
            [
              5.664031505584717,
              51.982147829750474
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.664777159690857,
              51.98231302856941
            ],
            [
              5.664723515510559,
              51.981906638380686
            ],
            [
              5.664820075035095,
              51.98190994238084
            ],
            [
              5.664846897125244,
              51.9820883580265
            ],
            [
              5.665018558502197,
              51.982075142077115
            ],
            [
              5.664975643157959,
              51.98189672637881
            ],
            [
              5.6650614738464355,
              51.98189672637881
            ],
            [
              5.665082931518555,
              51.98213461381862
            ],
            [
              5.664862990379333,
              51.982147829750474
            ],
            [
              5.664868354797363,
              51.98232294047917
            ],
            [
              5.664777159690857,
              51.98231302856941
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.665329694747925,
              51.9822667729615
            ],
            [
              5.665243864059448,
              51.98189672637881
            ],
            [
              5.665544271469116,
              51.98189011837634
            ],
            [
              5.665522813796997,
              51.981956198357196
            ],
            [
              5.665351152420044,
              51.981956198357196
            ],
            [
              5.665377974510192,
              51.9820421021866
            ],
            [
              5.665522813796997,
              51.982038798196214
            ],
            [
              5.665533542633057,
              51.98210818194326
            ],
            [
              5.665388703346252,
              51.98210818194326
            ],
            [
              5.665410161018372,
              51.98221060537343
            ],
            [
              5.665565729141235,
              51.98220399741725
            ],
            [
              5.665571093559265,
              51.98226346898769
            ],
            [
              5.665329694747925,
              51.9822667729615
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.665732026100159,
              51.982237037188355
            ],
            [
              5.665678381919861,
              51.98184716633649
            ],
            [
              5.6657856702804565,
              51.98185047034102
            ],
            [
              5.665801763534546,
              51.98216434965978
            ],
            [
              5.665989518165588,
              51.9821544377149
            ],
            [
              5.665973424911498,
              51.98205201415632
            ],
            [
              5.666075348854064,
              51.982071838089155
            ],
            [
              5.666048526763916,
              51.982197389460126
            ],
            [
              5.6657856702804565,
              51.9822006934388
            ],
            [
              5.665807127952576,
              51.98224034116413
            ],
            [
              5.665732026100159,
              51.982237037188355
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.666268467903137,
              51.982197389460126
            ],
            [
              5.666177272796631,
              51.98181412627781
            ],
            [
              5.666515231132507,
              51.98179099822225
            ],
            [
              5.666515231132507,
              51.98183725432146
            ],
            [
              5.666257739067078,
              51.981857078349336
            ],
            [
              5.666300654411316,
              51.98196941434167
            ],
            [
              5.666542053222656,
              51.981956198357196
            ],
            [
              5.666542053222656,
              51.9820222782406
            ],
            [
              5.666295289993286,
              51.98203549420558
            ],
            [
              5.666332840919495,
              51.98215774169678
            ],
            [
              5.666579604148865,
              51.9821247018672
            ],
            [
              5.666579604148865,
              51.9821940854812
            ],
            [
              5.666268467903137,
              51.982197389460126
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.6668853759765625,
              51.98222382128284
            ],
            [
              5.666933655738831,
              51.98176787015474
            ],
            [
              5.667040944099425,
              51.9817546541108
            ],
            [
              5.667282342910767,
              51.98222051730587
            ],
            [
              5.6668853759765625,
              51.98222382128284
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.666922926902771,
              51.98171830996986
            ],
            [
              5.666880011558533,
              51.981662141694045
            ],
            [
              5.667008757591248,
              51.98165222963805
            ],
            [
              5.667019486427307,
              51.98171830996986
            ],
            [
              5.666922926902771,
              51.98171830996986
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.665217041969299,
              51.98173483003758
            ],
            [
              5.665141940116882,
              51.98133834673074
            ],
            [
              5.6642675399780265,
              51.98137799521935
            ],
            [
              5.664278268814087,
              51.9816291014989
            ],
            [
              5.66396176815033,
              51.98133504268842
            ],
            [
              5.6642138957977295,
              51.98113679970436
            ],
            [
              5.664235353469849,
              51.98131852247327
            ],
            [
              5.665141940116882,
              51.98126235369615
            ],
            [
              5.665302872657776,
              51.98124913750306
            ],
            [
              5.665367245674133,
              51.98173813405038
            ],
            [
              5.665217041969299,
              51.98173483003758
            ]
          ]
        ]
      }
    }
  ]
};
// On Load add GeoJSON SOURCE and LAYER
map.on('load', function (e) {
    // ADD GEOJSON SOURCE
    map.addSource('punten', {
        'type': 'geojson',
        'data': wurjson
    });
    // ADD an extra layer
    map.addLayer({
        'id': 'geojson-points',
        'type': 'fill',
        'source': 'punten',
        'layout': {},
        'paint': {
            'fill-color': '#000fff'
        }
    });
});