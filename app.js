const electricians = [
  {
    name: "Pranav",
    phoneNumber: "6161232524",
    zone: ["DELHI"],
    grievanceElectrician: true,
    assignedSites: [],
  },
  {
    name: "Sidharth",
    phoneNumber: "6161232524",
    zone: ["NOIDA", "GHAZIABAD"],
    grievanceElectrician: false,
    assignedSites: [],
  },
];

const sites = [
  {
    name: "KRISHNA ROY",
    phone: "6163988877",
    city: "NOIDA",
    assignedElectrician: [],
    installationDate: "2023-01-04T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Anuj Gupta",
    phone: "6163988877",
    city: "DELHI",
    assignedElectrician: [],
    installationDate: "2023-10-18T00:00:00.000Z",
    grievance: true,
  },
];

const siteSelect = document.getElementById("site-select");
const newDateInput = document.getElementById("new-date");
const changeDateButton = document.getElementById("change-date-button");
const assignButton = document.getElementById("assign-button");
const assignmentOutput = document.getElementById("assignment-output");

function populateSiteSelect() {
  siteSelect.innerHTML = "";
  sites.forEach((site, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = site.name;
    siteSelect.appendChild(option);
  });
}

changeDateButton.addEventListener("click", () => {
  const siteIndex = siteSelect.value;
  const newDate = newDateInput.value;
  if (siteIndex >= 0 && siteIndex < sites.length && newDate) {
    sites[siteIndex].installationDate = newDate;
    sites[siteIndex].assignedElectrician = [];
    updateAssignmentOutput();
    console.log(sites);
  }
  populateSiteSelect();
});

assignButton.addEventListener("click", updateAssignmentOutput);

function updateAssignmentOutput() {
  const electriciansCopy = [...electricians];

  assignmentOutput.innerHTML = "";

  sites.forEach((site) => {
    if (site.assignedElectrician.length === 0) {
      const availableElectricians = electriciansCopy.filter(
        (electrician) => electrician.assignedSites.length < 3
      );
      if (availableElectricians.length > 0) {
        if (site.grievance) {
          const grievanceElectricians = availableElectricians.filter(
            (electrician) => electrician.grievanceElectrician
          );
          if (grievanceElectricians.length > 0) {
            const electrician = grievanceElectricians[0];
            site.assignedElectrician.push({
              electricianName: electrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            electrician.assignedSites.push(site.name);
          } else {
            const electrician = availableElectricians[0];
            site.assignedElectrician.push({
              electricianName: electrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            electrician.assignedSites.push(site.name);
          }
        } else {
          const generalElectricians = availableElectricians.filter(
            (electrician) => !electrician.grievanceElectrician
          );
          if (generalElectricians.length > 0) {
            const electrician = generalElectricians[0];
            site.assignedElectrician.push({
              electricianName: electrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            electrician.assignedSites.push(site.name);
          } else {
            const grievanceElectricians = availableElectricians.filter(
              (electrician) => electrician.grievanceElectrician
            );
            if (grievanceElectricians.length > 0) {
              const electrician = grievanceElectricians[0];
              site.assignedElectrician.push({
                electricianName: electrician.name,
                electricianAssignDate: new Date().toISOString(),
              });
              electrician.assignedSites.push(site.name);
            }
          }
        }
      }
    }
  });
  sites.forEach((site) => {
    const listItem = document.createElement("li");

    if (site.assignedElectrician.length > 0) {
      const assignedElectrician = site.assignedElectrician[0];
      listItem.textContent = `Site ${site.name} in ${site.city} is assigned to Electrician ${assignedElectrician.electricianName}`;
    } else {
      listItem.textContent = `${site.name} in ${site.city} is not assigned to any electrician.`;
    }

    assignmentOutput.appendChild(listItem);
  });
}

function initializePage() {
  electricians.forEach((electrician) => {
    electrician.assignedSite = null;
  });
  populateSiteSelect();
}

initializePage();
