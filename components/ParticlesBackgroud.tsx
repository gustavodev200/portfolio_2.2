"use client";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import particlesData from "./config/particles-config";

export default function ParticlesComponent(props: { id: string }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles id={props.id} init={particlesInit} options={particlesData} />
  );
}
