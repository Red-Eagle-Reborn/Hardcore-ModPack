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

var renight = false;

function modTick() {
  if(Level.getTime == 14000) {
    var renight = true;
  }
  if(Level.getTime == 22000 && renight == true) {
    Level.setTime(14001);
    renight = false;
  }
}
