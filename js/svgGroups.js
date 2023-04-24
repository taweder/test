$(document).ready(function(){
    $("#placer").load("images/complexLeg.svg", function(){

        $("#patella").click(function(){
            console.log("Patella");
            $("#patellaModal").modal();
        });

        $("#femur").click(function(){
            console.log("Femur");
            $("#femurModal").modal();
        });

    });
});