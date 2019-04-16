const index = require("../index.js");

describe("pathInserted", () => {
  it("Should return false", () => {
    expect(index.pathInserted()).toBe(false);
  });
  it("Should return true", () => {
    expect(index.pathInserted("./README.md")).toBe(true);
  });
});

describe("pathWorking", () => {
  it("Should be false", () => {
    expect(index.pathWorking("./README.txt")).toBe(false);
  });
  it("Should be true", () => {
    expect(index.pathWorking("./README.md")).toBe(true);
  });
});

// describe ('pathIsAbsolute', () => {
//   it('should be true if user enter a path absolute', () => {
//     expect(mdLinks.pathIsAbsolute("/home/laboratoria173/Laboratoria/GDL002-md-links/README.md"))
//       .toBe(true);
//   })
//   it('should be false if user enter a NOT path absolute', () => {
//     expect(mdLinks.pathIsAbsolute("Laboratoria/GDL002-md-links/README.md")).toBe(false);
//   })
// })

describe("pathDirectory", () => {
  it("Should be true", () => {
    expect(index.pathDirectory("/home/laboratoria-183/Escritorio/ventura")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.pathDirectory("./README.md")).toBe(false);
  });
});

describe("pathMd", () => {
  it("Should be true", () => {
    expect(index.pathMd("./README.md")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.pathMd("./README.txt")).toBe(false);
  });
});

describe("redingFile", () => {
  it("Should read the file", () => {
    expect(index.readingFile("./prueba.md")).toBe(true);
  });
});




