/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : ItsPiko
  Mod Release Date : 5 June 2015
  
  By Team Red Eagle.
*/


function destroyBlock(x,y,z,side) {
	var bId = getTile(x,y,z);
	var r = Math.random(Math.random()*(100)+1);
	if(bId == 17 && r < 21) {
		preventDefault();
		Level.dropItem(x,y,z,false);
	}
}
