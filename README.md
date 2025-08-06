# README
This is my first chrome extension. It's aimed at speeding up the repetitive task of adding Eventbrite events to my personal Google Calendar.

## Use case
- Start local Python server
- Open an Eventbrite event in your browser
- Open the extension and press the button
- The event is now in Victors calendar 👍

## Workings
The button calls an async JavaScript function that sends an HTTP request to a local Python server using FastAPI.
