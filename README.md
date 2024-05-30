# ldai0199_9103_tut3_Major_Project


## Animated Claude Monet
Welcome to my IDEA9103 Creative Coding Major Project (Individual Task)! This project creates a dynamic, responsive canvas drawing using p5.js, featuring shapes, buildings, shadows, and colors with Perlin noise and random values for organic animations.

### **Instructions**
How to Interact with the Work:

- Load the webpage, and the animation will start automatically.


- The animation uses Perlin noise and random values to create organic movements in the shapes, river, and buildings.
The shapes and colors will change and animate continuously.

- Resize the browser window to see the canvas adjust and maintain the proportions of the animation.


## Details of My Individual Approach to Animating the Group Code
### Animation Method: Perlin Noise
I've chosen to animate our group's code using **Perlin noise** due to its exceptional creative potential. Perlin noise offers a dynamic and versatile toolset for creative coding, renowned for its ability to simulate intricate and organic patterns. By harnessing Perlin noise, we can generate visually captivating effects that breathe life into our project.

### Why Perlin Noise?
I've chosen Perlin noise because of its potential to simulate waves and reflections on water surfaces, which I thought would be ideal for bringing life to the picture, considering that half of the image comprises water. Since Perlin noise is typically used to generate smoothly varying values that can simulate natural phenomena, such as waves or organic patterns, I believed that incorporating it into the positions of the lines could help create an animated effect that mimics the behavior of these natural elements. 

### Animated Properties and Uniqueness
In my implementation, I animate the positions of the lines that fill the river and buildings using Perlin noise. This approach creates the illusion of moving waves and shimmering reflections. My animation is distinct from other group members' work in the following ways:

- River Waves: I animate the horizontal lines within the river using Perlin noise to simulate gentle, flowing waves.
 
- Building Reflections: I animate the vertical lines within the buildings using Perlin noise to create a shimmering effect, resembling sunlight reflecting off the surfaces. 
  
By focusing on these specific elements, my animation brings a unique touch to the overall group project, enhancing the visual experience with dynamic and natural movements.(You can find examples of images that influence my inspiration)

### Example 1:
![High Quality Image 1](Images/Example_1.jpg)

### Example 2:
![High Quality Image 2](Images/Example_2.jpg)

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
- [Drawing Wavess](https://medium.com/@yanhann10/drawing-waves-with-p5-js-444f447bdc39)
- IDEA9103 Week 10 Tutorial and Quiz






