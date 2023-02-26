import React, { useEffect } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';
import './editor.css';


function Editor() {

  useEffect(()=> {
    async function init() {
      var editor = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
        mode: {name: 'javascript', json: true},
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        textAlign: 'left',
      });

      editor.setSize('100%', '100%')
    }

    init();
  })

  return (
    <textarea id='realtimeEditor'></textarea>
    // <div id='realtimeEditor' ></div>
  )
}

export default Editor