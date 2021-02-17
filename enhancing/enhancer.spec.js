const enhancer = require('./enhancer.js');

const obj1 = {
    name: 'Hammer',
    enhancement: 1,
    durability: 1
}
const obj2 = {
    name: 'screwdriver',
    enhancement: 15,
    durability: 1
}
const obj3 = {
    name: 'mouse',
    enhancement: 17,
    durability: 1
}

const obj4 = {
    name: 'rat',
    enhancement: 20,
    durability: 1
}

describe("Tests", () => {
    describe("Fail", () => {
      it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
          const answer = enhancer.fail(obj1);
          expect(answer.durability).toBe(-4);
      });
  
      it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () =>{
        const answer = enhancer.fail(obj2);
        expect(answer.durability).toBe(-9);
      });

      it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)", () => {
        const answer = enhancer.fail(obj3);
        expect(answer.enhancement).toBe(16);
      });
    });
    describe("Success", () => {
        it("The item's enhancement increases by 1.", () => {
            const answer = enhancer.success(obj1);
            expect(answer.enhancement).toBe(2);
        });
    
        it("If the item enhancement level is 20, the enhancement level is not changed.", () =>{
          const answer = enhancer.success(obj4);
          expect(answer.enhancement).toBe(20);
        });
  
        it("The durability of the item is not changed)", () => {
          const answer = enhancer.success(obj4);
          expect(answer.enhancement).toBe(20);
        });
      });
      describe("Repair", () => {
        it("returns a new item with the durability restored to 100.", () => {
            const answer = enhancer.repair(obj1);
            expect(answer.durability).toBe(100);
        });
      });
  });