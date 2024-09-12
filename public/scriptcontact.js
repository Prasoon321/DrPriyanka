$(document).ready(function () {
    console.log("hello")
    $("#handleform").submit(function (e) {
        e.preventDefault()
        const name = $('#name').val()
        const email = $('#Email').val()
        const contact = $('#Phone').val()
        const purpose = $('#Message').val()

        if (!name) {
            alert("Please fill the name first")
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
        $("#submitbutton").text("Request Processing....")
        $.ajax({
            url: 'https://dr-priyanka.vercel.app/form/send',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataobj),
            success: function (response) {
                $("#submitbutton").text("Request Submited")
                $('#name').val(' ')
                $('#Email').val('')
                $('#Phone').val(' ')
                $('#Message').val(' ')
            },
            error: function (error) {
                $("#submitbutton").text("Please Try Again")
            }
        })
    })

})
