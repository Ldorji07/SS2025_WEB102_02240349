
---

### ✅ `Reflection.md`

```markdown
# Practical 3 Reflection

## 🧾 Documentation

### Concepts Applied

1. **Multer for File Uploads**  
   I used Multer to handle multipart/form-data on the server. It simplifies file parsing, storage, and validation.

2. **Validation and Error Handling**  
   Implemented backend checks for file size and type. Also added error middleware to format responses for invalid uploads.

3. **CORS**  
   Configured the server to allow requests from the frontend, which runs on a different port.

4. **Frontend Integration**  
   Updated the React frontend’s `axios.post()` to interact with the new Express route and track upload progress using `onUploadProgress`.

---

## 💭 Reflection

### What I Learned

- **Full File Upload Flow:** I now understand how to handle file uploads end-to-end, from React to Express.
- **Multer Configuration:** I learned how to customize Multer’s storage and fileFilter functions.
- **User Feedback:** Tracking upload progress and showing errors dramatically improves user experience.

### Challenges & Solutions

1. **CORS Issue**
   - ❌ Error: `Blocked by CORS policy`
   - ✅ Solution: I added the `cors` middleware to the backend and explicitly allowed `http://localhost:3000`.


2. **Wrong File Type**
   - ❌ Tried uploading `.exe` file.
   - ✅ Fixed by setting a file type filter in the Multer middleware (`application/pdf` only).


3. **Upload Progress Not Displaying**
   - ❌ Initially didn't see the progress bar update.
   - ✅ Realized `onUploadProgress` needs to be correctly passed in Axios config.

  

---

## ✅ Conclusion

This practical helped me bridge the gap between frontend form handling and backend file processing. The real-time upload tracking and error validation gave me insight into creating more responsive, user-friendly applications. It also introduced important backend considerations like security, validation, and storage practices.
