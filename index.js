function toggleBold() {
	document.execCommand('bold');
}

function toggleItalic() {
	document.execCommand('italic');
}

function toggleUnderline() {
	document.execCommand('underline');
}

function clearFormatting() {
	document.execCommand('removeFormat');
}

function setHeading(heading) {
	document.execCommand('formatBlock', false, heading);
}

function toggleOrderedList() {
	document.execCommand('insertOrderedList');
}

function toggleUnorderedList() {
	document.execCommand('insertUnorderedList');
}

function alignLeft() {
	document.execCommand('justifyLeft');
}

function alignCenter() {
	document.execCommand('justifyCenter');
}

function alignRight() {
	document.execCommand('justifyRight');
}

function alignJustify() {
	document.execCommand('justifyFull');
}

// Add the commands you want to include in your CDN below:
var commands = [toggleBold, toggleItalic, toggleUnderline, clearFormatting, setHeading, toggleOrderedList, toggleUnorderedList, alignLeft, alignCenter, alignRight, alignJustify];

// Generate the script file for your CDN:
var script = "";
for (var i = 0; i < commands.length; i++) {
	script += commands[i].toString() + "\n\n";
}

console.log(script);
