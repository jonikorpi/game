import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Camera extends Component {

  calculateCameraAngle() {
    return 90 - Game.cameraPositionAngle;
  }

  render() {
    return (
      <Entity
        rotation={[
          this.calculateCameraAngle(),
          0,
          0,
        ]}
      >

        <Entity
          position={[
            0,
            Game.cameraAltitude,
            0,
          ]}
          rotation={[
            -1 * this.calculateCameraAngle() - (90 - this.calculateCameraAngle()),
            0,
            0,
          ]}
        >

          <Entity
            camera={{
              far: this.props.far || 10000,
              near: this.props.near || 0.001,
            }}
            look-controls
            wasd-controls
          >
          </Entity>

        </Entity>

      </Entity>
    );
  }

}
