const crypto=require('crypto');
const FALLBACK_HASH='56646e22262174d73de5c665d943d4ed8d3885b0f17feeaf1306780554a216cc';
function digest(value){return crypto.createHash('sha256').update(String(value||''),'utf8').digest('hex')}
function safeEqual(a,b){try{return crypto.timingSafeEqual(Buffer.from(a,'hex'),Buffer.from(b,'hex'))}catch{return false}}
module.exports=async function handler(req,res){
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({ok:false})}
  res.setHeader('Cache-Control','no-store');
  const expected=(process.env.PRO_ACCESS_HASH||FALLBACK_HASH).trim().toLowerCase();
  const code=req.body&&typeof req.body.code==='string'?req.body.code:'';
  if(!code||!safeEqual(digest(code),expected))return res.status(401).json({ok:false});
  return res.status(200).json({ok:true});
}
