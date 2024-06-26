/*
Descripcion: Llenado de formulario
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-24
Cambios: NInguno
*/ 

$(".card2:first").hide();

var formulario = document.querySelector("#forma");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    var check1 = false;
    var check2 = false;
    var check3 = false;

    if ($("#check1").is(':checked')) {
        check1 = true;
    } else {
        check1 = false;
    }

    if ($("#check2").is(':checked')) {
        check2 = true;
    } else {
        check2 = false;
    }

    if ($("#check3").is(':checked')) {
        check3 = true;
    } else {
        check3 = false;
    }

    auth.onAuthStateChanged(user => {
        var registro = new Registro(null, user.uid, formulario.titulo.value, formulario.contenido.value, check1, check2, check3);
        if (formulario.titulo.value || formulario.contenido.value) {
            registro.agregar();
            formulario.titulo.value = '';
            formulario.contenido.value = '';
            $(".form-check-input").prop("checked", false);
        } else {
            alert("Aunque sea llena el título y el contenido oye :c");
        }
    })
});

var pendienteslista = document.querySelector(".row");

db.collection('pendientes').onSnapshot(snapshot => {
    var changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            if (change.doc.data().uid == firebase.auth().currentUser.uid) {
                muestraRegistros(change.doc);
            }
        } else if (change.type == 'removed') {
            $("#" + change.doc.id).remove();
        }
    });
});

function muestraRegistros(doc) {
    var registro = new Registro(doc.id, doc.data().uid, doc.data().titulo, doc.data().contenido, doc.data().check1, doc.data().check2, doc.data().check3);

    $(".card2:first").hide();
    console.log("check1 ", registro.check1, " check2 ", registro.check2, " check3 ", registro.check3  )

//En este lugar se agrego las opciones del formulario
    var cards2 = $(".card2:first").clone()
    $(cards2).attr("id", registro.id);
    $(cards2).find(".card-title").html(registro.titulo);
    $(cards2).find(".card-text").html(registro.contenido);
    $(cards2).find("#item1").html("De Enero a Abril");
    $(cards2).find("#item2").html("De Mayo a Agosto");
    $(cards2).find("#item3").html("De Septiembre a Diciembre");

    if (registro.check1 === true) {
        console.log("es verdadero")
        $(cards2).find("#item1").css("color", "black");
    } else if (registro.check1 === false) {
        console.log("es falso")
        $(cards2).find("#item1").css("color", "#cfcfcf");
    }

    if (registro.check2 === true) {
        $(cards2).find("#item2").css("color", "black");
    } else if (registro.check2 === false){
        $(cards2).find("#item2").css("color", "#cfcfcf");
    }

    if (registro.check3 === true) {
        $(cards2).find("#item3").css("color", "black");
    } else if (registro.check3 === false) {
        $(cards2).find("#item3").css("color", "#cfcfcf");
    }

    $(cards2).find(".btn").on("click", (e) => {
        e.preventDefault();
        registro.borrar(registro.id);
    });
    $(cards2).show();
    $(cards2).appendTo($(".row"));


}