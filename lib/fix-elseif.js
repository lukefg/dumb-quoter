module.exports = {
    activate: function() {
        return atom.commands.add('atom-text-editor', 'fix-elseif:fixElseif', function() {
            var editor;
            editor = atom.workspace.getActiveTextEditor();
            return fixElseif(editor);
        });
    }
};

function fixElseif(editor) {

    var text;

    if (editor.getSelectedText()) {

        text = editor.getSelectedText();
        return editor.insertText(doreplacement(text));

    } else {

        text = editor.getText();
        return editor.setText(doreplacement(text));

    }

}

function doreplacement(text) {

    text = text.replace(/\n[ ]*elseif\(/g, ' elseif (');
    return text;

};