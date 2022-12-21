import styled from "styled-components";

export const ContainerParent = styled.div`
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      :root {
      --blue: #007bff;
      --indigo: #6610f2;
      --purple: #6f42c1;
      --pink: #e83e8c;
      --red: #dc3545;
      --orange: #fd7e14;
      --yellow: #ffc107;
      --green: #28a745;
      --teal: #20c997;
      --cyan: #17a2b8;
      --white: #fff;
      --gray: #6c757d;
      --gray-dark: #343a40;
      --primary: #007bff;
      --secondary: #6c757d;
      --success: #28a745;
      --info: #17a2b8;
      --warning: #ffc107;
      --danger: #dc3545;
      --light: #f8f9fa;
      --dark: #343a40;
      --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
      --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
      }

      html {
      font-size: 62.5%;
      }
      body {
      font-family: var(--font-family);
      font-size: 1.6rem;
      line-height: 1.5;
      text-rendering: optimizespeed;
      color: var(--text-color);
      overflow-y: overlay;
      }
      // scrollbar
      html *::-webkit-scrollbar {
      border-radius: 0;
      width: 8px;
      }
      html *::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.15);
      }

      html *::-webkit-scrollbar-track {
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0);
      }
      button,
      input,
      [tabindex] {
      outline: none;
      border: none;
      }
      a[href] {
      color: var(--text-color);
      text-decoration: none;
      }
`;
