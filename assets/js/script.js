let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGELICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];
let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUNIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZANARTU",
    paciente: "ANGEL MUNOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VINUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];
// Function that receives the array information and the target where it is going to return the information processed on it.
function patientAttendanceInformation(arrayPos, htmlTarget) {
  document.getElementById(
    `patient_attendance_information_${htmlTarget}`
  ).innerHTML = `Primera Atención: ${arrayPos[0].paciente} - Previsión: ${
    arrayPos[0].prevision
  } | Última Atención: ${arrayPos[arrayPos.length - 1].paciente} - Previsión: ${
    arrayPos[arrayPos.length - 1].prevision
  }`;
}
// Calling the functions and passing the different parameters required to display the information in the HTML page.
patientAttendanceInformation(radiologia, "radiology");
patientAttendanceInformation(traumatologia, "traumatology");
patientAttendanceInformation(dental, "dental");

// Function that receives the array information and the target where it is going to return the information processed on it.
function tablePatientInformationGenerator(arrayPos, htmlTarget) {
  let genericHeaderText = `<tr>
  <th>HORA</th>
  <th>ESPECIALISTA</th>
  <th>PACIENTE</th>
  <th>RUT</th>
  <th>PREVISION</th>
  </tr>`;

  for (let i = 0; i < arrayPos.length; i++) {
    genericHeaderText += `<tr>
      <td>${arrayPos[i].hora}</td>
      <td>${arrayPos[i].especialista}</td>
      <td>${arrayPos[i].paciente}</td>
      <td>${arrayPos[i].rut}</td>
      <td>${arrayPos[i].prevision}</td>
      </tr>`;
  }
  document.getElementById(`table_patient_information_${htmlTarget}`).innerHTML =
    genericHeaderText;
}
// Calling the functions and passing the different parameters required to display the information in the HTML page.
tablePatientInformationGenerator(radiologia, "radiology");
tablePatientInformationGenerator(traumatologia, "traumatology");
tablePatientInformationGenerator(dental, "dental");
