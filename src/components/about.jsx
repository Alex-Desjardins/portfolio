import React, { Component } from 'react'

export default class About extends Component {
    render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a highly motivated, empathetic, curious, and optimistic
                        back-end developer based in Denver, Colorado. I have a
                        passion for data, testing, and functionality.
                      </p>
                      <p>
                        Before I becoming a software engineer, I worked as a Surgical Neurophysiologist.
                        I spent the majority of my time monitoring patients spine and brain funtion during
                        highly complex surgeries; ensuring there wasn't any damage being done to neural structures
                        near the surgical site.
                      </p>
                      <p>
                        While working in neuro diagnostics, I began to become more
                        drawn to the technical side of neuromonitoring and medical
                        devices. After tryong out code academy, I decided to seek
                        out a more technical role in health care.
                      </p>
                      <p>
                        My lifelong interest in technology, love of languages,
                        and desire to creatively solve problems led me to pursue
                        programming and enroll at Turing School of Software and
                        Design. Turing is a 7-month, in-person, intensive
                        programming school. Throughout the program, I learned
                        new programming languages, tools, and technologies
                        quickly. Most of my programming experience is in Ruby on
                        Rails, but I've also used Python, HTML/CSS, and Javascript.
                      </p>
                      <p>
                        Outside of coding, I'm an avid rock climber, wood-worker,
                        and health addict.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    }
}
