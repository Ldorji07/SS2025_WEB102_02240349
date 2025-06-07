
---

### ✅ `Reflection.md`

```markdown
# Reflection – Practical 1: Designing & Implementing a REST API

## 🧾 Documentation

### Concepts Covered

- **RESTful API Design**: I learned how to plan out API routes for different resources like users, posts, comments, and likes, using proper URI structure and HTTP methods (GET, POST, PUT, DELETE).
- **Express Setup**: I set up a modular Express.js backend using controllers, routers, and middleware to keep everything organized.
- **Error Handling**: I created custom middleware to handle async errors and provide user-friendly error messages.
- **Content Negotiation**: I implemented a middleware that adjusts the response format (JSON/HTML) based on the `Accept` header.

---

## 💭 Reflection

### What I Learned

This practical helped me understand what goes into building a real-world RESTful API from the ground up. Some key takeaways for me:

- The importance of designing consistent, readable, and RESTful URIs.
- How middleware improves scalability and error handling.
- How to organize code for long-term maintainability.

---

### Challenges Faced

#### 1. **Content Negotiation Logic**
- ❌ At first, I didn’t know how to dynamically switch between JSON and HTML responses.
- ✅ I solved this by checking the `Accept` header in a custom middleware and formatting the response accordingly.

#### 2. **Routing Bugs**
- ❌ My `/users/:id/posts` route wasn’t returning the right data due to incorrect parameter parsing.
- ✅ Fixed by double-checking how Express handles route parameters and using mock data correctly.

#### 3. **Mock Data Confusion**
- ❌ It was easy to forget updates made to `mockData.js`, which led to inconsistent test results.
- ✅ I eventually separated the mock logic into its own utility and reused it across controllers.

---

## ✅ Final Thoughts

This was a solid hands-on experience that taught me how much thinking goes into building and structuring APIs correctly. Even without a database, working with mock data gave me the chance to understand request/response flows, middleware, and proper RESTful API conventions. I feel more confident moving on to future back-end tasks like connecting to databases and deploying APIs to production.
