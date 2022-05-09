import * as matchers from "jest-extended";
import * as gameOfLife from '../script/game';
expect.extend(matchers);



it("Tableau existe", function () {
    let tableau = document.querySelectorAll("td")
    expect(tableau).toBeGreaterThan(1);
});

it("Au moins une cellule est vivante", function () {
    let alive = document.getElementsByClassName("alive")
    expect(alive).toBeGreaterThan(1);
});



