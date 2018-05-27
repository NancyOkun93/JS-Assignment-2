// Change the text between the quotation marks and run your code to see your name animated!
drawName('Nancy Okun');

// The code below will allow you to interact with the letters
bounceBubbles();
var message = 'Nancy!';
//drawName(message, purple);

// Letters in the message will cycle through these colors:
letterColors = [red, orange, green, blue, purple];

message = 'Nancy Okun!';

// This variable controls the smallest distance at which a mouse will
mouseResponseThreshold = 10;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.95;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.0;

//message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();
