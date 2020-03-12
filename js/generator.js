$(document).ready(() => {

  $("#generate").click(function () {
    var studentName = $("#student-name").val().trim();
    var studentEmail = $("#student-email").val().trim();
    var courseCode = $("#course-code").val().trim().toUpperCase();
    var tutorName = $("#tutor-name").val().trim();
    var duration = $("#duration").val();
    var courseDatetime = $("#datetime").datetimepicker('viewDate');
    var courseDate = courseDatetime.format("DD/MM/YYYY");
    var courseTime = courseDatetime.format("HH:mm");
    var formTime = courseDatetime.format("YYYY-MM-DD+HH:mm");


    if (studentName === "" || studentEmail === "" || courseDate === "" || tutorName === "" || duration === "") {
      $("#alert-message").show();
      return false
    } else {
      $("#alert-message").hide();
      $("#email-modal").modal('toggle');
    }

    var form_url = `https://docs.google.com/forms/d/e/1FAIpQLSeNGhZQayZ7iLAgAbxK-zmYjdI5W6Ay_nIPGQFvCMGCe7Nw-A/viewform?usp=pp_url&entry.668293069=${studentName.replace(/ /g, "+")}&entry.1612582341=${courseCode}&entry.1135943685=${tutorName.replace(/ /g, "+")}&entry.1298509667=${formTime}&entry.287924418=${duration.replace(/ /g, "+")}`;

    var subject = `Course Evaluation Form - ${courseCode} at ${courseDate}`;
    var message = `Hi ${studentName},
    
Thanks for studying with us!
    
You have completed course ${courseCode} on ${courseDate}. The course was tutored by ${tutorName}, started at ${courseTime} for ${duration}.
    
Please fill the Course Evaluation Form to confirm your attendance and give us feedback.
    
${form_url}
    
Regards,
${tutorName}`;

    $("#send-to").val(studentEmail).change();
    $("#subject").val(subject).change();
    $("#message-text").val(message).change();


  });

  $("#send-message").click(function () {
    var sendTo = $("#send-to").val().trim();
    var subject = $("#subject").val();
    var message = $("#message-text").val();

    // replace new line characters
    var mailTo = `mailto:${sendTo}?subject=${subject}&body=${message}`.replace(/\n/g, "%0d%0a");

    location.href = mailTo;
  })

});



