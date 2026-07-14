const SYSTEM_PROMPTS={
writer:'You are a concise professional copywriter. Return polished copy only.',
resume:'You are an expert resume writer. Create truthful achievement-focused bullets without inventing metrics.',
cover:'You are a professional cover-letter writer. Keep the letter specific, concise, and truthful.',
summary:'You are an expert summarizer. Preserve meaning and clearly structure the output.'
};
function extractText(p){if(typeof p.output_text==='string')return p.output_text;const parts=[];for(const item of p.output||[])for(const c of item.content||[])if(typeof c.text==='string')parts.push(c.text);return parts.join('\\n').trim()}
export default async(request)=>{
if(request.method!=='POST')return new Response(JSON.stringify({error:'Method not allowed.'}),{status:405});
const key=process.env.OPENAI_API_KEY;if(!key)return new Response(JSON.stringify({error:'Live AI is not configured. Switch to demo mode or add OPENAI_API_KEY in Netlify.'}),{status:503,headers:{'Content-Type':'application/json'}});
try{const{toolId,values}=await request.json();if(!SYSTEM_PROMPTS[toolId])throw new Error('Unknown tool.');
const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',instructions:SYSTEM_PROMPTS[toolId],input:`User inputs:\\n${JSON.stringify(values,null,2)}\\n\\nCreate the requested result.`,max_output_tokens:900})});
const p=await r.json();if(!r.ok)throw new Error(p?.error?.message||'The AI provider returned an error.');const output=extractText(p);if(!output)throw new Error('The AI response was empty.');return new Response(JSON.stringify({output}),{headers:{'Content-Type':'application/json'}})}
catch(e){return new Response(JSON.stringify({error:e.message||'Generation failed.'}),{status:400,headers:{'Content-Type':'application/json'}})}
};
