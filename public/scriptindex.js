$(document).ready(function () {
    console.log("hello")
    $("#handleform").click(function (e) {
        e.preventDefault()
        const name = $('#name').val();
        const testimony = $('#Message').val();

        if (!name) {
            alert("Please fill the name first")
            return
        }

        dataobj = {
            name: name,
            testimony: testimony

        }
        console.log(dataobj)
        $("#submitbutton").text("Request Processing....")
        $.ajax({
            url: 'https://dr-priyanka.vercel.app/form/send/testimony',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataobj),
            success: function (response) {
                $("#handleform").text("Request Submited")
                $('#name').val(' ')

                $('#Message').val(' ')
            },
            error: function (error) {
                $("#handleform").text("Please Try Again")
            }
        })
    })

})
