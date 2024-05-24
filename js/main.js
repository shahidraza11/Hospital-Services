function dashboardPage() {
    $("#dashboard_page").show();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#doctor_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#patient_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
    $("#dashboard_li").addClass("active");

}
function doctorPage() {
    $("#dashboard_page").hide();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#doctor_page").show();
    $("#dashboard_li").removeClass("active");
    $("#patient_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
    $("#doctor_li").addClass("active");

}

function patientPage() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#patient_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
    $("#patient_li").addClass("active");

}

function appointmentPage() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#patient_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#appointment_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#patient_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
    $("#appointment_li").addClass("active");
}

function schedulePage() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#department_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#schedule_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#patient_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#department_li").removeClass("active");
    $("#schedule_li").addClass("active");
}

function departmentPage() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").hide();
    $("#department_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#patient_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").addClass("active");

}

function addDoctor() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#add_patient_page").hide();
    $("#add_doctor_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").addClass("active");
    $("#patient_li").removeClass("active");
    $("#appointment_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
}

function addPatient() {
    $("#dashboard_page").hide();
    $("#doctor_page").hide();
    $("#patient_page").hide();
    $("#appointment_page").hide();
    $("#schedule_page").hide();
    $("#department_page").hide();
    $("#add_doctor_page").hide();
    $("#add_patient_page").show();
    $("#dashboard_li").removeClass("active");
    $("#doctor_li").removeClass("active");
    $("#patient_li").addClass("active");
    $("#appointment_li").removeClass("active");
    $("#schedule_li").removeClass("active");
    $("#department_li").removeClass("active");
}