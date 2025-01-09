# Digital Clock App

A simple digital clock built with React that displays the current time and updates every second. The clock format is 12-hour with AM/PM.

## Features

- Displays the current time in a digital clock format.
- Updates every second using `setInterval`.
- Shows time in a 12-hour format (AM/PM).
- Includes zero-padding for single-digit hours, minutes, and seconds.

## Installation

To use the Digital Clock app in your React project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ngocmaruko/react-digital-clock-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-digital-clock-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the app in your browser by visiting [http://localhost:5173](http://localhost:5173).

## How It Works

- The app uses React's `useState` and `useEffect` hooks.
- `useState` stores the current time.
- `useEffect` sets up a `setInterval` to update the time every second.
- The time is formatted in 12-hour format with AM/PM using the `formatTime` function.
- The clock displays the formatted time.

## Code Explanation

### `useEffect` Hook

The `useEffect` hook runs when the component mounts. It sets up an interval that updates the `time` state every second. When the component unmounts, the interval is cleared to prevent memory leaks.

### `formatTime` Function

This function formats the current time into a 12-hour format with leading zeros for single-digit hours, minutes, and seconds. It also appends "AM" or "PM" depending on the time.

### `padZero` Function

This helper function ensures that the hours, minutes, and seconds always display two digits by adding a leading zero when necessary.

