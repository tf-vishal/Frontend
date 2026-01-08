# Browser Rendering - Notes

---

## How much is browser important for frontend?
<!-- VERY IMPORTANT -->

Understanding how browsers work is **fundamental** to becoming a better frontend developer. It helps you:
- Write more efficient code
- Debug issues faster
- Optimize performance
- Understand why certain things happen

---

## Q. How do browsers render websites?

- Browser is a simple software that can load files from your computer OR load files from a remote server
- Then browser figures out how to display your content

### Question: How do browsers compute how to display any file?

<!-- What is browser engine ??? -->

**Answer:** Browsers have an **engine** that decides algorithmically how to display content.

**Examples of Browser Engines:**
- Gecko (Firefox)
- Blink (Chrome, Edge)
- WebKit (Safari)

---

## How browser loads the file (HTML, CSS, JS)

### Step-by-Step Process:
```
HTML file 
    ↓
Browser reads this in the form of BYTES
    ↓
Bytes are converted to CHARACTERS
    ↓
TOKENIZATION
    ↓
Browser converts tokens into NODES
    ↓
Represent these nodes in the form of TREES (DOM TREE)
```

**Note:** Every node is considered distinct with distinct properties.

---

### Building the Render Tree:
```
DOM TREE + CSSOM TREE 
    ↓
Layout/Reflow Step
    ↓
RENDER TREE
```

---

## ⚠️ CRITICAL BEHAVIOR:

1. **DOM construction is PAUSED when browser engine hits `<script>` tag**
   - Browser must execute the script before continuing

2. **In most engines, JavaScript is HALTED until CSSOM is constructed**
   - JS waits for CSS to be fully parsed
   - This is why CSS is "render-blocking"

---

## Key Takeaways:

- Browser rendering is a multi-step process: Bytes → Characters → Tokens → Nodes → DOM Tree
- DOM + CSSOM = Render Tree
- `<script>` tags block DOM construction
- CSS must load before JS executes
- Understanding this helps optimize page performance

---

## Performance Implications:

### Why this matters:
- Place `<script>` tags at end of `<body>` or use `defer`/`async`
- Minimize CSS for faster CSSOM construction
- Critical CSS should load first
- Reduce render-blocking resources

---

**Date:** January 9, 2026  
**Topic:** Browser Rendering Fundamentals  
**Status:** ✅ Core Concept Understood