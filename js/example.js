(function() {
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);
    editor.setOptions({maxLines: 15});
    editor.setShowInvisibles(true);

    var editorConsole = ace.edit("console");
    editorConsole.setTheme("ace/theme/monokai");
    editorConsole.getSession().setMode("ace/mode/html");
    editorConsole.setShowPrintMargin(false);
    editorConsole.setOptions({maxLines: 15});
    editorConsole.setShowInvisibles(true);
    editorConsole.setReadOnly(true);
    

    editor.getSession().on('change', function(e) {
        renderEditorContents();
    });
    
    renderEditorContents();
        
    function renderEditorContents() {
        try {
            with (domsel) {
                var result = eval(editor.getValue()).toString();
                if (isIn(result, 'function (n,i){if(!n&&!i)return~a.indexOf(t)?"')) return;
                result = style_html(result, {
                    'indent_size': 4,
                    'indent_char': ' ',
                    'unformatted': ['span']
                });
                editorConsole.setValue(result);
                editorConsole.clearSelection();
            }
        } catch(e){}
        function isIn(a,b) {return!!~a.indexOf(b) }
    }
    
})();