
---

### ✅ `Reflection.md`

```markdown
# Reflection – Practical 2: REST API Design

## 📄 Documentation

### Concepts Applied

- **RESTful API Principles**: Used standard HTTP methods to create predictable, meaningful routes for videos, users, comments, and likes.
- **Modular Express Architecture**: Applied good separation of concerns by creating dedicated folders for controllers, routes, and models.
- **In-Memory Data Management**: Temporarily used JavaScript arrays to simulate database operations, preparing for real database integration.
- **Testing with Postman/Curl**: Verified endpoints and HTTP responses to ensure API worked as intended.

---

## 🪞 Reflection

### What I Learned

- Designing and implementing a REST API from scratch gave me insight into real-world backend architecture.
- Defining endpoints upfront helped create a roadmap for scalable application logic.
- Even without a database, creating in-memory models helped me prototype logic efficiently.

---

### Challenges Faced

#### 1. Managing Nested Routes
- ❌ Issue: Nested endpoints like `/api/users/:id/videos` initially failed due to incorrect route chaining.
- ✅ Fix: Created sub-routes with `express.Router()` and passed route params correctly.


---

#### 2. Handling Edge Cases in In-Memory Data
- ❌ Issue: The server crashed when accessing a non-existent video.
- ✅ Fix: Added proper 404 handling with early `return res.status(404)...`.


---

#### 3. Maintaining Clean Structure
- ❌ Issue: The main file (`index.js`) started becoming messy.
- ✅ Fix: Moved setup code to `app.js` and kept `index.js` as a clean entry point.

---

## ✅ Conclusion

This practical helped me grasp the core backend principles behind any modern web app. Even though the data isn't yet persistent, building and testing the API was an essential step before integrating with a database or frontend. I'm more confident now in designing scalable, modular backend systems.


# Practical 4 Reflection

## 🧾 Documentation

### Concepts Applied

- **Prisma ORM**: Simplified database operations through a strongly-typed client and schema-based design. Models define data structure and relationships.
- **PostgreSQL**: Used as the persistent database, allowing scalable and structured storage of users, videos, and interactions.
- **Authentication**: Applied industry-standard JWT authentication and password hashing using `bcrypt`.
- **Migrations**: Prisma migrations were used to apply schema changes and maintain database versioning.

---

## 💭 Reflection

### What I Learned

- Prisma makes working with relational databases much easier by abstracting away SQL but still offering flexibility when needed.
- Managing a real database (vs. in-memory) adds a new layer of realism to backend development—such as query optimization and data relationships.
- Understanding one-to-many and many-to-many relationships in schema design is critical for building scalable applications.

### Challenges & Solutions

#### 1. **Prisma Client Errors After Schema Change**
- ❌ Issue: "Cannot find model User" after updating `schema.prisma`.
- ✅ Solution: I forgot to run `npx prisma generate` after editing the schema.


---

#### 2. **Database Connection Failure**
- ❌ Issue: Prisma couldn't connect to the database.
- ✅ Solution: I fixed the `DATABASE_URL` in `.env` by updating the username/password and confirmed PostgreSQL was running.


---

#### 3. **Authentication Middleware Not Triggering**
- ❌ I missed adding the `auth` middleware to a protected route.
- ✅ I added `auth` to the routes and verified token validation using Postman.

---

## ✅ Conclusion

This practical gave me real-world exposure to integrating a relational database into a Node.js application. I now better understand how to design data schemas, handle migrations, and use ORMs like Prisma to manage data efficiently. It also deepened my understanding of authentication and security practices in backend systems.


# Reflection – Practical 5: Supabase Cloud Storage

## 📄 Documentation

### Key Concepts Applied

1. **Cloud Storage with Supabase**
   - Replaced disk-based uploads with cloud-hosted media.
   - Used Supabase buckets with fine-grained access control.

2. **Direct File Upload from Frontend**
   - Files are uploaded straight to Supabase, reducing backend load.
   - Updated the frontend logic to securely handle the upload flow.

3. **Access Policies**
   - Configured authenticated-only upload permissions.
   - Allowed public viewing of uploaded videos and thumbnails.

4. **Prisma Schema Extension**
   - Added new fields to track `videoStoragePath` and `thumbnailStoragePath`.
   - Ensured storage URLs were persisted for future access.

---

## 🪞 Reflection

### What I Learned

- Supabase provides an incredibly smooth interface for cloud storage with built-in CDN support.
- Direct file uploads significantly reduce server complexity and improve upload speed.
- Updating environment variables across both frontend and backend is crucial for Supabase integration.
- It’s important to manage secure vs. public access properly when dealing with user content.

### Challenges Faced

#### 1. Supabase Environment Variables
- ❌ Issue: Files failed to upload; Supabase client was undefined.
- ✅ Fix: I double-checked `.env` and `.env.local` files and found a typo in the key name.

---

#### 2. Access Denied on Video URL
- ❌ Issue: Thumbnails weren’t loading; Supabase returned 403.
- ✅ Fix: Added a public SELECT policy to the "thumbnails" bucket.

---

#### 3. Migration Script Errors
- ❌ Issue: Old files weren't uploading due to incorrect file paths.
- ✅ Fix: Modified the migration script to ensure paths matched local folder structure before upload.


---

## ✅ Conclusion

This practical made me realize how essential cloud storage is in scalable web applications. Supabase not only simplified the transition from local to remote storage but also gave me practical experience in managing security policies, storage buckets, and direct uploads. It’s a powerful toolset I’m excited to keep using in future projects.
