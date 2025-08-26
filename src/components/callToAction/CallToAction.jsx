"use client";

export default function CallToAction({
  title = "Transform Your Business Digitally",
  text = "Empower your operations with innovative web and mobile applications, intelligent automation, and data-driven insights.",
  buttonText = "Get Started",
  buttonLink = "#",
  shapes = [
    {
      className: "shape-1",
      path: "M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z",
      transform: "translate(100 100)",
    },
    {
      className: "shape-2",
      path: "M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z",
      transform: "translate(100 100)",
    },
    {
      className: "shape-3",
      path: "M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z",
      transform: "translate(100 100)",
    },
  ],
  dots = [
    { className: "dots-1", patternId: "dot-pattern-1" },
    { className: "dots-2", patternId: "dot-pattern-2" },
  ],
}) {
  return (
    <section id="call-to-action" className="call-to-action section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row content justify-content-center align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">{title}</h2>
            <p className="mb-4">{text}</p>
            <a href={buttonLink} className="btn btn-cta">
              {buttonText}
            </a>
          </div>

          {/* Shapes */}
          {shapes.map((shape, idx) => (
            <div key={idx} className={`shape ${shape.className}`}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d={shape.path} transform={shape.transform}></path>
              </svg>
            </div>
          ))}

          {/* Dots */}
          {dots.map((dot, idx) => (
            <div key={idx} className={`dots ${dot.className}`}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern
                  id={dot.patternId}
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </pattern>
                <rect
                  width="100"
                  height="100"
                  fill={`url(#${dot.patternId})`}
                ></rect>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
