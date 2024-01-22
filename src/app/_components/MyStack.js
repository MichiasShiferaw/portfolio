"use client"
import React, { useEffect, useRef,useState } from "react";
import Matter from "matter-js";
import img from "../../../public/me.png"


// https://codesandbox.io/p/sandbox/matterjs-xhgj4?file=%2Fsrc%2FApp.js

// https://codesandbox.io/p/sandbox/matterjs-7ry1q

const STATIC_DENSITY = 15;

const MyStack = () => {

  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const DESIGN_PERIMETER = 1920 * 2 + 1080 * 2;

  const WINDOW_PERIMETER = width * 2 + width * 2;
  const SCALE = WINDOW_PERIMETER / DESIGN_PERIMETER;

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();
  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
    // console.log(constraints+"MICH");
  };

  useEffect(() => {
    if (!boxRef.current) {
      // we do not initialize the observer unless the ref has
      // been assigned
      return;
    }

    // we also instantiate the resizeObserver and we pass
    // the event handler to the constructor
    const resizeObserver = new ResizeObserver(() => {
      if (boxRef.current.offsetWidth !== width) {
        setWidth(boxRef.current.offsetWidth);
      }
      if (boxRef.current.offsetHeight !== height) {
        setHeight(boxRef.current.offsetHeight);
      }
    });

    // the code in useEffect will be executed when the component
    // has mounted, so we are certain boxRef.current will contain
    // the div we want to observe
    resizeObserver.observe(boxRef.current);

    // if useEffect returns a function, it is called right before the
    // component unmounts, so it is the right place to stop observing
    // the div

    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Runner = Matter.Runner;
    let Composites = Matter.Composites;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let Composite = Matter.Composite;
    let Vertices = Matter.Vertices;
    let Svg = Matter.Svg;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        // width:boxRef.
        // width: 800,
        // height: 600,
        width: width,
        height: height+150,
        background: "transparent",
        wireframes: false,
      },
    });

    Render.run(render);

    // Engine.run(engine);
    let runner = Runner.create();
    Runner.run(runner, engine);

    // Composite.

    // let stack = Composites.stack(width / 2, 0, 1, 10, 0, 0, function (x, y) {
    //   return Bodies.circle(x, y, 20);
    // });

    // const shapes = [
    //   {
    //     paths: ["M10 10 L50 10 L30 50 Z"], // Example path (triangle)
    //   },
    //   {
    //     paths: ["M20 20 L60 20 L40 60 Z"], // Example path (another triangle)
    //   },
    //   // Add more shapes as needed
    // ];

    // let wordsToDisplay=[
    //     "FaceBook",
    //     "Instagram"
    // ]

    // shapes.forEach((shape) => {
    //   // Convert paths to vertices
    //   const vertexSets = shape.paths.map((path) =>
    //     Vertices.scale(Svg.pathToVertices(path, 30), SCALE, SCALE)
    //   );

    //   const getRandomBetween = (min, max) => Math.random() * (max - min) + min;

    //   // Create the physics body
    //   const body = Bodies.fromVertices(
    //     getRandomBetween(width * 0.3, width * 0.7),
    //     getRandomBetween(height * -0.5, height * -5),
    //     // getRandomBetween(-100 + HEIGHT * -1, -100 + HEIGHT * -2),
    //     vertexSets,
    //     {
    //       label: shape.name,
    //       render: {
    //         sprite: {
    //           texture: shape.texture,
    //           xScale: 0.5 * SCALE,
    //           yScale: 0.5 * SCALE,
    //         },
    //       },
    //     }
    //   );

    //   // Add the body to the world
    //   Composite.add(engine.world, body);
    // });

    // for (let i = 0; i < 10; i++) {
    //   let stack = Bodies.circle(i, 10, 30, {
    //     friction: 0.3,
    //     frictionAir: 0.00001,
    //     restitution: 0.8,
    //   });
    //   Composite.add(engine.world, stack);
    // }

    Composite.add(engine.world, [
      // walls
      Bodies.rectangle(0,height+150, 10, height * 3, {
        isStatic: true,
        label: "leftWall",
      }),
      Bodies.rectangle(width + 1,height+150, 10, height * 3, {
        isStatic: true,
        label: "rightWall",
      }),
      Bodies.rectangle(width,height+150, width + 50, 1, {
        isStatic: true,
        label: "floor",
      }),

      // stack,
    ]);


    for (let i = 0; i < 6; i++) {
      let stack = Bodies.circle(width/2, 10, 12, {
        id:i,
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
      });
    Composite.add(engine.world, stack);
    }
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener("resize", handleResize);
    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [boxRef.current]);



  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      // Dynamically update floor
      console.log(scene.engine.world)
      const floor = scene.engine.world.bodies[0];
      // const rightWall = scene.engine.world.bodies[1];

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      });

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);
    }
  }, [scene, constraints, boxRef]);

  //   Use Matter.Runner.stop
  // https://brm.io/matter-js/docs/classes/Runner.html#method_start

  return (
    <>
      <div className="flex flex-col">
        {/* <span>Redo</span> */}
        {/* <div
        ref={boxRef}
        style={{
          width: "100%",
          height: "120%",
          // maxHeight: "165px",
        }}
      >
        <canvas ref={canvasRef} />
      </div> */}
        <div className="text-center">
          <span className="text-sm text-gray-500">Stack Section</span>
        </div>
      </div>
    </>
  );
};

export default MyStack;
