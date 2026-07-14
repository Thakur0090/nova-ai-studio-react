export const tools=[
{id:'writer',name:'Smart Writer',eyebrow:'Create',description:'Turn a clear brief into polished professional copy.',icon:'✦',fields:[
{id:'topic',label:'What are you writing?',placeholder:'A launch announcement for a design agency',type:'textarea'},
{id:'audience',label:'Audience',placeholder:'Small business owners',type:'text'},
{id:'tone',label:'Tone',type:'select',options:['Professional','Confident','Friendly','Minimal','Persuasive']},
{id:'length',label:'Length',type:'select',options:['Short','Medium','Detailed']}]},
{id:'resume',name:'Resume Bullet Lab',eyebrow:'Career',description:'Transform responsibilities into stronger achievement-focused bullets.',icon:'▤',fields:[
{id:'role',label:'Role',placeholder:'Front-End Developer',type:'text'},
{id:'task',label:'What did you do?',placeholder:'Built responsive client websites and managed design projects',type:'textarea'},
{id:'impact',label:'Results or impact',placeholder:'Improved mobile usability and delivered projects on schedule',type:'textarea'},
{id:'count',label:'Number of bullets',type:'select',options:['3','4','5']}]},
{id:'cover',name:'Cover Letter',eyebrow:'Career',description:'Draft a focused cover letter from a job and experience summary.',icon:'✉',fields:[
{id:'company',label:'Company',placeholder:'Northstar Digital',type:'text'},
{id:'role',label:'Position',placeholder:'Junior Front-End Developer',type:'text'},
{id:'job',label:'Job requirements',placeholder:'React, responsive design, JavaScript, collaboration...',type:'textarea'},
{id:'experience',label:'Your relevant experience',placeholder:'Web development diploma, studio experience, portfolio projects...',type:'textarea'}]},
{id:'summary',name:'Text Summarizer',eyebrow:'Understand',description:'Condense long material into clear takeaways and actions.',icon:'≡',fields:[
{id:'source',label:'Text to summarize',placeholder:'Paste the source text here...',type:'textarea',large:true},
{id:'format',label:'Output format',type:'select',options:['Key points','Executive summary','Action items','Study notes']},
{id:'depth',label:'Detail level',type:'select',options:['Concise','Balanced','Thorough']}]}
];
export const promptTemplates=['Write a polished product launch announcement','Improve a front-end developer resume bullet','Create a concise project case study','Summarize a long technical article'];
