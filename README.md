# 📬 Constructor Functions – Tasks

Constructors are used to define a template for a new object type.  
The `new` operator will create a new instance of that object.

**Today, you will explore constructor functions, and teach yourselves how to create your own user-defined objects!**

For each of these tasks, type your code directly in the task file — the marking scripts will evaluate what you have written.

---

## ✅ Tasks

---

### **1️⃣ Task 1 – Default values**

You have been presented with a constructor for a Mail object.  
Modify the code so:

- The subject is `"hello"`
- The message is `"world"`

---

### **2️⃣ Task 2 – Execution parameters**

Modify the constructor so:

- The user provides the **subject** and **message**
- The values are taken from **execution parameters** in that order

Example command:

```bash
node index.js 2 hello world
```

Use:

```js
process.argv[3] // subject
process.argv[4] // message
```

Ignore:

- index 0 → node
- index 1 → script name
- index 2 → task selector

---

### **3️⃣ Task 3 – printMail() method**

Modify the constructor to:

✅ Take subject and message from execution parameters  
✅ Add a method named `printMail()` that prints:

```
<subject>: <message>
```

Example:

```
hello: world
```

---

### **4️⃣ Task 4 – Journey constructor**

Create your own constructor:

- Name: `Journey`
- Parameters: `start`, `end`

Then:

- Create two constants: `from`, `to`
- Assign values from execution parameters

Example CLI command:

```bash
node index.js 4 London Paris
```

---

## ⭐ Extra Tasks (Optional)

These tasks are for extra practice — try them if you finish early!

---

### **5️⃣ FriendsList constructor**

Create a constructor that stores a list of names **inside an array**.

✅ Ask the user for how many names to enter  
✅ Prompt that many times  
✅ Store the names inside the object  
✅ Print the array at the end

Example output:

```txt
[ 'Alice', 'Bob' ]
```

---

### **6️⃣ ShoppingList constructor**

Experiment with:

- A flexible list size
- Items with quantities
- Collecting user input multiple times
- Storing the list **inside the object**

You can decide how the list should work!

---

### **7️⃣ Car constructor**

Define what information a car should include.  
You can consider:

- Make, model, year
- Colour
- Number of doors
- Mileage
- Fuel type (combustion or electric)
- Any other useful property

Create objects from this constructor and log them to test.

