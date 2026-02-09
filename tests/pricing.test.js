const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount tests", () => {
    it("should just return subtotal if no coupon is provided", () => {
        expect(calculateFinalAmount(500, "")).toBe(500);
        expect(calculateFinalAmount(100, null)).toBe(100);
    });

    it("gives 5% automatic discount for orders over 1000", () => {
        expect(calculateFinalAmount(2000, null)).toBe(1900);
        expect(calculateFinalAmount(1000, null)).toBe(950);
    });

    it("handles SAVE10 coupon (10% off, max 100)", () => {
        expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
        expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
        expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
    });

    it("handles FLAT50 coupon and ensures price doesn't go negative", () => {
        expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
        expect(calculateFinalAmount(30, "FLAT50")).toBe(0);
        expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
    });

    it("crashes on bad subtotal inputs", () => {
        expect(() => calculateFinalAmount(-5, null)).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount(NaN, null)).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount("100", null)).toThrow("Invalid subtotal");
    });

    it("doesn't care about coupon case", () => {
        expect(calculateFinalAmount(100, "save10")).toBe(90);
        expect(calculateFinalAmount(100, "fLaT50")).toBe(50);
    });

    it("errors on random/invalid coupon codes", () => {
        expect(() => calculateFinalAmount(100, "NOPE")).toThrow("Invalid Coupon");
    });
});
