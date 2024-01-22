"use client"
import { useRef } from "react";
import Matter from "matter-js";
import React from "react";
import img from "../../../public/me.png";

//<canvas id="world"></canvas>




const MyStack3 = () => {

    const boxRef = useRef(null);
    const canvasRef = useRef(null);

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Body = Matter.Body; //use body to rotate/scale

    //some sort of export is necessary so i just put an empty div
    const things = [];

    //body initials
    const y = 200;
    const radius = 20;
    const scale = 0.4;

    //emoji paths
    const emojis = {
      airplane: img,
    };

    var i = 17;
    var j = 150;
    const makeThing = (path) => {
      //for (const emoji in emojis) {
      things.push(
        Bodies.circle(i, j, radius, {
          render: {
            sprite: {
              texture: path,
              xScale: scale,
              yScale: scale,
            },
          },
        })
      );
      i += 2;
      j -= 2;
      //}
    };
    for (const emoji in emojis) {
      makeThing(emojis[emoji]);
    }
    console.log(emojis.size);
    var engine = Engine.create(),
      world = engine.world;

    var render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
        background: "white",
      },
    });

    //items in the world/canvas
    ////walls
    //var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
    var leftWall = Bodies.rectangle(10, 210, 20, 300, { isStatic: true });
    var rightWall = Bodies.rectangle(790, 210, 20, 300, { isStatic: true });
    var bottomWall = Bodies.rectangle(400, 350, 775, 20, { isStatic: true });
    things.push(leftWall, rightWall, bottomWall);

    //mouse constraint stuff
    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      //element: myCanvas, - if this breaks, try canvas: render.canvas,
      constraint: {
        render: {
          visible: false,
        },
        stiffness: 0.8,
      },
    });
    things.push(mouseConstraint);
    // things.push(clubs)
    World.add(world, things);

    Engine.run(engine);

    Render.run(render);
  return (
    <div
      ref={boxRef}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "165px",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

export default MyStack3