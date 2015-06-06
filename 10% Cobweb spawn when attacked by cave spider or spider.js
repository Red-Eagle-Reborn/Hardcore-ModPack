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
  if(Entity.getEntityTypeId(a) == 35 || Entity.getEntityTypeId(a) == 40) {
    if(v = getPlayerEnt()) {
      var rnd = Math.floor(Math.random()*(100));
      if(rnd == 1 || rnd == 5 || rnd == 7 || rnd == 12 || rnd == 14 || rnd == 19 || rnd == 21 || rnd == 25 || rnd == 27 || rnd == 32) {
        Level.setTile(Player.getX(),Player.getY(),Player.getZ(),30);
        Level.setTile(Player.getX(),Player.getY()-1,Player.getZ(),30);
      }
    }
  }
}
