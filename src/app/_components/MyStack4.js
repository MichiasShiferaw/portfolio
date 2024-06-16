"use client";
import React, { useEffect, useRef } from "react";
import Matter, { Runner } from "matter-js";
import { sample } from "lodash";
// import ES from "../ES.png"

const Scene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const {
        Runner,
        Engine,
        Render,
        World,
        Bodies,
        Mouse,
        MouseConstraint,
        Composites,
    } = Matter;

    const engine = Engine.create();

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 900,
        height: 1400,
        background: 'transparent',
        wireframeBackground: 'transparent',
        fillStyle: "white",
        wireframes: false,
      },
    });

    // const images = [ES, ES, ES, ES];
    let ind=0;
    const stack = Composites.stack(20, 14, 14, 5, 22, 7, (x, y) => {
        ind++;
            return Bodies.rectangle(x, y, 80, 80, {
              restitution: 0.5,
              id:`body-${ind}`,
              render: {
                sprite: {
                    // template:ES,
                  xScale: 0.1,
                  yScale: 0.1,
                },
              },
            });
    });

    World.add(engine.world, [
        // Top
      Bodies.rectangle(0, 0, render.options.width * 2, 20, {
        isStatic: true,
        render: { fillStyle: "#232323" },
      }),
    //   Bottom
      Bodies.rectangle(0, 1400, render.options.width * 2, 20, {
        isStatic: true,
        // render: { fillStyle: "#232323" },
      }),
      Bodies.rectangle(render.options.width, 1300, 20, 2400, {
        isStatic: true,
        // render: { fillStyle: "#232323" },
      }),
      Bodies.rectangle(0, 1300, 20, 2400, {
        isStatic: true,
        // render: { fillStyle: "#232323" },
      }),
    ]);

    World.add(engine.world, stack);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);


    // Engine.run(engine);
    Runner.run(engine)
    Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Scene;
