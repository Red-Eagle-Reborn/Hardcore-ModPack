/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : DevilLord RedEagle / DevilLord
  Mod Release Date : 05/06/2015
  
  By Team Red Eagle.
*/

function attackHook(a,v) {
  if(Entity.getEntityTypeId(a) == 80 && v == getPlayerEnt()) {
    var rnd = Math.floor(Math.random()*(20));
    if(rnd == 0 || rnd == 7 || rnd == 4 || rnd == 16) {
      Entity.setFireTick(v,3);
    }
  }
}
