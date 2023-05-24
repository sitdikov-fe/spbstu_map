mapboxgl.accessToken = 'pk.eyJ1IjoicmFpbmRyb3BzcyIsImEiOiJjbGNveTQxNDMxbDR6M29yeWZ2bWd2NDhpIn0.l0atth5QPeIE_PzJGhHiRA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/raindropss/clcp22nlh002q14mqj7ytqoxo',
    center: [30.37291329462266, 60.00729726351207],
    zoom: 16 // starting zoom
});

function setSource(call) {
    // Add a data source containing GeoJSON data.
    map.addSource('SPBSTU', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Spbstu.
                'coordinates': [
                    [
                        [30.369278495508585, 60.010294292375825],
                        [30.376326634241376, 60.009071159529036],
                        [30.377045754028796, 60.01013716866941],
                        [30.379841739824204, 60.009637852757415],
                        [30.379596049248285, 60.00926622689307],
                        [30.381730114279303, 60.00890928647701],
                        [30.381263928702523, 60.008224560746655],
                        [30.385515804075215, 60.0075304668284],
                        [30.382054570663403, 60.00229109261343],
                        [30.378959734309255, 59.99924250109582],
                        [30.377155245772055, 59.99664839991196],
                        [30.365119545720784, 59.998187953074705],
                        [30.366094080022698, 60.00141643218378],
                        [30.36990213905738, 60.00719287395078],
                        [30.369278495508585, 60.010294292375825]
                    ]
                ]
            }
        }
    });

    map.addSource('SPBSTU2', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Spbstu.
                'coordinates': [
                    [
                        [30.385289827866284, 60.00757478063049],
                        [30.387210259688146, 60.01030453273883],
                        [30.38993542240966, 60.01073886154089],
                        [30.391812944343144, 60.01037421789215644],
                        [30.39112808438596, 60.00947127994271],
                        [30.393102203959405, 60.00904224856677],
                        [30.390634095666886, 60.00670771117947],
                        [30.385289827866284, 60.00757478063049]
                    ]
                ]
            }
        }
    });

    map.addSource('SPBSTU3', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Spbstu.
                'coordinates': [
                    [
                        [30.342154895677876, 59.98515485279307],
                        [30.341339506436412, 59.98698491869661],
                        [30.348302512744816, 59.987682523233616],
                        [30.349053516682655, 59.98583638352592],
                        [30.342154895677876, 59.98515485279307]
                    ]
                ]
            }
        }
    });

    map.addSource('SPBSTU4', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Spbstu.
                'coordinates': [
                    [
                        [30.35779466885223, 59.99585131141121],
                        [30.360271411617532, 59.99440715885749],
                        [30.359022147037777, 59.99390500163677],
                        [30.35264916936759, 59.99483318418451],
                        [30.352960334268566, 59.99550383207934],
                        [30.355781982032692, 59.99507993256796],
                        [30.35779466885223, 59.99585131141121]
                    ]
                ]
            }
        }
    });
}

function drawLayers(call) {
    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'SPBSTU',
        'type': 'fill',
        'source': 'SPBSTU', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#34b549', // blue color fill
            'fill-opacity': 0.2
        }
    });

    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'SPBSTU',
        'layout': {},
        'paint': {
            'line-color': '#34b549',
            'line-width': 2
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'SPBSTU2',
        'type': 'fill',
        'source': 'SPBSTU2', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#34b549', // blue color fill
            'fill-opacity': 0.2
        }
    });

    map.addLayer({
        'id': 'outline2',
        'type': 'line',
        'source': 'SPBSTU2',
        'layout': {},
        'paint': {
            'line-color': '#34b549',
            'line-width': 2
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'SPBSTU3',
        'type': 'fill',
        'source': 'SPBSTU3', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#34b549', // blue color fill
            'fill-opacity': 0.2
        }
    });

    map.addLayer({
        'id': 'outline3',
        'type': 'line',
        'source': 'SPBSTU3',
        'layout': {},
        'paint': {
            'line-color': '#34b549',
            'line-width': 2
        }
    });


    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'SPBSTU4',
        'type': 'fill',
        'source': 'SPBSTU4', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#34b549', // blue color fill
            'fill-opacity': 0.2
        }
    });

    map.addLayer({
        'id': 'outline4',
        'type': 'line',
        'source': 'SPBSTU4',
        'layout': {},
        'paint': {
            'line-color': '#34b549',
            'line-width': 2
        }
    });
}

map.on('load', () => {
    setSource();
    drawLayers();
});



class PitchToggle {
    constructor({ bearing = -20, pitch = 70, minpitchzoom = null }) {
        this._bearing = bearing;
        this._pitch = pitch;
        this._minpitchzoom = minpitchzoom;
    }

    onAdd(map) {
        this._map = map;
        this._btn = document.createElement("button");
        this._container = document.createElement("div");
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

class MapboxGLButtonControl {
    constructor({
        className = "",
        title = "",
        eventHandler = evtHndlr
    }) {
        this._className = className;
        this._title = title;
        this._eventHandler = eventHandler;
    }

    onAdd(map) {
        this._btn = document.createElement("button");
        this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className;
        this._btn.type = "button";
        this._btn.title = this._title;
        this._btn.onclick = this._eventHandler;
        this._container = document.createElement("div");
        this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
        this._container.appendChild(this._btn);
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    }), "top-left"
);

const ctrlPoint = new MapboxGLButtonControl({
    className: "mapbox-gl-draw_point",
    title: "Default location",
    eventHandler: def
});

function def(event) {
    map.flyTo({
        center: [30.37291329462266, 60.00729726351207],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        zoom: 16
    });
}


map.addControl(new mapboxgl.NavigationControl(), "top-left");
map.addControl(new PitchToggle({ minpitchzoom: 11 }), "top-left");
map.addControl(ctrlPoint, "top-left");
