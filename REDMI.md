# Menu Toggle Component

This is a dynamic menu toggle component built with Next.js, TypeScript, and Tailwind CSS. The menu icon transforms into an 'X' when clicked and reverts to its original state when clicked again.

## Features
- Animated transition between menu and close states
- Smooth rotation and opacity effects
- Responsive and minimalistic design

## Installation & Usage
### Next.js & Tailwind CSS
1. Clone this repository or copy the `MenuToggle.tsx` file into your Next.js project.
2. Ensure you have Tailwind CSS configured in your project.
3. Import and use the component in your project:

```tsx
import MenuToggle from "./MenuToggle";

const App = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <MenuToggle />
        </div>
    );
};

export default App;
```

### Vanilla HTML, CSS, and JavaScript
For those who prefer a pure HTML, CSS, and JavaScript approach, use the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Toggle</title>
    <style>
        .menu {
            width: 35px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            position: relative;
        }
        .bar {
            width: 100%;
            height: 5px;
            background-color: black;
            transition: all 0.3s ease-in-out;
        }
        .bar.middle {
            width: 50%;
            align-self: center;
        }
        .menu.active .bar.middle {
            opacity: 0;
        }
        .menu.active .bar.top {
            transform: translateY(10px) rotate(45deg);
        }
        .menu.active .bar.bottom {
            transform: translateY(-10px) rotate(-45deg);
        }
    </style>
</head>
<body>
    <div class="menu" onclick="toggleMenu(this)">
        <div class="bar top"></div>
        <div class="bar middle"></div>
        <div class="bar bottom"></div>
    </div>
    <script>
        function toggleMenu(element) {
            element.classList.toggle('active');
        }
    </script>
</body>
</html>
```

## Dependencies
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) *(for Next.js version)*

## Customization
- Modify the Tailwind classes in `MenuToggle.tsx` or CSS styles in the HTML version to adjust styles as needed.
- Change animation duration or easing styles for a different transition effect.

## License
This project is open-source and available for personal or commercial use.

