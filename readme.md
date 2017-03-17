# Progressive enhancement on Funda Application

I've done a progressive enhancement audit on the Funda Application I've build in the last project. This are the results

![Screen from the funda application](screenshots/1.png "Screen from the funda application")

### The app without JavaScript

The application gets all its data from an API by a XMLHttpRequest. Also most of the routing goes via JavaScript. Before disabeling JavaScript I didn't expect the application to work. I've build a fallback for that allready. In the image below you see the message that the user sees when JS is disabled.

![Error message when JS is disabled](screenshots/1.png "Error message when JS is disabled")

##### More solutions

- All the menu functionality can be done via the CSS :target selector.
- JavaScript should be used as an extra functionality, but in this case that is allmost impossible because the API is the main functionality of the application

### The app without images

After searching, the user gets a list of possible matches. Each item has a photo and a short description. If you disable images, the layout breaks as seen in the image below.

![The application without images](screenshots/1.png "The application without images")

The biggest problem is that the image holder has no fixed width and height. The whole is now not so clear to read anymore. Also the logo seems not to be working

##### To Do

- Add a inline SVG logo so that if images are disabled, the logo is still shown.
- Add fixed width and height to the image holders.
- Styling the image holder using the Alt attribute
