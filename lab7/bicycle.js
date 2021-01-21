const Module = (function () {
  function createBicyclePrototype() {
    return {
      speed: 0,
      applyBrake(val) {
        this.speed -= val;
      },
      speedup(val) {
        this.speed += val
      },
    }
  }

  function createMountainBikePrototype(prototype) {
    const obj =  Object.create(prototype, {
      speed: {
        value: 0,
        writable: true,
      },
      gear: {
        value: 0,
        writable: true,
      }
    });
    obj.setGear = function(val) {
      this.gear = val;
    }
    return obj;
  }

  function start() {
    const b = createBicyclePrototype();
    const m1 = createMountainBikePrototype(b);
    const m2 = createMountainBikePrototype(b);

    consoleOut(b, m1, m2);
    console.log('b speed up 10');
    b.speedup(10);
    consoleOut(b, m1, m2);
    console.log('b slow down 5');
    b.applyBrake(5);
    consoleOut(b, m1, m2);
    console.log('m1 set gear 12');
    m1.setGear(12);
    consoleOut(b, m1, m2);
    console.log('m2 set gear 7');
    m1.setGear(7);
    consoleOut(b, m1, m2);
  }

  function consoleOut(...items) {
    items.forEach(function (item) {
      console.log({speed: item.speed, gear: item.gear, itself: item});
    });
  }

  return {
    start
  }
})();

Module.start();
