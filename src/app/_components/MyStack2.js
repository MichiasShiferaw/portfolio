"use client";
import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";

const STATIC_DENSITY = 15;

const MyStack = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
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
        width: width,
        height: height,
        // background: "rgba(255, 0, 0, 0.5)",
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(14, 0, 400, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    // const ball = Bodies.circle(150, 0, 10, {
    //   restitution: 0.9,
    //   render: {
    //     fillStyle: "yellow",
    //   },
    // });

    Render.run(render);

    // Engine.run(engine);
    let runner = Runner.create();
    Runner.run(runner, engine);

    // World.add(engine.world, [floor, ball]);

    // Composite.add(engine.world, stack);

    Composite.add(engine.world, [
      // walls
      Bodies.rectangle(-50, 0, 50, height * 2, { isStatic: true }),
      Bodies.rectangle(width + 50, 0, 50, height * 2, { isStatic: true }),
    //   Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //   Bodies.rectangle(0, 0, width + 50, 1, {
    //     isStatic: true,
    //     render: {
    //       fillStyle: "blue",
    //     },
    //   }),
      //   Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
      //   stack,
    ]);
    for (let i = 0; i < 3; i++) {
      let stack = Bodies.circle(i, 10, 30, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
      });
      Composite.add(engine.world, stack);
    }

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

        render.mouse = mouse;

        // fit the render viewport to the scene
        // Render.lookAt(render, {
        //   min: { x: 0, y: 0 },
        //   max: { x: width, y: height },
        // });


    // Engine.run(engine);
    // Render.run(render);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      const floor = scene.engine.world.bodies[0];

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
  }, [scene, constraints]);

  return (
      <div
        ref={boxRef}
        style={{
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
          width: "100%",
          height: "100%",
          maxHeight:"165px",
        }}
      >
        <canvas ref={canvasRef} />
      </div>

  );
};

export default MyStack;