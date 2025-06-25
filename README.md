# Figma MCP Button Playground

This project is a Storybook-like playground for previewing, interacting with, and testing button components designed in Figma MCP. It allows you to view all button sizes and states, and interactively preview different variants.

## Features
- Three button sizes: 48px (large), 32px (medium), 24px (small)
- Four states: Active, Hover, Pressed, Disabled
- Figma variables for color, padding, border radius, and font
- Interactive playground and all-combinations grid
- Built with React (JSX, Babel in-browser)

## Getting Started

### 1. Clone the Repository
```
git clone https://github.com/johndrach/Figma-MCP-Test.git
cd Figma-MCP-Test
```

### 2. Open in Cursor (or any code editor)
- In Cursor, use "Open Folder" and select the project directory.
- Or, use "Clone from GitHub" and paste the repo URL.

### 3. Run Locally
You do **not** need Node.js or npm for this demo. Just use a local server:

#### Using Python (recommended):
```
python3 -m http.server 8000
```
Then open [http://localhost:8000/index.html](http://localhost:8000/index.html) in your browser.

#### Or use VSCode Live Server, or any static server.

### 4. Usage
- Use the playground controls to preview different button sizes and states.
- See all combinations in the grid below.

## Customization
- Edit `index.html` to change the playground or button logic.
- Button styles and variables are based on Figma MCP exports.

## Figma MCP Directions

To export components from Figma using the MCP plugin:

1. **Install the MCP Plugin:**
   - Go to the [Figma MCP Plugin page](https://www.figma.com/community/plugin/1260170796040739647/MCP-Component-Exporter).
   - Click "Try it out" or "Install" to add it to your Figma plugins.

2. **Open Your Figma File:**
   - Open the Figma file containing the components you want to export.

3. **Select a Component or Frame:**
   - Click on the component, frame, or variant you want to export.

4. **Run the MCP Plugin:**
   - Right-click and choose "Plugins" > "MCP Component Exporter" (or find it under the Plugins menu).

5. **Export to Code:**
   - Follow the plugin instructions to export the selected component to code.
   - Copy the generated code and assets into your project as needed.

For more details, see the [Figma MCP Documentation](https://www.figma.com/community/plugin/1260170796040739647/MCP-Component-Exporter).

## License
MIT 