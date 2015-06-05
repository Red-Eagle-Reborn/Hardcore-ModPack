/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : respectZ
  Mod Release Date : 5 June 2015
  
  By Team Red Eagle.
*/

function useItem(x,y,z,i,b,s) {
if(b==26) {
var rnd = Math.floor(Math.random()*100);
if(rnd<=10) {
explode(x,y,z,2.5);
}
}
}
