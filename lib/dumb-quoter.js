var doreplacement, smartreplace;

module.exports = {
	activate: function() {
		return atom.commands.add('atom-text-editor', 'dumb-quoter:dumbdown', function() {
			var editor;
			editor = atom.workspace.getActiveTextEditor();
			return dumbdown(editor);
		});
	}
};

function dumbdown(editor)
{

	var text;

	if (editor.getSelectedText()) {

		text = editor.getSelectedText();
		return editor.insertText(doreplacement(text));

	} else {

		text = editor.getText();
		return editor.setText(doreplacement(text));

	}

}

function doreplacement(text)
{

	console.log("Dumbing down smart double-quotes...");
	text = text.replace(/[\u201C\u201D]/g, '"');

	console.log("Dumbing down smart single-quotes...");
	text = text.replace(/[\u2018\u2019]/g, "'");

	console.log("Dumbing down smart ellipses...");
	text = text.replace(/\u2026/g, "...");

	console.log("Dumbing down en dashes...");
	text = text.replace(/\u2013/g, "-");

	console.log("Dumbing down em dashes...");
	text = text.replace(/\u2014/g, "--");

	return text;

};
