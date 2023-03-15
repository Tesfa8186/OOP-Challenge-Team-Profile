const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization creation", () => {
    it("Should create an object with a name, id and email", () => {
      const name = "Alec";
      const id = 4321;
      const email = "alec@gmail.com";

      const result = new Employee(name, id, email);

      expect(result.name).toEqual(name);
      expect(result.id).toEqual(id);
      expect(result.email).toEqual(email);
    });
  });
  describe("Initialization types", () => {
    it("Should create an object with a name as a string, id as a number and email as a string", () => {
      const name = "Alec";
      const id = 4321;
      const email = "alec@gmail.com";

      const result = new Employee(name, id, email);

      expect(result.name).toEqual(expect.any(String));
      expect(result.id).toEqual(expect.any(Number));
      expect(result.email).toEqual(expect.any(String));
    });
  });
  describe("getName", () => {
    it("Should return the name when the function is called", () => {
      const result = new Employee("Alec", 4321, "alec@gmail.com");

      expect(result.getName()).toBe("Alec");
    });
  });
  describe("getId", () => {
    it("Should return the ID when the function is called", () => {
      const result = new Employee("Alec", 4321, "alec@gmail.com");

      expect(result.getId()).toBe(4321);
    });
  });
  describe("getEmail", () => {
    it("Should return the Email when the function is called", () => {
      const result = new Employee("Alec", 4321, "alec@gmail.com");

      expect(result.getEmail()).toBe("alec@gmail.com");
    });
  });
  describe("getRole", () => {
    it("Should return the Role when the function is called", () => {
      const result = new Employee("Alec", 4321, "alec@gmail.com");

      expect(result.getRole()).toBe("Employee");
    });
  });
});
