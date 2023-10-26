const electricians = [
  {
    name: "Digvijay",
    phoneNumber: "6161232524",
    zone: [],
    grievanceElectrician: false,
    assignedSites: [],
  },
  {
    name: "Pranav",
    phoneNumber: "6161232524",
    zone: [],
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
  {
    name: "Javed",
    phoneNumber: "6161232524",
    zone: ["GURGAON"],
    grievanceElectrician: false,
    assignedSites: [],
  },
];

const sites = [
  {
    name: "Manthan ",
    phone: "6163988877",
    city: "GREATER NOIDA",
    AssignedElectritian: [],
    InstallationDate: "2023-10-06T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Samrat Jain ",
    phone: "6163988877",
    city: "GHAZIABAD",
    AssignedElectritian: [],
    InstallationDate: "2023-03-07T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Abhimanu Jaiswal ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-10-14T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Abhinav Tambi (3rd Floor) ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-12-15T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Abhinav Tambi (2nd Floor) ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-12-15T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Avi Arora",
    phone: "6163988877",
    city: "NOIDA",
    AssignedElectritian: [],
    InstallationDate: "2023-03-01T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Mukul Rathi",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-08-04T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Pankaj Khatri",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-10-18T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Abhinav Tambi (4RTH Floor) ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-12-15T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Mohit Garg ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-12-08T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "PRATEEK  ",
    phone: "6163988877",
    city: "NOIDA",
    AssignedElectritian: [],
    InstallationDate: "2023-03-02T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Ishaan ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-09-15T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Official Ronnie Hunk ",
    phone: "6163988877",
    city: "GHAZIABAD",
    AssignedElectritian: [],
    InstallationDate: "2023-11-15T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "AARYA MOTORS ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-08-17T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Utkarsh ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-03-07T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Vijesh Wadhwa ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-10-22T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Shahzama ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-12-19T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "aartstore  ",
    phone: "6163988877",
    city: "ANY FOR NOW",
    AssignedElectritian: [],
    InstallationDate: "2023-03-05T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Sameer ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-10-20T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Anuj Pandey ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-03-17T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Randeep Reehal ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-03-15T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "Harsh Bansal ",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-03-03T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "neha05singh  ",
    phone: "6163988877",
    city: "ANY FOR NOW",
    AssignedElectritian: [],
    InstallationDate: "2023-03-02T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "pujapunj9  ",
    phone: "6163988877",
    city: "ANY FOR NOW",
    AssignedElectritian: [],
    InstallationDate: "2023-03-18T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "  Divanshu Arora ",
    phone: "6163988877",
    city: "ANY FOR NOW",
    AssignedElectritian: [],
    InstallationDate: "2023-02-28T15:00:23.292Z",
    grievance: false,
  },
  {
    name: "Sushil Flock Coliving",
    phone: "6163988877",
    city: "GURGAON",
    AssignedElectritian: [],
    InstallationDate: "2023-03-03T02:36:48.624Z",
    grievance: false,
  },
  {
    name: "Yogesh Agarwal ",
    phone: "6163988877",
    city: "NOIDA",
    AssignedElectritian: [],
    InstallationDate: "2023-07-24T00:00:00.000Z",
    grievance: true,
  },
  {
    name: "MLKR Pvt. Ltd (ref 2) ",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-09-10T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "KRISHNA ROY",
    phone: "6163988877",
    city: "DELHI",
    AssignedElectritian: [],
    InstallationDate: "2023-01-04T00:00:00.000Z",
    grievance: false,
  },
  {
    name: "Anuj Gupta  ",
    phone: "6163988877",
    city: "NOIDA",
    AssignedElectritian: [],
    InstallationDate: "2023-10-18T00:00:00.000Z",
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
    sites[siteIndex].AssignedElectritian = [];
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
    if (site?.AssignedElectritian.length === 0) {
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
            site.AssignedElectritian.push({
              electricianName: electrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            electrician.assignedSites.push(site.name);
          } else {
            const electrician = availableElectricians[0];
            site.AssignedElectritian.push({
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
            site.AssignedElectritian.push({
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
              site.AssignedElectritian.push({
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

    if (site.AssignedElectritian.length > 0) {
      const AssignedElectritian = site.AssignedElectritian[0];
      listItem.textContent = `Site ${site.name} in ${site.city} is assigned to Electrician ${AssignedElectritian.electricianName}`;
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
