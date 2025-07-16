## Progress So Far
- Added tailwind css
- Added Prompt font cdn
- Added box-icon cdn
- Header done
- FAQ list 
- Added dark mode functionality
- Update the dark and light mode icon


## Learned 
### focus-visible:ring-2
- `focus-visible`: This is a variant that applies styles only when the element is focused via keyboard navigation (like `Tab`), not mouse clicks.
- `ring-2`:Applies a 2px outline ring (box-shadow-based outline), commonly used to highlight focus.

### Dark Mode
```javascript
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
```
- `document.documentElement` targets the `<html>` tag.

- `classList.add("dark")` enables dark mode.

- `classList.remove("dark")` disables it.

- The effect runs whenever `darkMode` changes.

- Use the code in `App.jsx`

### Accordion
- Inside a button keep the questions and the icon(like plus and minus to showcase is it open or not)