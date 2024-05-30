# ldai0199_9103_tut3_Major_Project
IDEA9103 Creative Coding Major Project (Individual Task)

## Part 1
# Animated Claude Monet
Welcome to the Animated Art Piece project! This project creates a dynamic, responsive canvas drawing using p5.js, featuring shapes, buildings, shadows, and colors with Perlin noise and random values for organic animations.

# **Instructions**

How to Interact with the Work

- **Loading the Animation:** Load the webpage, and the animation will start automatically.


- The animation uses Perlin noise and random values to create organic movements in the shapes, river, and buildings.
The shapes and colors will change and animate continuously.

- Resizing the Window: Resize the browser window to see the canvas adjust and maintain the proportions of the animation.


## Part 2:
I've chosen to animate our group's code using **Perlin noise** due to its exceptional creative potential. Perlin noise offers a dynamic and versatile toolset for creative coding, renowned for its ability to simulate intricate and organic patterns. By harnessing Perlin noise, we can generate visually captivating effects that breathe life into our project.

I've chosen Perlin noise because of its potential to simulate waves and reflections on water surfaces, which I thought would be ideal for bringing life to the picture, considering that half of the image comprises water. Since Perlin noise is typically used to generate smoothly varying values that can simulate natural phenomena, such as waves or organic patterns, I believed that incorporating it into the positions of the lines could help create an animated effect that mimics the behavior of these natural elements. 

The first two example images below significantly influenced my decision to animate river points using Perlin noise. The first example showcases serene water surface with gentle, organic waves while the second image presents fluid movements, essential for creating a natural aquatic environment. The Third image, with its intricate, wavy lines, highlights Perlin noise's ability to produce complex and dynamic patterns. Together, these visuals underscore Perlin noise's versatility in creating both realistic and abstract wave effects, making it an ideal choice for animating the river section in our group's art piece.

### Example 1:
![High Quality Image 1](Images/Example_1.jpg)

### Example 2:
![High Quality Image 2](Images/Example_2.jpg)
https://medium.com/@yanhann10/drawing-waves-with-p5-js-444f447bdc39

### Example 3:
![High Quality Image 3](Images/Example_3.jpg)

## Enhancements and Modifications

My animation is achieved through continuous drawing, Perlin noise, and random values to produce organic, flowing visuals. Key elements include:

1. **Continuous Drawing Loop**:
   - The `loop()` function in `setup()` allows `draw()` to run continuously, creating real-time animations.

2. **Perlin Noise and Random Values**:
   - `noiseOffset` is used to generate smooth, non-repetitive motion in the animations. This creates natural-looking wave effects and randomness in shapes.

3. **Wavy Line Fills**:
   - The `fillShapeWithWavyLines()` and `fillShapeWithVerticalWavyLines()` functions fill shapes with dynamic wavy lines. These lines are animated using Perlin noise to vary their heights and widths, simulating ripples of water and shimmering building surfaces.

4. **Consistent Randomness**:
   - A fixed random seed (`randomSeed(42)`) ensures that the animations are consistent across different runs, providing reproducibility.

### References

- [p5.js Reference](https://p5js.org/reference/#/p5/noise)
- IDEA9103 Week 10 Tutorial and Quiz






