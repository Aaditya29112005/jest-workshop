# Jest Workshop Submission

## Student Details
- Name: Aaditya Mohan Samadhiya
- Roll Number: 2024-B-28112005
- GitHub Username: Aaditya29112005

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: should just return subtotal if no coupon is provided
**What it protects against:** Makes sure the base price is correct and that the app doesn't accidentally apply a discount when none is should be there.

---

### 2. Test Name: gives 5% automatic discount for orders over 1000
**What it protects against:** Prevents losing money by forgetting the bulk discount or accidentally breaking the logic for big orders.

---

### 3. Test Name: handles FLAT50 coupon and ensures price doesn't go negative
**What it protects against:** A huge bug where if someone buys something for $20 with a $50 coupon, they might get a negative price. This keeps it at $0.

---

### 4. Test Name: crashes on bad subtotal inputs
**What it protects against:** Stops weird data (like strings or negative numbers) from breaking the whole checkout process.

---

### 5. Test Name: doesn't care about coupon case
**What it protects against:** Users getting errors for "save10" just because they didn't write "SAVE10". It keeps the user experience smooth.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes)
- GitHub Actions Run URL: https://github.com/Aaditya29112005/jest-workshop/actions

---

## Reflection (1–2 lines)
I learned that testing isn't just about checking if the code "works", but also about handling edge cases like negative prices. CI is also really cool because it runs everything automatically so you don't have to remember to do it manually.
