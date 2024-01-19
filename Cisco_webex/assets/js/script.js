// --------------table_tab_button-------------------------------
function tab_function(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//---------------------------End table_tab_button------------------------


// -------------------slider_pagination---------------------
$('.slider_pagination').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// ----------------End slider_pagination--------------------

//-------------------------virtual_meeting_slider--------------
$('.virtual_meeting_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
//------------End virtual_meeting_slider-----------------------

// -------------scrollFunction------------------------------
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// ------------End scrollFunction------------------------------

// --------------Form_validation---------------------------
$(document).ready(function () {
    $.validator.addMethod(
        'validPhone',
        function (value, element) {
            return this.optional(element) || /^[6-9][0-9]{9}$/.test(value);
        },
        'Valid Number only please'
    );

    $("#webex_form").validate({
        rules: {
            name: 'required',
            phone: {
                required: true,

            },
            email: {
                required: true,

            },
            company_name: {
                required: true,
            },
            Designation: {
                required: true,
            }

        },
        messages: {
            name: "Name Field is Required",
            email: {
                required: "Email Field is Required",

            },
            phone: {
                required: "Mobile No. field is Required",
            },
            company_name: {
                required: "Company field is Required",
            },
            Designation: {
                required: "Designation field is Required",
            },
            product_purpose: {
                required: " ",
            }
        },

        errorPlacement: function (error, element) {
            // Custom placement of error messages
            if (element.attr("name") === "name") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "email") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "phone") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "company_name") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "Designation") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "product_purpose") {
                element.attr("placeholder", error.text());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form, e) {
            initiateOTPFormSubmit(form, e);
        }
    });

});
//-----------------End Form Validation--------------------