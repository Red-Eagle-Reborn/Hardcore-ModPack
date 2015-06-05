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


function destroyBlock(x,y,z,side) {
  var bId = getTile(x,y,z);
  if(bId == 37 || bId == 38 || bId == 175 || bId == 31 || bId == 39 || bId == 40) {
    var rnd = Math.floor(Math.random()*(100));
    if(rnd == 2 || rnd == 6) {
      Entity.addEffect(getPlayerEnt(), MobEffect.poison, 60*20, 1, false, true);
    }
  }
}
