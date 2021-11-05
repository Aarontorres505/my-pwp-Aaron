console.log("helloworld")
$(document).ready(function(){

    document.getElementById("contact")
    $("#contact").validate({
        debug:true,
        errorClass:"alert alert-danger",
        ErrorLabelContainer:"#output-area",
        errorElement:"div",
    //    rules here define what is good or bad input
    //    each rule starts with the form input elements Name attribute
        rules: {
            name: {
                required:true
            },
            email: {
                email:true,
                required: true
            },
            message: {
                required:true,
                maxLength:2000
            }
        },
        message: {
            name: {
                required: "Name is required field"
            },
            email: {
                email:"please provide a valid email",
                required:"email is required"
            },
            message: {
                required:"a message is required",
                Maxlength:"Message must be 2000 characters"
            }
        },
        submitHandler:(form) => {
            $("#contact").ajaxSubmit({
                type:"POST",
                url:$("#contact").attr('action'),
                success:(ajaxOutput) => {
                    $("#output-area").css("display","")
                    $("#output-area").html(ajaxOutput)

                    if($(".alert-success" >= 1)){
                        $("#contact")[0].reset()
                    }
                }
            })
        }
    })
})