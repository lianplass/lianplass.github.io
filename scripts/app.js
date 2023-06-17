// Array to hold the project data from Google Sheets
let projectData = [];

// Function to create a card for a project
function createProjectCard(project) {
    const html = `
    <div class="col">
        <div class="card project-card">
            <img src="${project.thumbnail_url}" class="card-img-top project-thumbnail" alt="${project.project_name}">
            <div class="card-body d-flex flex-column">
                <table class="table project-table">
                    <tbody>
                        <tr>
                            <td style="font-weight:bold">${project.project_name}</td>
                        </tr>
                        <tr>
                            <td style="color:grey"><b>Project Year:</b> ${project.year}</td>
                        </tr>
                        <tr>
                            <td style="font-size:small; color:grey;"><div style="height:100px; overflow:auto">${project.description}</div></td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-auto">
                <a style="width:100%; height:35px; font-size:small; background-color:gray; border:none; text-align:bottom" target="_blank" href="${project.link}" class="btn btn-primary">Click to Learn More</a>
                </div>
            </div>
        </div>
    </div>`;
    return html;
}

function loadFilterOptions() {
    const types = [...new Set(projectData.map(project => project.type))];
    types.forEach(type => {
        $('#type-filter').append(`<option value="${type}">${type}</option>`);
    });
}
    

// Function to load data from Google Sheets
function loadProjectData() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1kp5n5rXxZLvK_th2qiNOpUbpJQ-ipC8jRHhz2Fu7WFM/values/Sheet1?key=AIzaSyC-PKKIgdRLA5bL_72Gs16m9ADwFdPrfus`)
    .then(response => response.json())
    .then(data => {
        data.values.slice(1).forEach(item => {
            projectData.push({
                "project_name": item[0],
                "year": item[1],
                "thumbnail_url": item[2],
                "description": item[3],
                "link": item[4],
                "type": item[5]
            });
        });
        loadFilterOptions();
        const projectCards = projectData.map(createProjectCard).join('\n');
        $('#project-cards').html(projectCards);
    });
}


// Load project data and add project cards to the page
$(document).ready(function() {
    loadProjectData();
});

// Filter change event
$('#type-filter').on('change', function() {
    const selectedType = $(this).val();
    const filteredData = selectedType ? projectData.filter(project => project.type === selectedType) : projectData;
    const projectCards = filteredData.map(createProjectCard).join('\n');
    $('#project-cards').html(projectCards);
});