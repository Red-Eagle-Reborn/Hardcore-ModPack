/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : DevilLord RedEagle / DevilLord
  Mod Release Date : 06/06/2015
  
  By Team Red Eagle.
*/

function attackHook(a,v) {
  if(Entity.getEntityTypeId(v) == 12 && a == getPlayerEnt()) {
    var rnd = Math.floor(Math.random()*(100));
    if(rnd == 1 || rnd == 6 || rnd == 9 || rnd == 12 || rnd == 15 || rnd == 18 || rnd == 21 || rnd == 24 || rnd == 27 || rnd == 30) {
      Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),36);
      Entity.remove(v);
    }
  }
}
