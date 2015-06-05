/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : DevilLord RedEagle / DevilLord
  Mod Release Date : 5 June 2015
  
  By Team Red Eagle.
*/

function deathHook(m,v) {
  if(v == getPlayerEnt()) {
    for(var i = 0; i < 39; i++) {
      Player.clearInventorySlot(i);
    }
  }
}
