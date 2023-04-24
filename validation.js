$(document).ready(function () {
    $("#conditions").hide();

    let name_err = true;
    let num_err = true;
    let email_err = true;
    let no_err = true;
    let book_err = true;
    let add_err = true;
    //  --------------name validation-------------
    $("#name").keyup(function () {
        nameCheck();
    })

    function nameCheck() {
        let name = $("#name").val();

        if (name.length == '') {
            $("#namecheck").html("*enter name ")
            name_err = false;
            return false;
        }
        else {
            $("#namecheck").html("")

        }
        if (!isNaN(name)) {
            $("#namecheck").html("*enter characters only ")
            name_err = false;
            return false;
        }
        else {
            $("#namecheck").html("")

        }
    }
    // -------------number validation--------------
    $("#number").keyup(function () {
        numberCheck();
    })

    function numberCheck() {
        let num = $("#number").val()

        if (num.length == '') {
            $("#numbercheck").html("*enter number ")
            num_err = false;
            return false;
        }
        else {
            $("#numbercheck").html("")
        }
        if (isNaN(num)) {
            $("#numbercheck").html("*enter number only ")
            num_err = false;
            return false;
        }
        else {
            $("#numbercheck").html("")

        }
    }

    // ---------------Email validation------------
    $("#email").keyup(function () {
        emailCheck();
    })

    function emailCheck() {
        let email = $("#email").val()
        let mailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.length == '') {
            $("#emailcheck").html("*enter Email ")
            email_err = false;
            return false;
        }
        else {
            $("#emailcheck").html("")
        }
        if (email.match(mailcheck)) {
            $("#emailcheck").html("")
            email_err = false;
            return true;
        }
        else {
            $("#emailcheck").html("*enter valid email")
        }
    }
    // -------------book no & name validation--------------
    $("#bookno").keyup(function () {
        booknoCheck();
    })

    function booknoCheck() {
        let no = $("#bookno").val()

        if (no.length == '') {
            $("#booknocheck").html("*enter Book Serial no. ")
            no_err = false;
            return false;
        }
        else {
            $("#booknocheck").html("")
        }
    }
    $("#book").keyup(function () {
        bookCheck();
    })
    function bookCheck() {
        let book = $("#book").val()

        if (book.length == '') {
            $("#bookcheck").html("*Enter Book Name ")
            book_err = false;
            return false;
        }
        else {
            $("#bookcheck").html("")
        }
    }

    // -----------address validation-----------
    $("#address").keyup(function () {
        addressCheck();
    })
    function addressCheck() {
        let address = $("#address").val()

        if (address.length == '') {
            $("#addresscheck").html("*Enter Address ")
            add_err = false;
            return false;
        }
        else {
            $("#addresscheck").html("")
        }
    }
    // ------------checkbox validation-----------
    $("#terms").click(function () {
        $("#conditions").slideToggle()
    })
    // -----------submit--------------
    $("#submit").click(function () {
        name_err = true;
        num_err = true;
        email_err = true;
        no_err = true;
        book_err = true;
        add_err = true;

        nameCheck();
        numberCheck();
        emailCheck();
        booknoCheck();
        bookCheck();
        addressCheck();

        if($("#terms").prop('checked')==false){
            $("#termcheck").html("*Please Allow Terms & Conditions")
            return false
        }

        if ((name_err == true) && (num_err == true) && (email_err = true) && (no_err = true) && (book_err = true) && (add_err = true)) {
            return true;
        }
        else {
            return false;
        }
    });
});