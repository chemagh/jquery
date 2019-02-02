// function bold(){
//     $("#para").css("fontWeight","bold")
// }
// function italic(){
//     $("#para").css("fontStyle","italic")
// }
// function underline(){
//     $("#para").css("textDecoration","underline")
// }

function bold(){
	let fontWeight = $("#para").css("fontWeight")
	if (fontWeight== "normal" || fontWeight=="400") {
		$("#para").css("fontWeight", "bold");
	}else{
		$("#para").css("fontWeight","normal")
	}

}
function italic(){
	let fontStyle = $("#para").css("fontStyle")
	if (fontStyle== "normal") {
		$("#para").css("fontStyle", "italic");
	}else{
		$("#para").css("fontStyle","normal")
	}

}
function underline(){
    let textDecoration = $("#para").css("textDecoration")
    if (textDecoration=="none solid rgb(0, 0, 0)") {
        $("#para").css("textDecoration", "underline");
    } else {
        $("#para").css('textDecoration', "none solid rgb(0, 0, 0)")
    }
}
function changeSize(){
	let size = $("#size").val();
	$("#para").css("fontSize", size + "px");
}
$("#size").change(changeSize)

function changeStyle(){
    let font = $("#font").val();
	$("#para").css("fontFamily", font);
}
$("#font").change(changeStyle)

