/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To Your Version.
  
  Mod Creator : respectZ
  Mod Release Date : 6 June 2015
  
  By Team Red Eagle.
*/

function deathHook(m,v) {
if(Entity.getEntityTypeId(v)==38) {
var rnd = Math.floor(Math.random()*20);
if(rnd<=8||rnd==17) {
Level.spawnMob(Entity.getX(v)+0.5,Entity.getY(v)+1,Entity.getZ(v)+0.5,39);
}
}
}
