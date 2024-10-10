// For images (e.g., .png, .jpg, .gif)
declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  // For CSS files
  declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

// For CSS Modules (if applicable)
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}