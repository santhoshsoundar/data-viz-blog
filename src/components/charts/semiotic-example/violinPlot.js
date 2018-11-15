import React from 'react'
import { OrdinalFrame } from "semiotic"
import data from "./curry_points"
import "./styles.css";

const Violin = () => {
    return (
        <div style={{ fontFamily: 'PT Sans, sans-serif', textAlign: 'center' }}>
            <h4>
                Semiotic OrdinalFrame Demo
            </h4>
            <OrdinalFrame
                size={[800, 400]}
                data={data}
                oAccessor="SHOT_TYPE"
                rAccessor={d => Math.min(35, d.SHOT_DISTANCE)}
                summaryType={{ type: "violin", bins: 12 }}
                type={{ type: "swarm", r: 2.5, iterations: 300 }}
                projection="horizontal"
                style={d => ({
                    fill: d.EVENT_TYPE === "Made Shot" ? "blue" : "red",
                    stroke: "blue",
                    opacity: 0.65
                })}
                summaryStyle={{ fill: "none", stroke: "#999", strokeWidth: 2 }}
                oPadding={5}
                axis={{ orient: "left" }}
                oLabel={true}
                margin={{ left: 130, bottom: 50, top: 10, right: 10 }}
                pieceHoverAnnotation={true}
            />
        </div>
    )
}

export default Violin