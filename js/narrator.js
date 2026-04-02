// =================== NARRATOR — Web Speech API TTS ===================
// Reads lesson content aloud.

class Narrator {
  constructor() {
    this.synth=window.speechSynthesis;this.utterance=null;this.speaking=false;this.paused=false;this.voice=null;
    this.rate=parseFloat(localStorage.getItem('narrator_rate')||'0.95');
    this._loadVoices();
    if(speechSynthesis.onvoiceschanged!==undefined){speechSynthesis.onvoiceschanged=()=>this._loadVoices();}
  }
  _loadVoices(){
    const all=this.synth.getVoices();if(!all.length)return;
    const want=['Google UK English Female','Google US English Female','Samantha','Karen','Victoria','Google UK English Male','Google US English','Microsoft Zira Desktop - English (United States)','Microsoft David Desktop - English (United States)'];
    for(const name of want){const v=all.find(v=>v.name===name);if(v){this.voice=v;return;}}
    this.voice=all.find(v=>/^en[-_]/i.test(v.lang))||all.find(v=>/^en/i.test(v.lang))||all[0]||null;
  }
  speak(rawText){
    this.stop();if(!rawText||!rawText.trim())return;
    const text=this._clean(rawText);
    this.utterance=new SpeechSynthesisUtterance(text);
    if(this.voice)this.utterance.voice=this.voice;
    this.utterance.rate=this.rate;this.utterance.pitch=1.05;this.utterance.volume=1.0;
    this.utterance.onstart=()=>{this.speaking=true;this.paused=false;this._updateUI();};
    this.utterance.onend=()=>{this.speaking=false;this.paused=false;this._updateUI();};
    this.utterance.onerror=(e)=>{if(e.error!=='interrupted')console.warn('TTS error:',e.error);this.speaking=false;this.paused=false;this._updateUI();};
    this.utterance.onpause=()=>{this.paused=true;this._updateUI();};
    this.utterance.onresume=()=>{this.paused=false;this._updateUI();};
    this.synth.speak(this.utterance);
  }
  togglePause(){if(!this.speaking&&!this.paused)return;if(this.paused){this.synth.resume();}else{this.synth.pause();}}
  stop(){this.synth.cancel();this.speaking=false;this.paused=false;this._updateUI();}
  setRate(r){this.rate=r;localStorage.setItem('narrator_rate',String(r));}
  _clean(txt){
    return txt.replace(/[^\x00-\x7F]/g,' ').replace(/\s*\n\s*/g,'. ').replace(/[*#_`|<>]/g,'').replace(/\.{2,}/g,'.').replace(/\s{2,}/g,' ').trim();
  }
  buildSpeakText(stepType,chapterId,stepTitle){
    const rw=(typeof REALWORLD!=='undefined')&&REALWORLD[chapterId];
    if(rw){
      if(stepType==='learn'&&rw.learn?.speakText)return rw.learn.speakText;
      if(stepType==='intro'&&rw.intro?.speakText)return rw.intro.speakText;
    }
    const area=document.getElementById('content-area');if(!area)return'';
    const clone=area.cloneNode(true);
    clone.querySelectorAll('.CodeMirror,.output-panel,.quiz-options,.lab-toolbar,.lab-success,.hint-box').forEach(el=>el.remove());
    return(clone.innerText||clone.textContent||'').slice(0,900);
  }
  static renderBar(){
    return `<div class="narrator-bar" id="narrator-bar"><span class="narrator-icon">🔊</span><span class="narrator-label">Read this lesson to me</span><div class="narrator-controls"><button class="narrator-btn" id="narrator-play-btn" title="Read aloud" onclick="narratorPlay()">▶ Play</button><button class="narrator-btn" id="narrator-pause-btn" title="Pause / Resume" onclick="narrator.togglePause()" disabled>⏸</button><button class="narrator-btn" id="narrator-stop-btn" title="Stop reading" onclick="narrator.stop()" disabled>⏹</button></div><div class="narrator-speed"><span class="narrator-speed-label">Speed:</span><button class="narrator-speed-btn" onclick="setNarratorRate(0.75)" title="Slow">🐢</button><button class="narrator-speed-btn active" onclick="setNarratorRate(0.95)" title="Normal">🚶</button><button class="narrator-speed-btn" onclick="setNarratorRate(1.25)" title="Fast">🐇</button></div><span class="narrator-status" id="narrator-status"></span></div>`;
  }
  _updateUI(){
    const playBtn=document.getElementById('narrator-play-btn');
    const pauseBtn=document.getElementById('narrator-pause-btn');
    const stopBtn=document.getElementById('narrator-stop-btn');
    const statusEl=document.getElementById('narrator-status');
    if(playBtn){playBtn.disabled=this.speaking&&!this.paused;}
    if(pauseBtn){pauseBtn.disabled=!this.speaking;pauseBtn.textContent=this.paused?'▶ Resume':'⏸';}
    if(stopBtn){stopBtn.disabled=!this.speaking&&!this.paused;}
    if(statusEl){if(this.speaking&&!this.paused){statusEl.textContent='▶ Reading...';statusEl.style.color='var(--accent-green)';}else if(this.paused){statusEl.textContent='⏸ Paused';statusEl.style.color='var(--accent-yellow)';}else{statusEl.textContent='';statusEl.style.color='';}}
  }
}

const narrator=new Narrator();
function narratorPlay(){const stepType=chapter?.steps[currentStep]?.type||'learn';const stepTitle=chapter?.steps[currentStep]?.title||'';const text=narrator.buildSpeakText(stepType,chapterId,stepTitle);narrator.speak(text);}
function setNarratorRate(rate){narrator.setRate(rate);document.querySelectorAll('.narrator-speed-btn').forEach(btn=>btn.classList.remove('active'));const rateMap={0.75:0,0.95:1,1.25:2};const btns=document.querySelectorAll('.narrator-speed-btn');if(btns[rateMap[rate]])btns[rateMap[rate]].classList.add('active');if(narrator.speaking||narrator.paused)narratorPlay();}
function stopNarrator(){narrator.stop();}
window.addEventListener('beforeunload',()=>narrator.stop());
