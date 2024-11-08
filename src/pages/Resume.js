// Resume.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import resumeData from "../data/resumeData";
import {
  Container,
  ContactContainer,
  ContactLink,
  ResumeContainer,
  SvgContainer,
  DownloadButton,
} from "../styles/Resume.Style";

const Resume = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", resumeData.length * 150)
      .style("overflow", "visible")
      .style("background", "rgba(255, 255, 255, 0.1)");

    const timelineGroup = svg
      .append("g")
      .attr("transform", "translate(50, 50)");

    const yScale = d3
      .scalePoint()
      .domain(resumeData.map((_, i) => i))
      .range([0, (resumeData.length - 1) * 200])
      .padding(0.3);

    timelineGroup
      .selectAll("line")
      .data(resumeData.slice(1))
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", (_, i) => yScale(i))
      .attr("y2", (_, i) => yScale(i + 1))
      .attr("stroke", "#ffcc00")
      .attr("stroke-width", 2);

    timelineGroup
      .selectAll("circle")
      .data(resumeData)
      .enter()
      .append("circle")
      .attr("cx", 0)
      .attr("cy", (_, i) => yScale(i))
      .attr("r", 20)
      .attr("fill", "#ffcc00");

    timelineGroup
      .selectAll("text.company")
      .data(resumeData)
      .enter()
      .append("text")
      .attr("x", 40)
      .attr("y", (_, i) => yScale(i) - 30)
      .attr("fill", "#ffffff")
      .style("font-size", "1.2rem")
      .style("font-weight", "bold")
      .text((d) => `${d.company}`);

    timelineGroup
      .selectAll("text.details")
      .data(resumeData)
      .enter()
      .append("text")
      .attr("x", 40)
      .attr("y", (_, i) => yScale(i) - 10)
      .attr("fill", "#cccccc")
      .style("font-size", "1rem")
      .text((d) => `${d.title}`);
    // .text((d) => `${d.title}, ${d.period}`);
    timelineGroup
      .selectAll("text.period")
      .data(resumeData)
      .enter()
      .append("text")
      .attr("x", 40)
      .attr("y", (_, i) => yScale(i) + 10)
      .attr("fill", "#aaaaaa")
      .style("font-size", "0.9rem")
      .text((d) => d.period);

    resumeData.forEach((d, i) => {
      timelineGroup
        .selectAll(`text.experience-${i}`)
        .data(d.details)
        .enter()
        .append("text")
        .attr("x", 40)
        .attr("y", (_, j) => yScale(i) + 30 + j * 20)
        .attr("fill", "#aaaaaa")
        .style("font-size", "0.9rem")
        .text((detail) => detail);
    });
  }, []);

  const downloadResume = () => {
    window.location.href = `${process.env.PUBLIC_URL}/Kidus_Tadessa_Resume_2024.docx`;
  };

  return (
    <Container>
      <ResumeContainer>
        <DownloadButton onClick={downloadResume}>
          Download Full Resume
        </DownloadButton>
        <SvgContainer>
          <svg ref={svgRef}></svg>
        </SvgContainer>
      </ResumeContainer>
      <ContactContainer>
        <h1>Contact Information</h1>
        <p>Email: KidusTadesseArega@gmail.com</p>
        <ContactLink
          href="https://www.linkedin.com/in/kidustadesse"
          target="_blank"
        >
          LinkedIn Profile
        </ContactLink>
      </ContactContainer>
    </Container>
  );
};

export default Resume;
