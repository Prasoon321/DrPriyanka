$(document).ready(function () {
    console.log("hello")
    $("#handleform").submit(function (e) {
        e.preventDefault()
        const name = $('#namecontact').val()
        const email = $('#Email').val()
        const contact = $('#Phone').val()
        const purpose = $('#Messagecontact').val()

        if (!name) {
            alert("Please fill the namedfe first")
            return
        }
        if (!contact) {
            alert("Please fill the contact first")
            return
        }
        if (!purpose) {
            alert("Mentioning your purpose is good for your query")
            return
        }
        dataobj = {
            name: name,
            email: email,
            contact: contact,
            purpose: purpose

        }
        console.log(dataobj)
        $("#mssgbtn").text("Request Processing...")

        $.ajax({
            url: 'https://www.drpriyankamishra.com/form/send',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataobj),
            success: function (response) {
                $("#mssgbtn").text(" Your message has been sent. Thank you!")
                $('#name').val(' ')
                $('#Email').val('')
                $('#Phone').val(' ')
                $('#Message').val(' ')

            },
            error: function (error) {
                $("#mssgbtn").text("Please Try Again")
                console.log(error)
            }
        })


    })

})
