import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	return (
		<div className="container">
			<div className="cable_semaforo"></div>

			<div className="cuerpo_semaforo d-flex">
				<div className="cuerpo_semaforodentro d-flex">
					<div className="colores">
						<button
							className={
								"btn btn-danger btn-lg rounded-circle m-1 " +
								(color == "red" ? "selected" : "")
							}
							onClick={() => setColor("red")}
							type="button"></button>

						<button
							className={
								"btn btn-warning btn-lg rounded-circle m-1 " +
								(color == "yellow" ? "selected" : "")
							}
							onClick={() => setColor("yellow")}
							type="button"></button>

						<button
							className={
								"btn btn-success btn-lg rounded-circle m-1 " +
								(color == "green" ? "selected" : "")
							}
							onClick={() => setColor("green")}
							type="button"></button>
					</div>
				</div>
			</div>
		</div>
	);
}
