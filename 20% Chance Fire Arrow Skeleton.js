function attackHook(a,v) {
  if(Entity.getEntityTypeId(a) == 80 && v == getPlayerEnt()) {
    var rnd = Math.floor(Math.random()*(20));
    if(rnd == 0 || rnd == 7 || rnd == 4 || rnd == 16) {
      Entity.setFireTick(v,3);
  }
}
