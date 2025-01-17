import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../constants"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState } from "react"

import Loader from "../components/Loader"
import Developer from "../components/Developer"

const Experience = () => {
  const [animation, setAnimation] = useState("idle")

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <OrbitControls enableZoom={false} />

              <Suspense fallback={<Loader />}>
                <Developer
                  position-y={-4}
                  scale={3}
                  animationName={animation}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                (
                  { id, name, pos, icon, duration, title, animation },
                  index
                ) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimation(animation.toLowerCase())}
                    onPointerOver={() => setAnimation(animation.toLowerCase())}
                    onPointerOut={() => setAnimation("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt={name} className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
