// =================== PROFESSOR PYTHON Q&A ===================
const QA_KEY_STORAGE='pythonlab_apikey';
function qa_getKey(){return localStorage.getItem(QA_KEY_STORAGE)||'';}
function qa_saveKey_internal(k){localStorage.setItem(QA_KEY_STORAGE,k);}
function qa_clearKey(){localStorage.removeItem(QA_KEY_STORAGE);}

async function askProfessorPython(question){
  const key=qa_getKey();if(!key)throw new Error('NO_KEY');
  const ch=(typeof chapter!=='undefined')?chapter:{title:'Python'};
  const cid=(typeof chapterId!=='undefined')?chapterId:1;
  const concept=ch.steps?.find(s=>s.type==='learn')?.title||ch.title;
  const resp=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({
      model:'claude-haiku-4-5-20251001',max_tokens:220,
      system:`You are "Professor Python", a warm and encouraging Python tutor for a 10-year-old child who loves science and maths. They are on Chapter ${cid}: "${ch.title}" \u2014 specifically learning about "${concept}".\n\nRULES:\n\u2022 Maximum 3 short sentences. Be concise.\n\u2022 Use very simple words. No jargon.\n\u2022 Be enthusiastic and encouraging \u2014 celebrate curiosity!\n\u2022 Use 1-2 relevant emojis.\n\u2022 If the question is off-topic, gently bring them back to Python.`,
      messages:[{role:'user',content:question}]
    })
  });
  if(!resp.ok){const err=await resp.json().catch(()=>({}));if(resp.status===401)throw new Error('BAD_KEY');throw new Error(err.error?.message||`API error ${resp.status}`);}
  const data=await resp.json();return data.content[0].text;
}

function renderQAWidget(){
  return `<div class="qa-widget" id="qa-widget"><button class="qa-toggle" id="qa-toggle" onclick="qa_toggle()"><span>\ud83d\udcac Ask Professor Python a question</span><span id="qa-chevron" class="qa-chevron">\u25bc</span></button><div class="qa-body" id="qa-body" style="display:none"><div class="qa-setup" id="qa-setup"><div class="qa-setup-inner"><div style="font-size:2rem;margin-bottom:0.5rem">\ud83d\udd11</div><h4 style="margin-bottom:0.4rem">Set up Professor Python</h4><p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:1rem">Ask a parent to get a <strong>free API key</strong> at <a href="https://console.anthropic.com" target="_blank" style="color:var(--accent-cyan)">console.anthropic.com</a> and paste it below.</p><div style="display:flex;gap:0.5rem;align-items:center"><input id="qa-key-input" type="password" placeholder="sk-ant-..." class="qa-input" style="flex:1;font-family:monospace;font-size:0.85rem" /><button class="btn btn-primary btn-sm" onclick="qa_saveKey()">Save \u2192</button></div><div id="qa-key-error" class="qa-key-error" style="display:none"></div></div></div><div class="qa-chat" id="qa-chat" style="display:none"><div class="qa-messages" id="qa-messages"><div class="qa-greeting"><span class="qa-avatar">\ud83e\uddd1\u200d\ud83c\udfeb</span><div class="qa-bubble qa-bubble-bot">Hi! I'm Professor Python. Ask me anything about this lesson! \ud83d\udc0d</div></div></div><div class="qa-input-row"><input type="text" id="qa-question" class="qa-input" placeholder="Type your question and press Enter\u2026" onkeydown="if(event.key==='Enter')qa_send()" /><button class="btn btn-primary btn-sm" id="qa-send-btn" onclick="qa_send()">Ask \u2192</button></div><div style="margin-top:0.4rem;text-align:right"><button onclick="qa_reset()" class="qa-key-link">\ud83d\udd11 Change API key</button></div></div></div></div>`;
}

let qa_open=false;
function qa_toggle(){qa_open=!qa_open;document.getElementById('qa-body').style.display=qa_open?'block':'none';document.getElementById('qa-chevron').textContent=qa_open?'\u25b2':'\u25bc';document.getElementById('qa-toggle').classList.toggle('open',qa_open);if(qa_open)qa_init();}
function qa_init(){const hasKey=!!qa_getKey();document.getElementById('qa-setup').style.display=hasKey?'none':'block';document.getElementById('qa-chat').style.display=hasKey?'block':'none';}
function qa_saveKey(){const input=document.getElementById('qa-key-input');const k=(input?.value||'').trim();const errEl=document.getElementById('qa-key-error');if(!k.startsWith('sk-ant-')){errEl.textContent='API keys start with sk-ant- \u2026 check and try again!';errEl.style.display='block';return;}errEl.style.display='none';qa_saveKey_internal(k);qa_init();}
function qa_reset(){qa_clearKey();const msgs=document.getElementById('qa-messages');if(msgs)msgs.innerHTML=`<div class="qa-greeting"><span class="qa-avatar">\ud83e\uddd1\u200d\ud83c\udfeb</span><div class="qa-bubble qa-bubble-bot">Hi! I'm Professor Python. Ask me anything about this lesson! \ud83d\udc0d</div></div>`;qa_init();}
async function qa_send(){const input=document.getElementById('qa-question');const sendBtn=document.getElementById('qa-send-btn');const q=(input?.value||'').trim();if(!q)return;input.value='';sendBtn.disabled=true;sendBtn.textContent='\u2026';qa_addMsg(q,'user');const loadingId='qa-loading-'+Date.now();qa_addTyping(loadingId);try{const answer=await askProfessorPython(q);qa_removeTyping(loadingId);qa_addMsg(answer,'bot');}catch(e){qa_removeTyping(loadingId);if(e.message==='NO_KEY'||e.message==='BAD_KEY'){qa_clearKey();qa_init();qa_addMsg("Hmm, I couldn't connect \u2014 your API key may be wrong. Let's set it up again!",'error');}else{qa_addMsg("Oops, something went wrong! Try again in a moment. \ud83d\udd04",'error');}}sendBtn.disabled=false;sendBtn.textContent='Ask \u2192';}
function qa_addMsg(text,role){const c=document.getElementById('qa-messages');if(!c)return;const div=document.createElement('div');div.className=`qa-msg qa-msg-${role}`;if(role==='user'){div.innerHTML=`<div class="qa-bubble qa-bubble-user">${_escHtml(text)}</div>`;}else if(role==='bot'){div.innerHTML=`<span class="qa-avatar">\ud83e\uddd1\u200d\ud83c\udfeb</span><div class="qa-bubble qa-bubble-bot">${_escHtml(text)}</div>`;}else{div.innerHTML=`<span class="qa-avatar">\u26a0\ufe0f</span><div class="qa-bubble qa-bubble-error">${_escHtml(text)}</div>`;}c.appendChild(div);c.scrollTop=c.scrollHeight;}
function qa_addTyping(id){const c=document.getElementById('qa-messages');if(!c)return;const div=document.createElement('div');div.className='qa-msg qa-msg-bot';div.id=id;div.innerHTML=`<span class="qa-avatar">\ud83e\uddd1\u200d\ud83c\udfeb</span><div class="qa-bubble qa-bubble-bot qa-typing"><span></span><span></span><span></span></div>`;c.appendChild(div);c.scrollTop=c.scrollHeight;}
function qa_removeTyping(id){document.getElementById(id)?.remove();}
function _escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
