// =================== PYODIDE RUNNER ===================
let pyodide=null,pyodideReady=false,pyodideLoading=false;

async function initPyodide(){
  if(pyodideReady)return;
  if(pyodideLoading){while(!pyodideReady)await new Promise(r=>setTimeout(r,100));return;}
  pyodideLoading=true;
  try{
    const script=document.createElement('script');
    script.src='https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
    document.head.appendChild(script);
    await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=reject;});
    const msgEl=document.getElementById('loader-msg');
    if(msgEl)msgEl.textContent='Starting Python... \ud83d\udc0d';
    pyodide=await loadPyodide({stdout:()=>{},stderr:()=>{}});
    await pyodide.runPythonAsync(`
import sys,io,traceback
class _OutputCapture:
    def __init__(self):self._buffer=[]
    def write(self,text):self._buffer.append(str(text))
    def flush(self):pass
    def getvalue(self):return''.join(self._buffer)
    def clear(self):self._buffer=[]
_capture=_OutputCapture()
`);
    pyodideReady=true;pyodideLoading=false;
  }catch(err){
    pyodideLoading=false;console.error('Pyodide load error:',err);
    const loader=document.getElementById('pyodide-loader');
    if(loader){loader.innerHTML=`<span style="font-size:3rem">\u26a0\ufe0f</span><div style="color:var(--accent-red);font-size:1rem;text-align:center;max-width:400px"><strong>Python engine failed to load.</strong><br><span style="color:var(--text-secondary);font-size:0.9rem">Please check your internet connection and reload the page.</span></div><button class="btn btn-primary" onclick="location.reload()">\ud83d\udd04 Try Again</button>`;}
    throw err;
  }
}

async function runPython(code){
  if(!pyodideReady||!pyodide)return{output:'\u26a0\ufe0f Python is still loading. Please wait a moment and try again.',error:true};
  try{
    pyodide.runPython('_capture.clear()');
    pyodide.globals.set('_sys',pyodide.pyimport('sys'));
    pyodide.runPython('_sys.stdout=_capture\n_sys.stderr=_capture');
    await pyodide.runPythonAsync(code);
    const output=pyodide.runPython('_capture.getvalue()');
    pyodide.runPython('_sys.stdout=sys.__stdout__\n_sys.stderr=sys.__stderr__');
    return{output:output||'',error:false};
  }catch(err){
    try{pyodide.runPython('_sys.stdout=sys.__stdout__\n_sys.stderr=sys.__stderr__');}catch(_){}
    let partial='';
    try{partial=pyodide.runPython('_capture.getvalue()');}catch(_){}
    const errMsg=formatError(err.message||String(err));
    const output=(partial?partial+'\n':'')+'\u274c '+errMsg;
    return{output,error:true};
  }
}

function formatError(raw){
  if(raw.includes('SyntaxError')){const line=raw.match(/line (\d+)/)?.[ 1];return`Syntax Error${line?' on line '+line:''}: Check your spelling and punctuation!`;}
  if(raw.includes('NameError')){const name=raw.match(/name '(.+)' is not defined/)?.[ 1];return`Name Error: "${name||'something'}" is not defined. Did you spell it correctly?`;}
  if(raw.includes('TypeError'))return`Type Error: You're mixing different types. Try converting them first!`;
  if(raw.includes('ValueError'))return`Value Error: The value you provided isn't valid. Check what you're passing in!`;
  if(raw.includes('ZeroDivisionError'))return`Division Error: You can't divide by zero! Check your denominator.`;
  if(raw.includes('IndexError'))return`Index Error: You're trying to access an item that doesn't exist in the list!`;
  if(raw.includes('KeyError'))return`Key Error: That key doesn't exist in the dictionary! Check your spelling.`;
  if(raw.includes('IndentationError'))return`Indentation Error: Check your spacing! Use 4 spaces or Tab.`;
  const lines=raw.split('\n').filter(l=>l.trim());
  return lines[lines.length-1]||raw;
}
