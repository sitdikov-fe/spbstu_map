const button = document.querySelector('.custom-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close');
const closeBtn = document.querySelector('.closebtn');
const sidebarText = document.querySelector('.sidebar-text');
const leftB = document.querySelector('.leftB');
const wrap = document.querySelector('.wrap');

button.addEventListener('click', () => {

    let screenWidth = window.innerWidth;
    let sidebarWidth = screenWidth * 0.25;
    sidebar.style.width = sidebarWidth + "px";

    setTimeout(() => {
        closeBtn.style.display = "block";
        sidebarText.style.display = "block";
        leftB.style.display = "block";
        wrap.style.display = "block";
    }, 200);
});


/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    sidebar.style.width = "0";
    setTimeout(() => {
        closeBtn.style.display = "none";
        sidebarText.style.display = "none";
        leftB.style.display = "none";
        wrap.style.display = "none";
    }, 90);

}


let directionsControlAdded = false;
const button2 = document.querySelector('.custom-button2');
const closeButton2 = document.querySelector('.close2');

button2.addEventListener('click', () => {
    if (!directionsControlAdded) {
        map.addControl(
            directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                controls: {
                    instructions: false
                }
            }),
            'bottom-left'
        );
        directionsControlAdded = true;
        button2.style.display = 'none';
        closeButton2.style.display = 'block';
    }
});

closeButton2.addEventListener('click', () => {
    if (directionsControlAdded) {
        map.removeControl(directions);
        button2.style.display = 'block';
        closeButton2.style.display = 'none';
        directionsControlAdded = false;
    }
});

closeButton2.style.display = 'none';

const input = document.getElementById("searchTerm");
input.addEventListener("input", search);

function search() {
    const value = input.value.toLowerCase();
    if (value.length === 0 || value == "-") {
        const resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML = "";
        return;
    }
    let nameMapping = {};
    const arrays = [b_name, b_name_a, b_name_b, d_name, d_name_a, m_name, m_name_a];
    arrays.forEach(array => {
        array.forEach(item => {
            if (item.toLowerCase().includes(';')) {
                const subResults = item.split(';').map(subItem => subItem.trim())
                    .filter(subItem => subItem.toLowerCase().indexOf(value) !== -1);
                subResults.forEach(subResult => {
                    nameMapping[subResult] = item;
                });
            } else if (item.toLowerCase().indexOf(value) !== -1) {
                nameMapping[item] = item;
            }
        });
    });
    // limit the results to 3
    const results = Object.keys(nameMapping).slice(0, 5);
    // display the results
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
    results.forEach((result, index) => {
        const resultBox = document.createElement("div");
        resultBox.classList.add("resultBox");
        resultBox.innerHTML = result.substring(0, 30).trim() + (result.length > 30 ? "..." : "");
        resultsContainer.appendChild(resultBox);
        // Add click event listener to the resultBox
        resultBox.addEventListener("click", () => {
            const originalName = nameMapping[result];
            // Determine the coordinates array to use based on the original name
            let coordinates;
            if (b_name.includes(originalName)) {
                coordinates = buildings[b_name.indexOf(originalName)];
            } else if (b_name_a.includes(originalName)) {
                coordinates = buildings[b_name_a.indexOf(originalName)];
            } else if (b_name_b.includes(originalName)) {
                coordinates = buildings[b_name_b.indexOf(originalName)];
            } else if (d_name.includes(originalName)) {
                coordinates = dormitory[d_name.indexOf(originalName)];
            } else if (d_name_a.includes(originalName)) {
                coordinates = dormitory[d_name_a.indexOf(originalName)];
            } else if (m_name.includes(originalName)) {
                coordinates = metro[m_name.indexOf(originalName)];
            } else if (m_name_a.includes(originalName)) {
                coordinates = metro[m_name_a.indexOf(originalName)];
            }
            // Use the map.flyTo() method to fly to the location
            map.flyTo({
                center: coordinates,
                essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                zoom: 16
            });

            // Close all popups before opening the corresponding one
            markers.forEach(marker => {
                marker.getPopup().remove();
            });

            // Open the popup for the corresponding marker
            markers.forEach(marker => {
                if (marker._lngLat.lng === coordinates[0] && marker._lngLat.lat === coordinates[1]) {
                    marker.togglePopup();
                }
            });
        });
    });
}
