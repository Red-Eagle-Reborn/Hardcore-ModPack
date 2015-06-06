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

var hitted = false; 

function attackHook(a,v) {
  if(Entity.getEntityTypeId(v)==33) {
    hitted = true;
  }
}

function modTick () {
  var all = Entity.getAll();
  for(var i in all) {
    var ent = all[i];
    if(Entity.getEntityTypeId(ent)==33 && hitted == false) {
      Entity.setVelX(ent,Entity.getVelX(ent)/100*130);
      Entity.setVelZ(ent,Entity.getVelZ(ent)/100*130);
    }
    if(Entity.getEntityTypeId(ent)==33 && hitted == true) {
      Entity.setVelX(ent,Entity.getVelX(ent)/130*100);
      Entity.setVelZ(ent,Entity.getVelZ(ent)/130*100);
      hitted = false;
    }
  }
}

